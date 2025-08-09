'use client';

import dynamic from 'next/dynamic';
import { isUiNodeInputAttributes, LoginFlow } from '@ory/client-fetch';
import Link from 'next/link';
import { InputHTMLAttributes } from 'react';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  flowData: LoginFlow;
}

export default function Login({ flowData }: Props) {
  console.log(flowData);
  return (
    <div>
      <div>
        <p>Sign in</p>
        {flowData && (
          <form method="POST" action={flowData.ui.action}>
            {/* This Adds a hidden input for CSRF Token  */}
            {flowData.ui.nodes
              .filter((node) => isUiNodeInputAttributes(node.attributes) && node.attributes.name === 'csrf_token')
              .map((node, index) => {
                const nodeKey = `${node.type}-${index}`;
                return <input {...(node.attributes as InputHTMLAttributes<HTMLInputElement>)} key={nodeKey} />;
              })}

            <input id="password_identifier" type="text" name="password_identifier" />
            <input name="password" type="password" id="password" />
            <button type="submit" name="method" value="password">
              Sign In
            </button>
            <button type="submit" name="provider" value="github">
              Login with github
            </button>
          </form>
        )}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/register">Register</Link>
          <br />
          <Link href="/recovery">Recovery</Link>
        </div>
      </div>

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
