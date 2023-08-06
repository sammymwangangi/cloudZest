import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="CloudZest" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="CloudZest" />
          <meta name="description" content="Empowering your digital success" />
          <meta name="format-detection" content="telephone=254725626388" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#ff4694" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#F82409" />

          <link rel="apple-touch-icon" href="/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://cloudzest.net" />
          <meta name="twitter:title" content="CloudZest" />
          <meta
            name="twitter:description"
            content="Empowering your digital success"
          />
          <meta
            name="twitter:image"
            content="https://cloudzest.net/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@cloud_zest" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CloudZest" />
          <meta
            property="og:description"
            content="Empowering your digital success"
          />
          <meta property="og:site_name" content="CloudZest" />
          <meta property="og:url" content="https://cloudzest.net" />
          <meta
            property="og:image"
            content="https://cloudzest.net/apple-touch-icon.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
