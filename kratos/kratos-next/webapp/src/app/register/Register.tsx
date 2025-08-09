'use client';

import { isUiNodeInputAttributes, RegistrationFlow } from '@ory/client-fetch';
import { InputHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  flowData: RegistrationFlow;
}

export default function Register({ flowData }: Props) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Register</h1>
        <form method="POST" action={flowData.ui.action}>
          {flowData.ui.nodes
            .filter((node) => isUiNodeInputAttributes(node.attributes) && node.attributes.name === 'csrf_token')
            .map((node, index) => {
              const nodeKey = `${node.type}-${index}`;
              return <input {...(node.attributes as InputHTMLAttributes<HTMLInputElement>)} key={nodeKey} />;
            })}
          <input type="email" id="traits.email" name="traits.email" required placeholder="email" />
          <input type="text" id="traits.name.first" name="traits.name.first" required placeholder="first" />
          <input type="text" id="traits.name.last" name="traits.name.last" required placeholder="last" />
          <input name="password" type="password" id="password" required placeholder="password" />
          <button type="submit" name="method" value="password">
            Register
          </button>
          <button type="submit" name="provider" value="github">
            Signup with github
          </button>
        </form>
      </div>

      <ReactJsonView
        src={flowData}
        style={{ fontSize: '16px' }}
        enableClipboard={true}
        displayDataTypes={false}
        collapsed={3}
        indentWidth={2}
      />
    </div>
  );
}
