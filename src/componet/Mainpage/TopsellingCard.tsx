
const products = [
    {
        id: 1,
        title: "Vertical Striped Shirt  ",
        image: "/img/t5.png",
        rating: "/img/star/f5.png",
        price: "$212",
        Discount: "-20%",
    },
    {
        id: 2,
        title: "Courage Graphic T-Shirt",
        image: "/img/t6.png",
        rating: "/img/star/f6.png",
        price: "$145",
    },
    {
        id: 3,
        title: "Loose Fit Bermuda Shorts",
        image: "/img/t7.png",
        rating: "/img/star/f7.png",
        price: "$80",
    },
    {
        id: 4,
        title: "Faded Skinny Jeans",
        image: "/img/t8.png",
        rating: "/img/star/f8.png",
        price: "$210",
    },
]

function Topsellingcard() {
    return(
        <div className="mt-30 mb-30 ">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="w-1/5 sm:w-[48%] md:w-[23%] rounded-xl transition ">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover rounded-lg" />
                        <h1 className="mt-4  inter text-gray-900">  {item.title} </h1>
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

export default Topsellingcard
