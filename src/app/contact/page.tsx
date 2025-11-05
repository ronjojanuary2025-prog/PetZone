import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with PetZone Koothattukulam. Phone, email, WhatsApp and location.'
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="w-full flex justify-center items-center py-10 bg-white">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-4 flex items-center justify-center"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
              <div>
                <div className="font-bold text-xl mb-1">Location:</div>
                <div className="text-base text-blue-700 max-w-xs">Near Marigiri School, Opposite Sai Service, MC Road, Koothattukulam</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-4 flex items-center justify-center"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg></span>
              <div>
                <div className="font-bold text-xl mb-1">Email:</div>
                <div className="text-base text-blue-700">petZonekoothattukulam@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-4 flex items-center justify-center"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M6 14h.01M12 10h.01M12 14h.01M18 10h.01M18 14h.01"/></svg></span>
              <div>
                <div className="font-bold text-xl mb-1">Call:</div>
                <div className="text-base text-blue-700">075929 00941</div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 grid grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="border rounded px-3 py-2 text-base col-span-1" />
            <input type="email" placeholder="Your Email" className="border rounded px-3 py-2 text-base col-span-1" />
            <input type="text" placeholder="Subject" className="border rounded px-3 py-2 text-base col-span-2" />
            <textarea placeholder="Message" className="border rounded px-3 py-2 text-base col-span-2 min-h-[100px]" />
            <div className="col-span-2 flex justify-center mt-2">
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-2 transition-colors text-base">Send Message</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}


