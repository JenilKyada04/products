import { TfiEmail } from "react-icons/tfi";
import Footercard from "./Footercard";
function Footer() {
    return (
        <>
            <div className="flex justify-between items-center bg-black p-6 rounded-4xl max-w-360 mx-auto text-white pl-15">

                <div className="inter text-[48px] tracking-normal flex flex-col justify-start">
                    <div >STAY UPTO DATE ABOUT</div>
                    <div>OUR LATEST OFFERS</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2 p-3 m-3" >
                    <div className="relative">
                        <TfiEmail className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-500    font-[30px ]" />
                        <input type="text" className="bg-white w-87.5 h-12 text-black p-3 m-3 rounded-3xl pl-12 focus:outline-none" placeholder="Enter your email address" />
                    </div>
                    <button className="bg-white text-black w-87.5 h-12 font-bold py-2 px-4 rounded-3xl">Subscribe to Newsletter</button>
                </div>

            </div>

            <Footercard/>

        </>
    )
}

export default Footer



// <div div className = "relative" >
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="w-105 md:w-90 pl-12 pr-4 py-2 rounded-full bg-[#F2F0F1] focus:outline-none"
//           />
//         </div >