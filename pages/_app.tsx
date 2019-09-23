import App from "next/app";
import Head from "next/head";
import "../lib/main.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>music.vararu.org</title>
          <meta name="description" content="A music streaming service" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
