
const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 py-10 lg:py-0 lg:h-[553px]'>
      <h3 className='font-medium font-raleway text-[#BBA085] text-[28px]'>ERROR</h3>
      <p className='lg:w-[863px] font-cormorantGaramond font-light text-[#2D2D2D] text-[35px] text-center lg:text-[48px]'>SORRY, THE PAGE YOU ARE LOOKING FOR DOESN’T EXIST.</p>
      <a href='/' className='flex justify-center items-center bg-[#E9E1D9] w-[197px] h-[66px] font-cormorantGaramond text-[28px]'>Home</a>
    </div>
  )
}

export { NotFound }
