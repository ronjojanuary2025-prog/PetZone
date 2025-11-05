import Link from 'next/link';
import Image from 'next/image';
import { MdPhone, MdErrorOutline } from 'react-icons/md';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      {/* Top bar */}
      <div className="hidden md:flex justify-end items-center text-sm px-8 py-1 text-purple-800 bg-gray-50 border-b border-gray-100 gap-8">
        <div className="flex items-center gap-1">
          <MdPhone className="inline" size={16}/>
          <span>Office: <a href="tel:07592900941" className="font-bold hover:underline">075929 00941</a></span>
        </div>
        <div className="flex items-center gap-1">
          <MdErrorOutline className="inline" size={16}/>
          <span>After Hours Emergencies: <span className="font-bold">075929 00941</span></span>
        </div>
      </div>
      {/* Main nav */}
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 no-underline select-none">
          <Image src="/petzone.ico" alt="PetZone Logo" width={48} height={48} className="rounded-full" />
          <span className="flex flex-col">
            <span className="text-2xl font-bold text-pink-600 leading-none">PetZone</span>
            <span className="text-sm font-medium text-purple-700 leading-none">Multi-Speciality Pet Clinic</span>
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex text-base font-semibold text-purple-800">
          <Link href="/" className="hover:text-pink-600 no-underline">Home</Link>
          <Link href="/about" className="hover:text-pink-600 no-underline">About Us</Link>
          <Link href="/services" className="hover:text-pink-600 no-underline">Services</Link>
          <Link href="/store" className="hover:text-pink-600 no-underline">Shop</Link>
          <Link href="/contact" className="hover:text-pink-600 no-underline">Contact</Link>
        </nav>
        <div className="flex items-center">
          <Link href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-7 py-2 transition-colors text-base shadow-sm">Request An Appointment</Link>
        </div>
      </div>
    </header>
  );
}


