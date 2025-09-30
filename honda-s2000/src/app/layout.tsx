import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S-2K',
  description: 'A tribute to the engineering, design, and culture of Honda\'s iconic roadster. This site celebrates the timeless appeal of a car that continues to inspire enthusiasts worldwide.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-wf-domain="s-2k.webflow.io" data-wf-page="687891a1de8273e3ce3ef3d5" data-wf-site="687891a1de8273e3ce3ef3c0" data-wf-status="1">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script dangerouslySetInnerHTML={{
          __html: `WebFont.load({  google: {    families: ["IBM Plex Mono:200,300,regular"]  }});`
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`
        }} />
        <link href="/css/s-2k.webflow.shared.6ae152944.css" rel="stylesheet" type="text/css" />
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  )
}
