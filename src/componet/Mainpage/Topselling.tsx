import TopsellingCard from './TopsellingCard'
function Topselling() {
  return (
    <div>
      <div>
      <h1 className="font-integral mt-19 font-bold text-[48px] tracking-normal flex items-center justify-center text-center "
      >TOP SELLING</h1>
      <TopsellingCard  />

      <div className="flex justify-center mt-5 mb-18 ">
        <button className="bg-white border border-gray-300 rounded-full px-8 py-3 hover:bg-gray-100 transition">
          <span className="font-integral text-base font-bold text-gray-900">
            View All
          </span>
        </button>
      </div>



    </div>
    </div>
  )
}

export default Topselling
