
function ProfilePage() {
    return (
        <>
            <section className="light-gray">
                <div className="flex items-center justify-center max-w-360 mx-auto">

                    <div className=" text-black lg:order-1">
                        <h1 className="text-4xl inter  lg:text-6xl font-extrabold leading-tight">
                            FIND CLOTHES<br />
                            THAT MATCHES<br />
                            YOUR STYLE
                        </h1>

                        <p className="text-gray-600 font-light pt-5 pb-8 max-w-xl text-lg">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <button className="bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                            Shop Now
                        </button>

                        <div className="flex flex-wrap gap-8 pt-12">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold">200+</h2>
                                <p className="text-gray-500 text-sm">International Brands</p>
                            </div>
                            <div className="border-x border-gray-300 px-8">
                                <h2 className="text-2xl lg:text-3xl font-bold">2,000+</h2>
                                <p className="text-gray-500 text-sm">High-Quality Products</p>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold">30,000+</h2>
                                <p className="text-gray-500 text-sm">Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-end order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src="/img/ff1.jpg"
                                alt="Fashion Model"
                                className="w-full max-w-125 lg:max-w-150 h-auto object-cover"
                            />

                        </div>
                    </div>

                </div>
            </section>

            <div className="bg-black py-8">
                <div className="max-w-360 mx-auto px-6 flex justify-center lg:justify-between items-center  gap-30 opacity-80">
                    <img src="/img/versace.png" alt="Versace" />
                    <img src="/img/zara.png" alt="Zara" />
                    <img src="/img/gucci.png" alt="Gucci" />
                    <img src="/img/calvinkelin.png" alt="Calvin Klein" />
                    <img src="/img/prada.png" alt="Prada" />
                </div>
            </div>  

        </>
    );
}

export default ProfilePage;