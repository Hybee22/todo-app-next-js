import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="_next/static/style.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/time.js" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
