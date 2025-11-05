type Props = {
  name: string;
  description: string;
  imageAlt?: string;
};

export default function ProductCard({ name, description, imageAlt }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="aspect-[4/3] w-full rounded-lg bg-brand-blue" aria-label={imageAlt || name} />
      <h3 className="mt-3 font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-brand-subtle">{description}</p>
      <div className="mt-3">
        <a href="https://wa.me/917592900941" target="_blank" rel="noopener" className="btn btn-outline">WhatsApp Enquiry</a>
      </div>
    </div>
  );
}


