import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full bg-gray-200 antialiased" lang="en">
        <Head title="Friendly Goggles">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="flex h-full flex-col justify-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
