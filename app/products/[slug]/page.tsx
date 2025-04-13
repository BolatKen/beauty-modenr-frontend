import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    slug: "gatahithi-aa",
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    image: "/images/image1.jpg",
    price: "S$26.00",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish.",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    region: "Nyeri, Kenya",
    process: "Washed",
    roast: "Light-Medium",
    weight: "250g",
    grindOptions: ["Whole Bean", "Espresso", "Filter"],
    rating: 4.8,
    reviewsCount: 76,
  },
  {
    slug: "dark-matter",
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    image: "/images/image3.jpg",
    price: "S$26.00",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish.",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    region: "Nyeri, Kenya",
    process: "Washed",
    roast: "Light-Medium",
    weight: "250g",
    grindOptions: ["Whole Bean", "Espresso", "Filter"],
    rating: 4.8,
    reviewsCount: 76,
  },
  // Добавь больше товаров
];

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Изображение */}
        <div className="relative w-full pt-[133%] bg-slate-100 rounded">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Контент */}
        <div>
          <h1 className="text-3xl font-display mb-1">{product.name}</h1>
          <p className="text-sm text-slate-500 mb-4">{product.subtitle}</p>

          <div className="flex items-center gap-2 text-sm text-yellow-600 mb-4">
            <span>⭐️ {product.rating}</span>
            <span className="text-slate-400">
              ({product.reviewsCount} reviews)
            </span>
          </div>

          <p className="text-lg font-bold text-slate-900 mb-2">
            {product.price}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-sm space-y-2 mb-6">
            <p>
              <strong>Region:</strong> {product.region}
            </p>
            <p>
              <strong>Process:</strong> {product.process}
            </p>
            <p>
              <strong>Roast:</strong> {product.roast}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold block mb-2">Grind</label>
            <select className="w-full border border-slate-300 px-4 py-2 text-sm">
              {product.grindOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity" className="text-sm font-semibold">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue={1}
              className="w-20 border border-slate-300 text-sm px-3 py-1"
            />
          </div>

          <button className="bg-slate-900 text-white w-full py-3 hover:bg-slate-800 transition">
            Add to Cart
          </button>

          {/* Taste Notes */}
          <div className="mt-8">
            <p className="text-sm font-semibold mb-2">Taste Notes</p>
            <ul className="flex flex-wrap gap-2 text-xs text-slate-700">
              {product.notes.map((note) => (
                <li
                  key={note}
                  className="border border-slate-300 px-2 py-1 rounded-full"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Доставка */}
          <div className="mt-10 border-t pt-6 text-sm text-slate-600">
            <p>
              <strong>Shipping:</strong> Worldwide delivery in 3–7 days. Free
              for orders over S$50.
            </p>
            <p>
              <strong>Returns:</strong> Easy returns within 14 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
