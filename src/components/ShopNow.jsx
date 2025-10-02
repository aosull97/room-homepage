import arrow from "/images/icon-arrow.svg";


const ShopNow = () => {
  return (
    <div>
        <div className='flex items-center gap-6 text-sm md:text-lg lg:text-sm'>
            <div className='pt-1'>
                <p className='tracking-[0.5rem] font-semibold'>SHOP NOW</p>
            </div>
            <div>
                <img src={arrow} alt='arrow icon' />
            </div>
        
        </div>
    </div>
  )
}

export default ShopNow