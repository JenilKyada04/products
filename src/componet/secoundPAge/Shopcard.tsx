
const products = [
    {
        id: 1,
        title: "Polo with Contrast Trims",
        image: "/img/tshirt/t1.png",
        rating: "/img/star/f5.png",
        price: "$212",
        Discount: "-20%",
        cut : "$242"
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
        cut : "$150",
        Discount : "-20%" 
    },
]

function Shopcard() {
    return (
        <>
    <div className=" max-w-312.5 mx-auto ">
        <h1 className="font-integral mt-5 inter text-[48px] tracking-normal flex items-center justify-center text-center "
        >YOU MIGHT ALSO LIKE</h1>
        <div className="mt-10 mb-50">
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="w-1/5 sm:w-[48%] md:w-[23%] rounded-xl transition ">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover rounded-lg" />
                        <h1 className="mt-4  inter2 text-gray-900">  {item.title} </h1>
                        <img src={item.rating} alt="rating" className="mt-2 w-20" />

                        <div className='flex justify-start items-center gap-3'>
                            <h2 className="mt-2 text-lg inter2 text-gray-900"> {item.price}
                                 <span className="text-gray-400 line-through inter2 pl-2">{item.cut}</span>
                                 </h2>
                            <h2 className="bg-red-100 text-red-500 w-15 rounded-2xl items-center justify-center flex"> {item.Discount} </h2>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
        </>
    )
}

export default Shopcard
