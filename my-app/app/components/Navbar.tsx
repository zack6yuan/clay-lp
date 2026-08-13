'use client'
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className='w-full mx-auto max-w-7xl flex items-center justify-between pl-5 pr-3 text-black bg-white border border-red-500 p-3 rounded-full'>
      <div className="cursor-pointer flex items-center gap-2" onClick={() => router.push("#")}>
        <div className="h-5 w-5 bg-linear-to-r from-red-500 t rounded-full"></div>
        <h1 className="text-2xl font-bold">Lorem</h1>
      </div>
      <div>
        <ul className="flex gap-8 font-medium text-gray-500">
          <li>Product</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="flex gap-10 font-medium">
        <button className="text-gray-500">Sign In</button>
        <button className="bg-black text-white px-5 py-2 rounded-full">Get Started</button>
      </div>
    </nav>
  )
}