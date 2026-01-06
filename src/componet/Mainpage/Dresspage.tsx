function Dresspage() {
  return (
    <>
      <div>
        <div className="bg-gray-100 max-w-310 mx-auto p-10 rounded-3xl">

          <h1 className="inter font-bold text-[48px] text-center">
            BROWSE BY DRESS STYLE
          </h1>

          <div className="mt-10  flex flex-col gap-4 ">

            <div className="grid md:grid-cols-12 gap-4">

              <div className="md:col-span-4 relative ">
                <img
                  src="/img/stylee/s1.png"
                  alt="Casual"
                  className="w-full h-full object-cover rounded-xl"
                />

                <h2 className="absolute top-6 left-8  text-black text-3xl font-bold">
                  Casual
                </h2>
              </div>

              <div className="md:col-span-8 relative">
                <img
                  src="/img/stylee/s2.png"
                  alt="Formal"
                  className="w-full h-full object-cover rounded-xl"
                />
                <h2 className="absolute top-6 left-8  text-black text-3xl font-bold">
                  Formal
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-4">

              <div className="md:col-span-8 relative">
                <img
                  src="/img/stylee/s3.png"
                  alt="Party"
                  className="w-full h-full object-cover rounded-xl"
                />
                <h2 className="absolute top-6 left-8 text-black text-3xl font-bold">
                  Party
                </h2>
              </div>

              <div className="md:col-span-4 relative">
                <img
                  src="/img/stylee/s4.png"
                  alt="Gym"
                  className="w-full h-full object-cover rounded-xl"
                />
                <h2 className="absolute top-6 left-8 text-black   text-3xl font-bold">
                  Gym
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dresspage;

