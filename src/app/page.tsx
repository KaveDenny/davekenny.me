import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Site Title */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-2">DAVE KENNY</h3>
            <p className="text-lg text-gray-600">Marketing | Editing | Building</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link 
              href="/sundial" 
              className="block text-lg text-gray-900 hover:text-gray-600 transition-colors underline"
            >
              → Projects
            </Link>
            <a 
              href="https://linkedin.com/in/davejameskenny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-lg text-gray-900 hover:text-gray-600 transition-colors underline"
            >
              → LinkedIn
            </a>
            <a 
              href="mailto:hello@davekenny.me" 
              className="block text-lg text-gray-900 hover:text-gray-600 transition-colors underline"
            >
              → Contact
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}