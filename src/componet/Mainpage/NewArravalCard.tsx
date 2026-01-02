const products = [
  {
    id: 1,
    title: "T-SHIRT WITH TAPE DETAILS",
    image: "/img/t1.png",
    rating: "/img/star/f1.png",
    price: "$120",
  },
  {
    id: 2,
    title: "SKINNY FIT JEANS",
    image: "/img/t2.png",
    rating: "/img/star/f2.png",
    price: "$240",
    Discount: "-20%",
  },
  {
    id: 3,
    title: "CHECKERED SHIRT",
    image: "/img/t3.png",
    rating: "/img/star/f3.png",
    price: "$180",
  },
  {
    id: 4,
    title: "SLEEVE STRIPED T-SHIRT",
    image: "/img/t4.png",
    rating: "/img/star/f4.png",
    price: "$130",
    Discount: "-30%",
  },
]

function NewArrivalCard() {
  return (
    <div className="mt-30 mb-30">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-1/5 sm:w-[48%] md:w-[23%] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-lg" />
            <h1 className="mt-4 text-sm font-semibold text-gray-900">  {item.title} </h1>
            <img src={item.rating} alt="rating" className="mt-2 w-20" />
            <div className='flex justify-start items-center gap-3'>
              <h2 className="mt-2 text-lg font-bold text-gray-900"> {item.price} </h2>
              <h2 className="bg-red-100 text-red-500 w-15 rounded-2xl items-center justify-center flex"> {item.Discount} </h2>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrivalCard
