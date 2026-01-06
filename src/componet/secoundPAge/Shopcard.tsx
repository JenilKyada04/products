
const products = [
    {
        id: 1,
        title: "Polo with Contrast Trims",
        image: "/img/tshirt/t1.png",
        rating: "/img/star/f5.png",
        price: "$212",
        Discount: "-20%",
        cut: "$242"
    },
    {
        id: 2,
        title: "Gradient Graphic T-shirt",
        image: "/img/tshirt/t2.png",
        rating: "/img/star/f6.png",
        price: "$145",
    },
    {
        id: 3,
        title: "Polo with Tipping Details",
        image: "/img/tshirt/t3.png",
        rating: "/img/star/f7.png",
        price: "$80",
    },
    {
        id: 4,
        title: "Black Striped T-shirt",
        image: "/img/tshirt/t4.png",
        rating: "/img/star/f8.png",
        price: "$210",
        cut: "$150",
        Discount: "-20%"
    },
]

function Shopcard() {
    return (
        <>
             <div className="mt-10 mb-15">
          <div className="flex flex-wrap gap-5 items-center justify-center mb-40">
            {products.map((item) => (
              <div key={item.id} className="w-72  ">
                 <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-full h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                  />
                </div>

                <h1 className="mt-4 inter2 text-xl text-gray-900 font-bold">{item.title}</h1>
                <img src={item.rating} alt="rating" className="mt-2 w-25" />

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
        </>
    )
}

export default Shopcard
