type Props = {
  title: string;
  description: string;
  icon?: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-md bg-brand-orange/60" aria-hidden />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-brand-subtle">{description}</p>
      <div className="mt-4">
        <a href="https://wa.me/917592900941" target="_blank" rel="noopener" className="btn btn-outline">WhatsApp Enquiry</a>
      </div>
    </div>
  );
}


