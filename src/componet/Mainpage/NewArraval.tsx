import NewArravalCard from './NewArravalCard'

function NewArraval() {
  return (
    <div>
      <h1 className="font-integral font-bold text-[48px] leading-[1] tracking-normal flex items-center justify-center text-center"
      >New Arrivals</h1>
      <NewArravalCard />

      <div className="flex justify-center">
        <button className="bg-white border border-gray-300 rounded-full px-8 py-3 hover:bg-gray-100 transition">
          <span className="font-integral text-base font-bold text-gray-900">
            View All
          </span>
        </button>
      </div>





    </div>
  )
}

export default NewArraval
