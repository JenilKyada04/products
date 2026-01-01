import { MdOutlinePerson2 } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
            SHOP.CO
          </h1>

          <nav className="md:block">
            <ul className="flex items-center space-x-8">
              <li className="flex items-center gap-1">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Shop</a>
                <IoIosArrowDown size={16} className="text-gray-700" />
              </li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"> On Sale</a> </li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"> New Arrivals  </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"> Brands </a></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6">

            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-[420px] md:w-[360px] pl-12 pr-4 py-2 rounded-full bg-[#F2F0F1] focus:outline-none"
              />
            </div>

            <ShoppingCart />

            <button className="text-gray-600 hover:text-gray-900">
              <MdOutlinePerson2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
