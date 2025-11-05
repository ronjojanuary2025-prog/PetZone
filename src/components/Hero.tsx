export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-gray to-white">
      <div className="container-wide grid items-center gap-8 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold md:text-5xl">
            Your Pet’s Health, Happiness & Care — All in One Place.
          </h1>
          <p className="mt-4 text-brand-subtle">
            Trusted veterinary care, grooming and a curated pet shop in Koothattukulam.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn btn-primary">Book Appointment</a>
            <a href="https://wa.me/917592900941" target="_blank" rel="noopener" className="btn btn-accent">WhatsApp Enquiry</a>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 text-sm">
            <p className="font-medium">Dr Shilvy Varghese</p>
            <p>BVSc and AH · Veterinary Medicine</p>
          </div>
        </div>
        <div className="aspect-video w-full rounded-xl bg-brand-blue md:aspect-square" aria-label="Clinic and pets collage" />
      </div>
    </section>
  );
}


