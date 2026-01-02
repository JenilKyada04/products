function Dresspage() {
    return (
      <>
      <div className="">
        <div className="bg-gray-100 max-w-360 mx-auto p-10 rounded-3xl">
  
          <div className="font-integral font-bold text-[48px] text-center">
            <h1>BROWSE BY DRESS STYLE</h1>
          </div>
  
          <div className="mt-10 flex flex-col gap-4 max-w-[1440]">
  
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img
                  src="/img/stylee/s1.png"
                  alt="Style 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="col-span-8">
                <img
                  src="/img/stylee/s2.png"
                  alt="Style 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <img
                  src="/img/stylee/s3.png"
                  alt="Style 3"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="col-span-4">
                <img
                  src="/img/stylee/s4.png"
                  alt="Style 4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
  
          </div>


          
        </div>
        </div>
      </>
    );
  }
  
  export default Dresspage;
  