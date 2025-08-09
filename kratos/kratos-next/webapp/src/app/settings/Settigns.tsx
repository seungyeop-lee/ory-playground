'use client';

import dynamic from 'next/dynamic';
import { isUiNodeInputAttributes, SettingsFlow } from '@ory/client-fetch';
import Link from 'next/link';
import { InputHTMLAttributes, useEffect, useState } from 'react';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  flowData: SettingsFlow;
}

export default function Settings({ flowData }: Props) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // This useEffect is to add the values in their respective fields
  useEffect(() => {
    setEmail(flowData.identity.recovery_addresses?.at(0)?.value || '');
    setFirstName(flowData.identity.traits.name.first);
    setLastName(flowData.identity.traits.name.last);
  }, [flowData]);

  console.log('flowData', flowData);

  return (
    <div>
      <h1>Settings</h1>
      <Link href="/">Homepage</Link>
      <br />
      <Link href="/dashboard">Dashboard</Link>
      <div>
        <h2>Profile</h2>
        {flowData && (
          <form
            method="POST"
            action={flowData.ui.action}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '400px',
              justifyContent: 'space-around',
              width: '300px',
            }}
          >
            {/* This Adds a hidden input for CSRF Token  */}
            {flowData.ui.nodes
              .filter((node) => isUiNodeInputAttributes(node.attributes) && node.attributes.name === 'csrf_token')
              .map((node, index) => {
                const nodeKey = `${node.type}-${index}`;
                return <input {...(node.attributes as InputHTMLAttributes<HTMLInputElement>)} key={nodeKey} />;
              })}

            <label>
              <span>E-Mail</span>
              <input
                name="traits.email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
              />
            </label>

            <label>
              <span>First Name</span>
              <input
                name="traits.name.first"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </label>

            <label>
              <span>Last Name</span>
              <input
                name="traits.name.last"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </label>

            {/* This button will update the email, first and last name  */}
            <button name="method" type="submit" value="profile">
              Update Profile
            </button>
            <br />
            <h2>Change Password?</h2>

            <label>
              <span>New Password</span>
              <input name="password" type="password" placeholder="Password" />
            </label>

            {/* This button is used to upadate the password  */}
            <button name="method" type="submit" value="password">
              Update Password
            </button>
          </form>
        )}
      </div>

      {flowData.ui.messages && (
        <>
          <h3>Errors</h3>
          <ReactJsonView
            src={flowData.ui.messages}
            style={{ fontSize: '20px', marginTop: '30px' }}
            enableClipboard={false}
            displayDataTypes={false}
          />
        </>
      )}

      {flowData && (
        <ReactJsonView
          src={flowData}
          style={{ fontSize: '20px', marginTop: '30px' }}
          enableClipboard={false}
          displayDataTypes={false}
        />
      )}
    </div>
  );
}
