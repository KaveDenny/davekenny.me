import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dave Kenny - Marketing | Editing | Building",
  description: "Personal website of Dave Kenny - Marketing, Editing, and Building",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
              <body className="bg-gray-50 text-gray-900">
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