import { TfiEmail } from "react-icons/tfi";
import Footercard from "./Footercard";

function Footer() {
  return (
    <div className="relative bg-gray-200 pt-20">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 ">
        <div className="md:flex md:justify-between items-center bg-black p-5 md:p-10 rounded-4xl 
          w-full max-w-310 mx-auto text-white">

          <div className="inter text-[28px] md:text-[48px] flex flex-col pl-7">
            <div>STAY UPTO DATE ABOUT</div>
            <div>OUR LATEST OFFERS</div>
          </div>

          <div className="md:flex md:flex-col gap-2 pr-7">
            <div className="relative">
              <TfiEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="bg-white w-full md:w-87.5 h-12 mt-3 text-black rounded-3xl pl-10 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <button className="bg-white mt-3 text-black h-12 w-full font-bold rounded-3xl">
              Subscribe to Newsletter
            </button>
          </div>

        </div>
      </div>

      <Footercard />
    </div>
  );
}

export default Footer;
