import { Head, Html, Main, NextScript } from "next/document"

// You shouldn't need to touch this file, unless you have specific reasons to
// modify the HTML outside of our app. What we have here is just the Next.js default
// If we deleted this file the app will work identically
export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="סיכום שנה - לובי 99" />
        <meta property="og:image" content="https://lobby-delta.vercel.app/lobbyImg.png" />
        <meta property="og:url" content="https://lobby-delta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta name="theme-color" content="red" />
        <link rel="manifest" href="manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}