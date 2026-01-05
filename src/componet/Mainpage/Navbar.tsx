import { useState } from "react";
import { MdOutlinePerson2, MdMenu, MdClose } from "react-icons/md"; // Added Menu icons
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <button 
            className="lg:hidden text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>

          <Link to={"/"} className="shrink">
            <h1 className="text-xl md:text-2xl inter font-bold text-gray-900 cursor-pointer">
              SHOP.CO
            </h1>
          </Link>

          <nav className="lg">
            <ul className="flex items-center space-x-8">
              <li className="flex items-center gap-1">
                <Link to="/shop" className="text-gray-600 hover:text-gray-900 transition">Shop</Link>
                <IoIosArrowDown size={16} className="text-gray-700" />
              </li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">On Sale</a></li>
              <li><Link to="/newarrivals" className="text-gray-600 hover:text-gray-900">New Arrivals</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Brands</a></li>
            </ul>
          </nav>

          <div className="lg md:flex relative flex-1 max-w-md mx-8">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-12 pr-4 py-2 rounded-full bg-[#F2F0F1] focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <FiSearch className="md:hidden text-2xl text-gray-600" />
            
            <Link to={"/cart"}>
              <ShoppingCart />
            </Link>

            <button className="text-gray-600 hover:text-gray-900">
              <MdOutlinePerson2 size={24} />
            </button>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:hidden pb-6 transition-all duration-300`}>
          <ul className="flex flex-col space-y-4">
            <li><Link to="/shop" className="block text-gray-600" onClick={() => setIsOpen(false)}>Shop</Link></li>
            <li><a href="#" className="block text-gray-600">On Sale</a></li>
            <li><Link to="/newarrivals" className="block text-gray-600" onClick={() => setIsOpen(false)}>New Arrivals</Link></li>
            <li><a href="#" className="block text-gray-600">Brands</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;