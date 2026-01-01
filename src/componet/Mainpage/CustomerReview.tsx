
// const review = [
//     {
//         id: 1,
//         title: "Sarah M.",
//         image: "/img/star/f1.png",
//         desc: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
//     },
//     {
//         id: 2,
//         title: "Alex K.",
//         image: "/img/star/f2.png",
//         desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
//     },
//     {
//         id: 3,
//         title: "James L.",
//         image: "/img/star/f3.png",
//         desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
//     },
    
// ]

// function CustomerReview() {
//     return (
//         <div className="mx-auto max-w-360 ">
//             <div className="font-integral font-bold text-[48px] tracking-normal flex items-center justify-start text-center mt-30">

//                 <h1>OUR HAPPY CUSTOMERS</h1>
//             </div>

//             <div className="mt-10 flex flex-wrap gap-10 items-center justify-center mb-40 ">
//                 {review.map((item) => (
//                     <div key={item.id} className="w-96 bg-white rounded-3xl p-5  gap-2 px-10 flex flex-col items-center justify-center border-gray-200 border-2">
//                         <div className="flex flex-col items-center gap-4">
//                             <img src={item.image} alt={item.title} className="w-20 h-full" />
//                             <h1 className=" font-bold text-2xl ">{item.title}</h1>
//                         </div>
//                         <p className="max-w-md mx-auto text-center mt-4">"{item.desc}"</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default CustomerReview
