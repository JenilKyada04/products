import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    title: "T-Shirt with Tape Details",
    image: "/img/t1.png",
    rating: "/img/star/f1.png",
    price: "$120",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "/img/t2.png",
    rating: "/img/star/f2.png",
    price: "$240",
    Discount: "-20%",
    cut : "$260"
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "/img/t3.png",
    rating: "/img/star/f3.png",
    price: "$180",
  },
  {
    id: 4,
    title: "Sleeve Striped T-Shirt",
    image: "/img/t4.png",
    rating: "/img/star/f4.png",
    price: "$130",
    Discount: "-30%",
     cut : "$160"
  },
]

function NewArrivalCard() {
  return (
    <>
      <Link to={"/shop"}>
        <div className="mt-15 mb-15">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {products.map((item) => (
              <div key={item.id} className="w-72  ">
                <div className="light-gray rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                </div>

                <h1 className="mt-4 inter text-xl text-gray-900 font-bold">{item.title}</h1>
                <img src={item.rating} alt="rating" className="mt-2 w-24" />

                <div className="flex justify-start items-center gap-3">
                  <h2 className="mt-2 text-2xl inter2 text-gray-900 font-bold">
                    {item.price} 
                    <span className="text-gray-400 line-through inter2 pl-2">{item.cut}</span>
                  </h2>
                  {item.Discount && (
                    <h2 className="mt-2 bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                      {item.Discount}
                    </h2>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  )
}

export default NewArrivalCard
