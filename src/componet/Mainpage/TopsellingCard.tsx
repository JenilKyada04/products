import Discount from './Discount'

const products = [
    {
        id: 1,
        title: "VERTICAL STRIPED SHIRT  ",
        image: "/img/t5.png",
        rating: "/img/star/f5.png",
        price: "$212",
    },
    {
        id: 2,
        title: "COURAGE GRAPHIC T-SHIRT",
        image: "/img/t6.png",
        rating: "/img/star/f6.png",
        price: "$145",
    },
    {
        id: 3,
        title: "LOOSE FIT BERMUDA SHORTS",
        image: "/img/t7.png",
        rating: "/img/star/f7.png",
        price: "$80",
    },
    {
        id: 4,
        title: "FADED SKINNY JEANS",
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
                        className="w-1/5 sm:w-[48%] md:w-[23%] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover rounded-lg" />
                        <h1 className="mt-4 text-sm font-semibold text-gray-900">  {item.title} </h1>
                        <img src={item.rating} alt="rating" className="mt-2 w-20" />

                        <div className='flex justify-start items-center gap-3'>
                            <h2 className="mt-2 text-lg font-bold text-gray-900"> {item.price} </h2>
                            <Discount />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topsellingcard
