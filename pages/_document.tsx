/* eslint-disable react/self-closing-comp */
import { Html, Head, Main, NextScript } from 'next/document';


const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6E3FF3" />
        <meta
          name="description"
          content="Welcome to Memesocial, a vibrant community dedicated to memes! Here, you can share your favorite memes, discover new ones, and connect with fellow meme enthusiasts. Whether you're looking for humor, inspiration, or a good laugh, Memesocial has got you covered. Join us today and become part of the meme revolution!"
        />
        <link rel="icon" href="./favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="./manifest.json" />
        <meta
          property="og:title"
          content="Memesocial: Share, Discover, and Connect through Memes!"
        />
        <meta
          property="og:description"
          content="Welcome to Memesocial, a vibrant community dedicated to memes! Here, you can share your favorite memes, discover new ones, and connect with fellow meme enthusiasts. Whether you're looking for humor, inspiration, or a good laugh, Memesocial has got you covered. Join us today and become part of the meme revolution!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://afrimeme.vercel.app/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://memesocial.vercel.app" />

        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content={`${Date.now()}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@memesocial01" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta
          name="twitter:title"
          content="Memesocial: Share, Discover, and Connect through Memes!"
        />
        <meta
          name="twitter:description"
          content="Welcome to Memesocial, a vibrant community dedicated to memes! Here, you can share your favorite memes, discover new ones, and connect with fellow meme enthusiasts. Whether you're looking for humor, inspiration, or a good laugh, Memesocial has got you covered. Join us today and become part of the meme revolution!"
        />
        <meta
          name="twitter:image"
          content="https://afrimeme.vercel.app/android-chrome-512x512.png"
        />
      </Head>
      <title>Meme Social</title>
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="modal"></div>
    </Html>
  );
};

export default Document;
