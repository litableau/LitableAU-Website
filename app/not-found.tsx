import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h3>
        <p className="text-gray-500 mb-6">
          Could not find the requested resource
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

