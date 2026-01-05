
function ProfilePage() {
    return (
        <>
            <section className="light-gray">
                <div className="md:flex items-center justify-center w-full md:max-w-310 mx-auto md:p-0 p-4  ">



                    <div className="text-black lg:order-1 flex flex-col lg:items-start lg:text-left">
                        <h1 className="text-4xl inter lg:text-6xl font-extrabold leading-tight uppercase">
                            Find clothes<br />
                            that matches<br />
                            your style
                        </h1>

                        <p className="text-gray-600 font-light pt-5 pb-8 max-w-xl text-lg px-4 lg:px-0">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <button className="sm:w-auto bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                            Shop Now
                        </button>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-y-6 gap-x-8 pt-12 md:pt-16">
                            <div className="min-w-30">
                                <h2 className="text-2xl lg:text-4xl font-bold">200+</h2>
                                <p className="text-gray-500 text-sm">International Brands</p>
                            </div>

                            <div className="min-w-30 border-l border-gray-300 pl-8 lg:border-x lg:px-8">
                                <h2 className="text-2xl lg:text-4xl font-bold">2,000+</h2>
                                <p className="text-gray-500 text-sm">High-Quality Products</p>
                            </div>

                            <div className="min-w-30 lg:pl-0">
                                <h2 className="text-2xl lg:text-4xl font-bold">30,000+</h2>
                                <p className="text-gray-500 text-sm">Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex-1 md:flex md:justify-end order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src="/img/ff1.png"
                                alt="Fashion Model"
                                className="w-full max-w-125 lg:max-w-150 h-162.5 object-cover"
                            />
                        </div>
                            <img src="/img/star.png" className="absolute mr-130 mt-75" alt="" />
                            <img src="/img/star.png" className="absolute mt-20 w-25" alt="" />

                    </div>

                </div>
            </section>

            <div className="bg-black py-8">
                <div className="max-w-7xl mx-auto md:px-6 p-2  flex flex-wrap items-center justify-center lg:justify-evenly gap-25 opacity-80">

                    <img src="/img/versace.png" alt="Versace" className="h-6 md:h-8 object-contain" />
                    <img src="/img/zara.png" alt="Zara" className="h-6 md:h-8 object-contain" />
                    <img src="/img/gucci.png" alt="Gucci" className="h-6 md:h-8 object-contain" />
                    <img src="/img/calvinkelin.png" alt="Calvin Klein" className="h-6 md:h-8 object-contain" />
                    <img src="/img/prada.png" alt="Prada" className="h-6 md:h-8 object-contain" />

                </div>
            </div>


        </>
    );
}

export default ProfilePage;