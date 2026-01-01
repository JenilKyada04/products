import { LuShoppingCart } from 'react-icons/lu';

function ShoppingCart() {
  return (
    <div>
      <button className="text-gray-600 h-10 hover:text-gray-900 transition duration-150 cursor-pointer ">
        <LuShoppingCart />
      </button>
    </div>
  )
}

export default ShoppingCart
