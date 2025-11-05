import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Pet Store',
  description: 'Static showcase of pet products with quick WhatsApp enquiry.'
};

const products = [
  { name: 'Premium Dog Food', description: 'High-protein, vet-recommended formula.' },
  { name: 'Cat Litter', description: 'Low-dust, odor control.' },
  { name: 'Chew Toys', description: 'Durable and safe for dogs.' },
  { name: 'Grooming Kit', description: 'Brush, nail clipper, shampoo.' },
  { name: 'Flea & Tick Medicine', description: 'Effective protection.' },
  { name: 'Pet Carrier', description: 'Comfortable and secure.' }
];

export default function StorePage() {
  return (
    <main>
      <Header />
      <section className="container-wide py-14">
        <h1 className="text-3xl font-semibold">Pet Store</h1>
        <p className="mt-2 text-brand-subtle">Browse products and reach us via WhatsApp to enquire.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} name={p.name} description={p.description} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}


