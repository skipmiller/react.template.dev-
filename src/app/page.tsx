export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">React Template Dev</h1>
      <p className="text-xl mb-8">A starter template for building React applications</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Modern Stack</h2>
          <p>Built with Next.js, TypeScript, and modern tools for a great developer experience.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">App Router</h2>
          <p>Using Next.js App Router for improved routing and layouts.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">TypeScript</h2>
          <p>Type safety for better code quality and developer experience.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Ready to Extend</h2>
          <p>Prepared for adding authentication, database, and more as your project grows.</p>
        </div>
      </div>
    </div>
  );
} 