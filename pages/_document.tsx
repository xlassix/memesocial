/* eslint-disable react/self-closing-comp */
import { Html, Head, Main, NextScript } from 'next/document';


const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <title>MemeAfrica</title>
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="modal"></div>
    </Html>
  );
};

export default Document;
