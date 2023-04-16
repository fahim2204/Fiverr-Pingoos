import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.flowbite.com/fb-ui/v0.18.1/css/flowbite.css" />
          <script src="https://cdn.flowbite.com/fb-ui/v0.18.1/js/flowbite.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
