import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";

interface CartItem {
    id: number;
    name: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
    image: string;
}

const initialCart: CartItem[] = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        size: "Large",
        color: "White",
        price: 145,
        quantity: 1,
        image: "/img/tshirt/t5.png",
    },
    {
        id: 2,
        name: "Checkered Shirt",
        size: "Medium",
        color: "Red",
        price: 180,
        quantity: 1,
        image: "/img/tshirt/t6.png",
    },
    {
        id: 3,
        name: "Skinny Fit Jeans",
        size: "Large",
        color: "Blue",
        price: 240,
        quantity: 1,
        image: "/img/tshirt/t7.png",
    },
];;

export default function Cart() {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const DELIVERY_FEE = 15;
    const DISCOUNT_PERCENT = 20;

    const updateQuantity = (id: number, delta: number) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const discount = Math.round((subtotal * DISCOUNT_PERCENT) / 100);
    const total = subtotal - discount + DELIVERY_FEE;

    return (
        <div className="max-w-310 mx-auto px-4 py-10 mb-35">
            <h1 className="text-3xl font-black mb-8">YOUR CART</h1>

            <div className="md:flex gap-4 md:gap-4 justify-center ">

                <div className="flex-1 space-y-6 border border-gray-200 rounded-4xl p-6">
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-start gap-4 pb-6 last:pb-0 last:border-b-0 border-b border-gray-100"
                            >
                                <div className="flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-25 rounded-xl object-cover"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                                        <p className="font-bold text-lg">${item.price * item.quantity}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end justify-between gap-4">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-600"
                                        aria-label={`Remove ${item.name}`}
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                    <div className="flex items-center mt-7 justify-between bg-gray-100 rounded-4xl px-3 py-1 w-[30">

                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 text-lg cursor-pointer font-semibold text-gray-600 hover:text-black"
                                            disabled={item.quantity <= 1}
                                        >
                                            <RiSubtractFill/>
                                        </button>
                                        <span className="px-2 font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 text-lg cursor-pointer font-semibold text-gray-600 hover:text-black"
                                        >
                                            <FiPlus />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="border border-gray-200 rounded-4xl p-4 pt-5 pb-5 h-fit sticky top-24 md:w-105 shadow-sm">
                    <h2 className="text-xl inter2 mb-6">Order Summary</h2>

                    <div className="space-y-3 text-base">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold">${subtotal}</span>
                        </div>

                        <div className="flex justify-between text-red-500">
                            <span className="text-gray-600">Discount (-{DISCOUNT_PERCENT}%)</span>
                            <span className="font-bold">- ${discount}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-bold">${DELIVERY_FEE}</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold  mt-4">
                            <span className="inter1 text-xl">Total</span>
                            <span className="text-2xl">${total}</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6 ">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 gap-3">
                            <img
                                src="/img/check.png"
                                alt="promo"
                                className="w-4 h-4 opacity-60"
                            />

                            <input
                                type="text"
                                placeholder="Add promo code"
                                className="flex-1 bg-transparent text-sm outline-none w-40 md:w-60"
                            />
                        </div>

                        <button className="bg-black cursor-pointer text-white px-6 rounded-full text-sm font-semibold  transition duration-150">
                            Apply
                        </button>
                    </div>

                    <button className="w-full bg-black cursor-pointer text-white rounded-full py-3 mt-6 inter1   transition duration-150">
                        <div className="flex justify-center	 items-center">
                            <div>
                                Go to Checkout
                            </div>
                            <div className="pl-3">
                                <FaArrowRight />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
