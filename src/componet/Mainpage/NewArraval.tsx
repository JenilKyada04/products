import NewArravalCard from './NewArravalCard'

function NewArraval() {
  return (
    <div className='max-w-360 mx-auto'>
      <h1 className="font-integral mt-29 inter text-[48px] tracking-normal flex items-center justify-center text-center "
      >NEW ARRIVALS</h1>
      <NewArravalCard />

      <div className="flex justify-center mt-5 mb-18 ">
        <button className="bg-white border border-gray-300 rounded-full px-8 py-3 hover:bg-gray-100 transition">
          <span className="font-integral text-base font-light text-gray-900">
            View All
          </span>
        </button>
      </div>

      <hr className='border-gray-300' />

    </div>
  )
}

export default NewArraval
