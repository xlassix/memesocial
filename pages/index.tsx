import { SWRConfig } from 'swr';
import { useSearchMeme } from '@/shared/hooks';
import { MemeView } from '@/components/memeView';
import Head from 'next/head';


const LandingPage = ({ fallback, search }: any) => {
  const { isLoading, data } = useSearchMeme(search)
  return <SWRConfig value={{}}>
    <MemeView isLoading={isLoading} data={data} />
  </SWRConfig >
};


export default LandingPage;


