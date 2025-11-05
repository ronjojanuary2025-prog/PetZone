import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About the Clinic',
  description: 'Compassionate treatment, modern facilities and experienced veterinary care in Koothattukulam.'
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="w-full flex justify-center items-center py-16 bg-white">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 max-w-3xl w-full">
          <h2 className="text-4xl font-semibold text-center mb-6">About Us</h2>
          <p className="text-lg text-center mb-6">Welcome to PetZone – Multi-Speciality Pet Clinic, Pet Shop & Grooming Centre, where compassionate care meets modern veterinary excellence.<br/><br/>
          Located in the heart of Koothattukulam, we are dedicated to providing comprehensive health, wellness, and grooming solutions for your beloved pets.</p>
          <p className="mb-6">At PetZone, we believe every animal deserves gentle and personalized care. Our clinic is equipped with advanced facilities to ensure accurate diagnosis, effective treatment, and a comfortable experience for both pets and their owners. From routine check-ups to specialized treatments, our goal is to support your pet’s wellbeing with the utmost professionalism and empathy.</p>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Dr. Shilvy Varghese (BVSc & AH)</h3>
            <p>A passionate veterinarian with over five years of experience in small animal practice, Dr. Shilvy Varghese leads PetZone with dedication and love for animals. For her, veterinary medicine is not just a profession — it’s a calling. Her hands-on approach and deep compassion have made PetZone a trusted name among pet parents in and around Koothattukulam.</p>
          </div>
          <p className="mb-6">Beyond medical care, PetZone also features a fully equipped pet grooming centre and a pet shop offering a wide range of quality pet products, accessories, and nutritional supplies — making it a complete destination for pet health and happiness.</p>
          <div className="flex items-center gap-3 justify-center mt-8">
            <span className="text-xl">📍</span>
            <span className="font-semibold">Pet Zone Multi-Speciality Pet Clinic, Pet Shop & Grooming Centre</span>
          </div>
          <div className="text-center text-blue-700 mt-2">Near Marigiri School, Opposite Sai Service, MC Road, Koothattukulam</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


