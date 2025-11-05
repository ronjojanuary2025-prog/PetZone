import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Services & Activities',
  description: 'Veterinary care, grooming, diagnostics, vaccinations, surgery, pet shop and boarding.'
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="w-full flex justify-center items-center py-16 bg-white">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 max-w-6xl w-full">
          <h2 className="text-4xl font-semibold text-center mb-2">Our Services</h2>
          <p className="text-lg text-center text-gray-600 mb-10">PetZone is a full-service veterinary clinic, pet shop & grooming centre, offering a wide range of services for pets.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-pink-500"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v7a6 6 0 0 0 12 0V3"/><circle cx="6" cy="3" r="2"/><circle cx="18" cy="3" r="2"/><path d="M12 17v4m0 0a2 2 0 0 0 2-2m-2 2a2 2 0 0 1-2-2"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Preventative Care</h3>
              <p className="text-sm text-gray-600 mb-2">We recommend annual lab testing, just like our doctor does for us as humans.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10z"/><path d="M15 9c0 1.5-1.5 3-3 3s-3-1.5-3-3"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Dentistry</h3>
              <p className="text-sm text-gray-600 mb-2">Dental health is so important for pets; it is just as important as it is for humans!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"/><path d="M9 22V12h6v10"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Boarding</h3>
              <p className="text-sm text-gray-600 mb-2">We offer both overnight boarding and day boarding. We also provide the highest quality care and attention!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Grooming</h3>
              <p className="text-sm text-gray-600 mb-2">Grooming will keep your pet clean and allow them to look and feel their best!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10M7 17h10"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Digital Imaging</h3>
              <p className="text-sm text-gray-600 mb-2">Radiographs, or x-rays, can be very important in diagnosing an illness when your pet is feeling unwell.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-pink-500"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 8v4"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Internal Medicine</h3>
              <p className="text-sm text-gray-600 mb-2">We offer a range of in-house diagnostic services such as Urinalysis, Complete Blood Count, parasite detection, and more.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-7 7-7"/><path d="M5 21l7-7-7-7"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Surgery</h3>
              <p className="text-sm text-gray-600 mb-2">We offer routine surgeries and have access to a board-certified surgeon for specialized procedures.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700"><svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4.04 13 5.09C13.5 4.04 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">End-of-Life Care</h3>
              <p className="text-sm text-gray-600 mb-2">When the time comes for your beloved pets to be laid to rest, we will do everything we can to ensure your pet has a comfortable goodbye.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


