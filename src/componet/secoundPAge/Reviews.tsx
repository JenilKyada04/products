import { IoIosArrowDown } from "react-icons/io";


const reviews = [
    {
        name: "Samantha D.",
        rating: 5,
        text: "\"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fashion designer, I appreciate the attention to detail. It's become my favorite go-to shirt!\"",
        date: "Posted on August 14, 2023",
    },
    {
        name: "Alex M.",
        rating: 4,
        text: "\"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me.\"",
        date: "Posted on August 15, 2023",
    },
    {
        name: "Ethan R.",
        rating: 4,
        text: "\"This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.\"",
        date: "Posted on August 16, 2023",
    },
    {
        name: "Olivia B.",
        rating: 4,
        text: "\"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.\"",
        date: "Posted on August 17, 2023",
    },
    {
        name: "Liam K.",
        rating: 4,
        text: "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's less wearing a piece of art that reflects my passion for both design and fashion.\"",
        date: "Posted on August 18, 2023",
    },
    {
        name: "Ava H.",
        rating: 5,
        text: "\"I'm not just wearing a t-shirt; I  m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
        date: "Posted on August 19, 2023",
    },
];



const Reviews = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10">
            <div className="md:flex md:justify-evenly md:items-center gap-8 border-b inter1 text-gray-500">
                <button className="pb-3">Product Details</button>
                <button className="pb-2 md:px-25 px-7 border-b-2 border-black text-black">
                    Rating & Reviews
                </button>
                <button className="pb-3">FAQs</button>
            </div>

            <div className="flex items-center justify-between inter1 mt-6">
                <h2 className="">
                    All Reviews <span className="text-gray-400">(451)</span>
                </h2>

                <div className="flex items-center gap-2 font-[16px] ">
                    <button className="px-2 py-1.5 light-gray border rounded-full ">
                        <img src="/img/logo/logo1.png" className="w-4" alt="" />
                    </button>
                    <button className="lg md:flex items-center px-6 py-1.5 light-gray border rounded-full text-sm">
                        <div>
                            Latest
                        </div>
                        <div className="pl-3">
                            <IoIosArrowDown />
                        </div>
                    </button>
                    <button className="px-4 py-2 bg-black text-white rounded-full text-sm">
                        Write a Review
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-5 bg-white shadow-sm"
                    >
                        <div className="flex items-start justify-between">
                            <img src="img/star/f10.png" className="w-25" alt="" />
                            <button className="text-gray-400">•••</button>
                        </div>

                        <div className=" mt-3 flex items-center justify-start gap-1">
                            <h3 className="inter2">{review.name}</h3>
                            <img src="/img/greentick.png" alt="" />
                        </div>


                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                            {review.text}
                        </p>

                        <p className="mt-4 text-sm inter2  text-gray-400">{review.date}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="px-14 py-2 border rounded-full inter1 hover:bg-gray-100 transition cursor-pointer">
                    Load More Reviews
                </button>
            </div>
        </div>
    );
};

export default Reviews;
