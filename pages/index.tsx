import { SWRConfig } from 'swr';
import Nav from '@/components/nav';
import { useState } from 'react';
import { useSearchMeme } from '@/shared/hooks';
import { MemeView } from '@/components/memeView';


const LandingPage = ({ fallback }: any) => {
  const [search, setSearch] = useState("")
  const { isLoading, data } = useSearchMeme(search)
  return <SWRConfig value={{}}>
    <Nav setSearch={setSearch} search={search} />
    <MemeView isLoading={isLoading} data={data} />
  </SWRConfig >
};


export default LandingPage;


