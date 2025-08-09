'use client';

import dynamic from 'next/dynamic';
import { isUiNodeInputAttributes, RecoveryFlow } from '@ory/client-fetch';
import { InputHTMLAttributes } from 'react';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  flowData: RecoveryFlow;
}

export default function Recovery({ flowData }: Props) {
  console.log(flowData);
  return (
    <div>
      <div>
        <p>Recovery</p>
        {flowData && (
          <form method="POST" action={flowData.ui.action}>
            {flowData.ui.nodes
              .filter((node) => isUiNodeInputAttributes(node.attributes) && node.attributes.name === 'csrf_token')
              .map((node, index) => {
                const nodeKey = `${node.type}-${index}`;
                return <input {...(node.attributes as InputHTMLAttributes<HTMLInputElement>)} key={nodeKey} />;
              })}
            <input name="email" type="text" id="email" required />
            <button type="submit" name="method" value="link">
              Recover
            </button>
          </form>
        )}
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
