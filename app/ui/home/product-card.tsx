export default function ProductDetailCard() {
  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-800 rounded-xl overflow-hidden max-w-6xl mx-auto shadow-md p-6 md:p-12">
      {/* Изображение слева */}
      <div className="md:w-1/2 w-full bg-gray-100 flex items-center justify-center p-8">
        <img
          src="chair.jpg"
          alt="Gathaithi AA"
          className="object-contain max-h-[500px] w-full"
        />
      </div>

      {/* Контент справа */}
      <div className="md:w-1/2 w-full px-8 py-10 flex flex-col gap-6">
        {/* Название + описание */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Gathaithi AA
          </h1>
          <p className="text-sm text-gray-600">
            Enticing notes of ripe stonefruits is apparent on the nose, with a
            vibrant mix of red fruits and citrus flavours with a juicy finish
            coming through.
          </p>
          <hr className="my-4" />
        </div>

        {/* Характеристики */}
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-gray-500">Origin:</span> Nyeri
            County, Kenya
          </div>
          <div>
            <span className="font-medium text-gray-500">Varietal:</span> Ruiru,
            SL, Batian
          </div>
          <div>
            <span className="font-medium text-gray-500">Process:</span> Washed
          </div>
        </div>

        {/* Tasting notes */}
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Tasting notes
          </p>
          <div className="flex gap-3 text-sm">
            <span className="text-red-700">● Hawthorn</span>
            <span className="text-orange-400">● Apricot</span>
            <span className="text-pink-700">● Pomelo</span>
          </div>
        </div>

        {/* Выбор параметров */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Roast</p>
            <button className="border rounded-full px-4 py-1">Filter</button>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Weight</p>
            <button className="border rounded-full px-4 py-1">200g</button>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Grind Size</p>
            <select className="border rounded px-2 py-1 w-full text-sm">
              <option>Whole Bean</option>
              <option>Ground</option>
            </select>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Quantity</p>
            <div className="flex items-center gap-2">
              <button className="border px-2 rounded">-</button>
              <span>1</span>
              <button className="border px-2 rounded">+</button>
            </div>
          </div>
        </div>

        {/* Кнопка */}
        <button className="mt-6 bg-slate-900 text-white py-3 rounded-full hover:bg-slate-800 transition">
          ADD TO CART – S$26.00
        </button>
      </div>
    </div>
  );
}
