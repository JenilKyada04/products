import { useState } from "react";
import Discount from "../Mainpage/Discount";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";

export default function Hero2() {
    const images = [
        "/img/tshirt/tshirt1.png",
        "/img/tshirt/tshirt2.png",
        "/img/tshirt/tshirt3.png",
    ];

    const colors = [
        { name: "Olive", value: "#6b6f4e" },
        { name: "Green", value: "#1f3d2b" },
        { name: "Navy", value: "#1f2937" },
    ];

    const sizes = ["Small", "Medium", "Large", "X-Large"];

    const [activeImage, setActiveImage] = useState(images[0]);
    const [activeSize, setActiveSize] = useState("Large");
    const [quantity, setQuantity] = useState(1);

    return (
        <>


            <Breadcrumb />

            <section className="max-w-full mx-auto  md:py-10">
                <div className="max-w-310 mx-auto px-6">

                    <div className="bg-white rounded-xl  md:flex md:flex-row lg:flex-row gap-10">

                        <div className="md:flex  max-w-130 lg:w-1/2 gap-4">

                            <div className="flex md:flex-col gap-5 mt-5 md:m-0">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className={`border rounded-lg  ${activeImage === img
                                            ? "border-black"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt="Thumbnail"
                                            className="w-31 h-31 rounded-lg object-cover"
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 rounded-xlflex items-center justify-center">
                                <img
                                    src={activeImage}
                                    alt="Product"
                                    className="h-105 w-105 object-contain"
                                />
                            </div>
                        </div>



                        <div className="max-w-130  gap-5">

                            <h1 className="text-2xl lg:text-3xl font-extrabold inter mt-10 md:mt-0">
                                ONE LIFE GRAPHIC T-SHIRT
                            </h1>

                            <div className="flex items-center gap-2">
                                <div className="text-yellow-400 text-lg">★★★★★</div>
                                <span className="text-sm text-gray-500">4.5/5</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl inter2">$260</span>
                                <span className="text-gray-400 line-through">$300</span>
                                <span className="text-red-500 font-semibold"><Discount /></span>
                            </div>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                This graphic t-shirt is perfect for any occasion. Crafted from a
                                soft and breathable fabric, it offers superior comfort and style.
                            </p>

                            <hr className="mt-3 mb-3" />

                            <div>
                                <p className="font-light mb-2 text-gray-500">Select Colors</p>
                                <div className="flex gap-3">
                                    {colors.map((color, index) => (
                                        <button
                                            key={index}
                                            style={{ backgroundColor: color.value }}
                                            className="w-7 h-7 rounded-full border border-gray-300"
                                        />
                                    ))}
                                </div>
                            </div>

                            <hr className="mt-3 mb-3" />

                            <div>
                                <p className="font-light text-gray-500 mb-2">Choose Size</p>
                                <div className="flex gap-2 flex-wrap">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`px-4 py-2 rounded-full text-sm border transition ${activeSize === size
                                                ? "bg-black text-white"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className="mt-5 mb-5" />

                            <div className="flex items-center gap-3 sm:gap-5 mt-6 w-full">

                                <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-3 w-28 sm:w-37.5 shrink-0">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="text-2xl font-light hover:text-gray-500 transition"
                                    >
                                        −
                                    </button>
                                    <span className="font-medium text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="text-2xl font-light hover:text-gray-500 transition"
                                    >
                                        +
                                    </button>
                                </div>

                                <Link to="/cart" className="flex-1">
                                    <button className="w-full bg-black text-white py-3 sm:py-4 rounded-full font-medium  transition-all active:scale-95">
                                        Add to Cart
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
