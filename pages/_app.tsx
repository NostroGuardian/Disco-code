import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
export function Loading(): any {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart =  (url:string) =>   (url !== router.asPath) && setTimeout(() => {setLoading(true); NProgress.start();});
    const handleComplete =  (url:string) =>  (url === router.asPath) &&  setTimeout(() => {setLoading(false); NProgress.done();});

  router.events.on('routeChangeStart', () => {
    console.log('началось');
    
  }
  );

  router.events.on('routeChangeComplete', () => {
    console.log('закончилось');
    
  }
  );
  // router.events.on('routeChangeError',handleComplete);

  return () => {
    router.events.off('routeChangeStart',handleStart);
    router.events.off('routeChangeComplete',handleComplete);
    router.events.off('routeChangeError',handleComplete);
  
  };
   


  });

  return loading && (
    <>
      <span className={'loader'}> </span>
    </>

  );
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width; initial-scale=1" />
      </Head>

      <Component {...pageProps} key={router.pathname} /></>




  );
}

export default MyApp;


