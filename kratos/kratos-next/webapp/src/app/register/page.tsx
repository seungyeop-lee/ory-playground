import { redirect } from 'next/navigation';
import { KRATOS_API_URL } from '@/utils/config';
import { RegistrationFlow } from '@ory/client-fetch';
import { kratos } from '@/utils/kratos';
import { headers } from 'next/headers';
import Register from '@/app/register/Register';

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allCookies = (await headers()).get('cookie') || '';
  const { flow: flowId } = await searchParams;

  let flowData: RegistrationFlow | undefined = undefined;

  if (!flowId) {
    redirect(`${KRATOS_API_URL}/self-service/registration/browser`);
  } else {
    try {
      const data = await kratos.getRegistrationFlow(
        { id: String(flowId), cookie: allCookies },
        {
          cache: 'no-cache',
        },
      );
      flowData = data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return <>{flowData && <Register flowData={flowData} />}</>;
}
