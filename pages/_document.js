import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_95d4dd307465c0824381217a348a499aebce/sdk.js"),(document.body || document.head).appendChild(n)}();`,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
