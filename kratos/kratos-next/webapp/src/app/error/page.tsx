import { FlowError } from '@ory/client-fetch';
import { redirect } from 'next/navigation';
import { KRATOS_API_URL } from '@/utils/config';
import { kratos } from '@/utils/kratos';
import Error from '@/app/error/Error';

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;

  let flowError: FlowError | undefined = undefined;

  if (!id) {
    redirect(`${KRATOS_API_URL}/self-service/login/browser`);
  } else {
    try {
      const data = await kratos.getFlowError(
        { id: String(id) },
        {
          cache: 'no-cache',
        },
      );
      flowError = data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return <>{flowError && <Error flowError={flowError} />}</>;
}
