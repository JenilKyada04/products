function ProfilePage() {
    return (
        <>

    <div className="relative bg-light-gray ">
        <img
            src="/img/Rectangle2.png"
            alt="Fashion"
            className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-between px-10">
            <div className="max-w-xl text-black">
                <h1 className="text-4xl font-bold pt-10 leading-tight">
                    <div>FIND CLOTHES</div>
                    <div>THAT MATCHES</div>
                    <div>YOUR STYLE</div>
                </h1>

                <p className="font-light pt-5 pb-5">
                    Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.
                </p>

                <button className="bg-black text-white px-6 py-3 rounded-full">
                    Shop Now
                </button>

                <div className="flex gap-8 pt-10">
                    <div>
                        <h1 className="text-xl font-bold">200+</h1>
                        <p>International Brands</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">20000+</h1>
                        <p>High-Quality Products</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">30000+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


            <div className="bg-black py-6 flex justify-center gap-20" >
                <img src="/img/versace.png" alt="Versace" className="h-10" />
                <img src="/img/gucci.png" alt="Versace" className="h-10" />
                <img src="/img/zara.png" alt="Versace" className="h-10" />
                <img src="/img/calvinkelin.png" alt="Versace" className="h-10" />
                <img src="/img/versace.png" alt="Versace" className="h-10" />
            </div>
        </>
    );
}

export default ProfilePage;
