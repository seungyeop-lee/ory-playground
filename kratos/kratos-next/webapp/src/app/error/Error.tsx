'use client';

import dynamic from 'next/dynamic';
import { FlowError } from '@ory/client-fetch';

const ReactJsonView = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

interface Props {
  flowError: FlowError;
}

export default function Error({ flowError }: Props) {
  console.log(flowError);
  return (
    <div>
      <h1>Error component</h1>
      {flowError && typeof window !== 'undefined' && (
        <ReactJsonView
          src={flowError}
          style={{ fontSize: '20px', marginTop: '30px' }}
          enableClipboard={false}
          displayDataTypes={false}
        />
      )}
    </div>
  );
}
