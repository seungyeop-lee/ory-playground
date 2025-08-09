'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  logoutUrl: string;
}

export default function Dashboard({ logoutUrl }: Props) {
  const [userIdentity, setUserIdentity] = useState();
  const [errorData, setErrorData] = useState();

  useEffect(() => {
    // Get the info on user who is using the session
    fetch('http://127.0.0.1:4433/sessions/whoami', { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorData(data);
        } else if (data.active) {
          setUserIdentity(data);
        }
      });
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  if (errorData || !userIdentity) {
    return (
      <div>
        <Link href="/login">Login</Link>
        <br />
        <Link href="/register">Register</Link>
        <ReactJsonView
          src={errorData!}
          style={{ fontSize: '20px', marginTop: '30px' }}
          enableClipboard={false}
          displayDataTypes={false}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Dashboard</h1>

      {userIdentity && (
        <>
          <Link href={logoutUrl}>LOGOUT</Link>
          <br />
          <Link href="/settings">Settings</Link>

          <ReactJsonView
            src={userIdentity}
            style={{ fontSize: '20px', marginTop: '30px' }}
            enableClipboard={false}
            displayDataTypes={false}
          />
        </>
      )}
    </div>
  );
}
