
function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>My Daily Nutrition</h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to {" "}
                <span className='underline decoration-4 decoration-cyan-200'>
                Every Fitness Enthusiests
                </span>{" "}
                favourite blog!
            </h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm self-center'>
        The lastest recipes {" "}<span className=' decoration-4 text-cyan-400'>| Nutrition plans for all diet types |</span>{" "} Posting daily to keep you on track
        </p>
    </div>
  )
}

export default Banner
