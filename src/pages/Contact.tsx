import ladyflower from '../assets/imgs/lady-flower.jpg'
import mail from '../assets/icons/mail.svg'
import location from '../assets/icons/location.svg'
import phone from '../assets/icons/phone.svg'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <h3 className='font-medium font-raleway text-[#BBA085] text-[25px] md:text-[28px]'>CONTACT</h3>
            <p className='lg:w-[863px] font-cormorantGaramond text-[#2D2D2D] text-[30px] text-center md:text-[35px] lg:text-[48px]'>GET IN TOUCH</p>
            <div className="flex justify-center lg:justify-between items-center bg-[#F8F8F8] mt-10 w-full">
                <div className='flex flex-col gap-10 lg:pl-[113px]'>
                    <div className='flex flex-col'>
                        <label className='font-cormorantGaramond font-light text-[#494949] text-[25px] md:text-[28px]'>Your Name</label>
                        <input type='text' className='border-[#49494977] bg-white border rounded-lg md:w-[679px] h-[46px]' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-cormorantGaramond font-light text-[#494949] text-[25px] md:text-[28px]'>Contact Number</label>
                        <input type='text' className='border-[#49494977] bg-white border rounded-lg md:w-[679px] h-[46px]' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-cormorantGaramond font-light text-[#494949] text-[25px] md:text-[28px]'>Wedding / Event Date</label>
                        <input type='text' className='border-[#49494977] bg-white border rounded-lg md:w-[679px] h-[46px]' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-cormorantGaramond font-light text-[#494949] text-[25px] md:text-[28px]'>Tell me about yourself / event plan</label>
                        <input type='text' className='border-[#49494977] bg-white border rounded-lg md:w-[679px] h-[234px]' />
                    </div>
                    <a href='/' className='flex justify-center items-center bg-[#E9E1D9] w-[197px] h-[66px] font-cormorantGaramond text-[25px] md:text-[28px]'>Submit</a>
                </div>
                <img src={ladyflower} alt='lady flower' className='lg:block hidden w-[40%] h-[840px]' />
            </div>
            <div className='py-[100px]'>
                <h3 className='font-[Ephesis] font-medium text-[#BBA085] text-[64px] text-center'>Enquire Now!</h3>
                <p className='lg:w-[863px] font-cormorantGaramond text-[#2D2D2D] text-[30px] text-center md:text-[35px] lg:text-[48px]'>“YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”</p>
            </div>
            <div className='flex justify-end bg-contact-bg bg-cover md:pr-[127px] w-full h-[679px] font-cormorantGaramond'>
                <div className='flex flex-col justify-around bg-white bg-opacity-90 px-[78px] md:w-[450PX] h-full text-center'>
                    <div className='flex flex-col items-center text-[25px] md:text-[28px]'>
                        <img src={mail} alt='mail icon' />
                        <h3>EMAIL</h3>
                        <p>contact@TessaMorgan.xyz</p>
                    </div>
                    <div className='flex flex-col items-center text-[25px] md:text-[28px]'>
                        <img src={location} alt='mail icon' />
                        <h3>ADDRESS</h3>
                        <p>5396 North Reese Avenue, Fresno CA 93722</p>
                    </div>
                    <div className='flex flex-col items-center text-[25px] md:text-[28px]'>
                        <img src={phone} alt='mail icon' />
                        <h3>CONTACT</h3>
                        <p>+1 901 247 5467</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Contact }
