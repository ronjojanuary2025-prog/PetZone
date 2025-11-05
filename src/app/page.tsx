import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const dynamic = 'error';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Our Services section */}
      <section className="w-full flex justify-center items-center py-16 bg-white">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 max-w-6xl w-full">
          <h2 className="text-4xl font-semibold text-center mb-2">Our Services</h2>
          <p className="text-lg text-center text-gray-600 mb-10">PetZone is a full-service veterinary clinic, pet shop & grooming centre, offering a wide range of services for pets.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-pink-500">{/* Stethoscope Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v7a6 6 0 0 0 12 0V3"/><circle cx="6" cy="3" r="2"/><circle cx="18" cy="3" r="2"/><path d="M12 17v4m0 0a2 2 0 0 0 2-2m-2 2a2 2 0 0 1-2-2"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Preventative Care</h3>
              <p className="text-sm text-gray-600 mb-2">We recommend annual lab testing, just like our doctor does for us as humans.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* Tooth Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10z"/><path d="M15 9c0 1.5-1.5 3-3 3s-3-1.5-3-3"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Dentistry</h3>
              <p className="text-sm text-gray-600 mb-2">Dental health is so important for pets; it is just as important as it is for humans!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* Boarding Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"/><path d="M9 22V12h6v10"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Boarding</h3>
              <p className="text-sm text-gray-600 mb-2">We offer both overnight boarding and day boarding. We also provide the highest quality care and attention!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* Grooming Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Grooming</h3>
              <p className="text-sm text-gray-600 mb-2">Grooming will keep your pet clean and allow them to look and feel their best!</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* X-ray Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10M7 17h10"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Digital Imaging</h3>
              <p className="text-sm text-gray-600 mb-2">Radiographs, or x-rays, can be very important in diagnosing an illness when your pet is feeling unwell.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-pink-500">{/* Medicine Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 8v4"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Internal Medicine</h3>
              <p className="text-sm text-gray-600 mb-2">We offer a range of in-house diagnostic services such as Urinalysis, Complete Blood Count, parasite detection, and more.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* Surgery Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-7 7-7"/><path d="M5 21l7-7-7-7"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">Surgery</h3>
              <p className="text-sm text-gray-600 mb-2">We offer routine surgeries and have access to a board-certified surgeon for specialized procedures.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-2 text-purple-700">{/* Heart Icon */} <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4.04 13 5.09C13.5 4.04 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"/></svg></span>
              <h3 className="font-semibold text-lg mb-1">End-of-Life Care</h3>
              <p className="text-sm text-gray-600 mb-2">When the time comes for your beloved pets to be laid to rest, we will do everything we can to ensure your pet has a comfortable goodbye.</p>
              <a href="/services" className="text-purple-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="w-full flex flex-col items-center py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Reviews</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-5xl mb-8">
          <div className="bg-white shadow rounded-xl p-6 max-w-md w-full flex flex-col items-start">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-2xl text-gray-400">👤</span>
              </div>
              <div>
                <div className="font-bold">Ryan</div>
                <div className="text-sm text-gray-500">Athirappilly</div>
              </div>
            </div>
            <p className="italic text-blue-700 mb-2">“I had an emergency with my dog and this pet hospital was the closest one. I was so impressed with the level of care my dog received, even though we were new patients. The staff acted quickly to diagnose and treat my dog’s condition, and they kept me informed every step of the way. I am so grateful to this hospital for saving my dog’s life.”</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 max-w-md w-full flex flex-col items-start">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-2xl text-gray-400">👤</span>
              </div>
              <div>
                <div className="font-bold">Adam</div>
                <div className="text-sm text-gray-500">Alcar</div>
              </div>
            </div>
            <p className="italic text-blue-700 mb-2">“I recently adopted a puppy and brought her to this pet hospital for her first checkup. The staff was incredibly patient and gentle with her, and they made sure she was comfortable throughout the entire visit. They also provided me with valuable information about puppy care and answered all of my questions thoroughly.”</p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="w-full flex flex-col items-center py-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="Dog and Cat" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80" alt="Dog Vaccination" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Kitten" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Cat Care" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" alt="Dogs Running" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Pet Grooming" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Cats" className="rounded-lg object-cover w-full h-48" />
          <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Cat Hug" className="rounded-lg object-cover w-full h-48" />
        </div>
      </section>
      {/* Full-width map section */}
      <section className="relative w-full h-[220px] md:h-[320px]" style={{zIndex:3, position:'relative', padding:0, margin:0}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.7567744131725!2d76.59595519999999!3d9.8707619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dbdd1849f7db%3A0x3a007018a8bfb48c!2sPet%20Zone%20Multi-speciality%20Pet%20Clinic%2C%20Pet%20shop%20and%20Grooming%20centre%2C%20Koothattukulam!5e0!3m2!1sen!2sin!4v1762341397543!5m2!1sen!2sin"
          style={{zIndex:3, position:'absolute', height:'100%', width:'100%', padding:0, borderWidth:0, margin:0, left:0, top:0, touchAction:'pan-x pan-y'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* Contact Info and Form section */}
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


