import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";


const review = [
    {
        id: 1,
        title: "Sarah M.",
        image: "/img/star/f10.png",
        desc: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
        id: 2,
        title: "Alex K.",
        image: "/img/star/f10.png",
        desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    },
    {
        id: 3,
        title: "James L.",
        image: "/img/star/f10.png",
        desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends. ”",
    },

]

function CustomerReview() {
    return (
        <div className="mx-auto max-w-310 ">
            <div className="inter text-[48px] tracking-normal flex items-center justify-between text-center mt-30">

                <h1>OUR HAPPY CUSTOMERS</h1>

                <div className="  flex items-center gap-5 text-xl text-gray-800 cursor-pointer">
                    <span><IoMdArrowRoundBack/></span>
                    <span><IoMdArrowRoundForward/></span>
                </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-5 items-center justify-center mb-40 p-2">
                {review.map((item) => (
                    <div key={item.id} className="md:w-98 bg-white rounded-3xl md:p-5 p-2  gap-2 md:px-10 flex flex-col border-gray-200 border-2">
                        <div className="flex flex-col  gap-4">
                            <img src={item.image} alt={item.title} className="w-30 h-full" />
                            <div className="flex items-center justify-start gap-1">
                                <h1 className=" font-bold text-2xl ">{item.title} </h1>
                                <img src="/img/greentick.png" alt="" />
                            </div>
                        </div>
                        <p className="max-w-md mx-auto text-gray-500 inter1  mt-4">"{item.desc}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReview
