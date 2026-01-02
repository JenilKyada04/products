import Footersmcard from "./Footersmcard";

function Footercard() {
  return (
    <div className='bg-gray-200  p-10  '>
      <div className="max-w-360 mx-auto flex justify-evenly items-center">

        <div className="w-62">
          <h1 className="font-integral font-bold text-[25px]">SHOP.CO</h1>
          <p className="text-sm font-thin mt-6 mb-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="flex space-x-3 mt-5" >
            <img src="/img/logo/1.png" alt="" />
            <img src="/img/logo/2.png" alt="" />
            <img src="/img/logo/3.png" alt="" />
            <img src="/img/logo/4.png" alt="" />
          </div>

        </div>
      <Footersmcard/>
      </div>
    </div>
  )
}

export default Footercard
