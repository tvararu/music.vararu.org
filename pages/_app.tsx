import App from "next/app";
import Head from "next/head";
import "./main.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>music.vararu.org</title>
          <meta name="description" content="A music streaming service" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
