import Document, { Head, Main, NextScript } from 'next/document';

const globalStyles = `
  *,
  *:after,
  *:before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0; }
  
  html {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 16px;
      height: 100%; }
  
  body {
      background-color: #000;
      color: #fff;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 100%;
      font-size: 100%;
      height: 100%;
      margin: 0;
      min-height: 100%;
      padding: 0;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased; }
  
  main {
      margin: 0 auto;
      max-width: 80em;
      padding: 2rem; }
  main h1 {
      font-size: calc(36px + 1.6vw);
      line-height: 1.3; }
  main p {
      font-size: calc(18px + .25vw);
      line-height: calc(1.5em + .2vw);
      margin: calc(1em + 1.3vw) 0; }
  
  a {
      background-color: transparent;
      border-bottom: .125rem solid #f3db18;
      color: #f3db18;
      overflow-wrap: break-word;
      text-decoration: none;
      word-wrap: break-word; }
  
  footer {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 1rem; }
  footer span {
      padding: 0 1rem; }
  footer .lovely {
      color: #d00;
      font-style: normal;
      font-size: 48px; }
  footer .logo {
      height: auto;
      width: 100px; }
  
  .text-center {
      text-align: center; }
`;

export default class extends Document {
  render () {
    return (
      <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/message/static/favicon.ico" />
        <style>{globalStyles}</style>
      </Head>
      <body className="text-center">
        <div className="root">
          <Main />
        </div>
        <NextScript />
      </body>
      </html>
    )
  }
}
