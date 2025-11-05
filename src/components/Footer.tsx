import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhoneIphone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10">
      <div className="container-wide grid md:grid-cols-4 gap-8 pb-8">
        {/* Logo and Address */}
        <div>
          <div className="flex items-center mb-2">
            <img src="/petzone.ico" alt="PetZone Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-lg text-brand-blue">PetZone</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">Multi-Speciality Pet Clinic, Pet Shop & Grooming Centre</div>
          <div className="flex items-start gap-2 text-sm text-gray-600 mb-1"><MdLocationOn className="mt-0.5 text-brand-blue"/>Near Marigiri School, Opposite Sai Service, MC Road, Koothattukulam</div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1"><MdPhoneIphone className="text-brand-blue"/>075929 00941</div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><MdEmail className="text-brand-blue"/>petZonekoothattukulam@gmail.com</div>
        </div>
        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/departments" className="hover:underline">Departments</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-2">Our Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Consultation & Vaccination</li>
            <li>Inpatient & Surgeries</li>
            <li>Pet Grooming</li>
            <li>Pet Shop</li>
            <li>Emergency & Critical Care</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2">Join Our Newsletter</h4>
          <p className="text-sm mb-2">Sign up to our newsletter for all the latest pet related news.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="border rounded-full px-4 py-2 text-sm flex-1" />
            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-5 py-2 text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container-wide flex flex-col md:flex-row items-center justify-between py-4 border-t border-gray-100 text-sm text-gray-500">
        <div className="mb-2 md:mb-0">© Copyright <span className="font-bold">PetZone</span>. All Rights Reserved<br/>Designed and Crafted by <span className="text-brand-blue font-semibold">techwithron</span></div>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF size={18}/></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram size={18}/></a>
        </div>
      </div>
    </footer>
  );
}


