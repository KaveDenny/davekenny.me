import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Dave Kenny - Marketing | Editing | Building",
  description: "Personal website of Dave Kenny - Marketing, Editing, and Building",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJTXSQ8L');
            `,
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJTXSQ8L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <header className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <nav className="flex justify-start items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                davekenny
              </Link>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Dave Kenny
          </div>
        </footer>
      </body>
    </html>
  );
}