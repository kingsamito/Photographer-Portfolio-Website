import heroImage from '../assets/imgs/hero.jpg'
import heroImage2 from '../assets/imgs/hero2.jpg'
import featstory from '../assets/imgs/featstory.jpg'
import featstory1 from '../assets/imgs/featstory1.jpg'
import author from '../assets/imgs/Author Bio Photo.png'
import left from '../assets/icons/leaf.svg'
import comma from '../assets/icons/comma.svg'
import flowerz from '../assets/icons/flowerz.svg'
import portraitflower from '../assets/icons/portraitflower.svg'
import weddingflower from '../assets/icons/weddingflower.svg'
import engagementflower from '../assets/icons/engagementflower.svg'
import OfferCard from '../components/OfferCard'

const Home = () => {
    return (
        <>
            <section className='relative h-screen'>
                <img src={heroImage} alt='hero image' className='w-full h-full object-cover' />
                <div className='top-1/2 left-1/2 absolute w-full text-center -translate-x-1/2 -translate-y-1/2'>
                    <h3 className='font-ephesis font-semibold text-[#BBA085] text-[50px] lg:text-[64px]'>Your Dream Wedding Awaits</h3>
                    <h1 className='font-cormorantGaramond font-semibold text-[60px] text-white lg:text-[80px]'>Artistic Wedding Photography</h1>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center gap-5 bg-[#F4F4F4] py-10 lg:py-0 lg:h-[553px] text-center'>
                <img src={left} alt='left image' />
                <h3 className='font-medium font-raleway text-[#BBA085] text-[20px] lg:text-[28px]'>AWARD WINNING PHOTOGRAPHY</h3>
                <p className='w-[80%] font-cormorantGaramond text-[40px] lg:text-[64px]'>Showcasing your big day in a memorable and unforgettable way.</p>
            </section>
            <section className='flex'>
                <img src={author} alt='author image' className='w-[40%]' />
                <div className='flex flex-col justify-center items-center gap-5 px-[100px]'>
                    <img src={comma} alt='comma' />
                    <h1 className='font-cormorantGaramond text-[#4A4A4A] text-[30px] lg:text-[48px]'>Hello, My Name is Tessa</h1>
                    <p className='font-cormorantGaramond text-[#2D2D2D] text-[24px] text-center'>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget. Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.</p>
                    <img src={flowerz} alt='flowerz' />
                    <h1 className='font-ephesis text-[#545454] text-[40px] lg:text-[60px]'>Tessa.M</h1>
                    <button className='bg-[#E9E1D9] w-[209px] h-[66px] font-cormorantGaramond text-[20px]'>Learn More</button>
                </div>
            </section>
            <section className='pt-[100px] pb-10 text-center'>
                <h3 className='font-medium font-raleway text-[#BBA085] text-[25px] md:text-[28px]'>SERVICES</h3>
                <p className='font-cormorantGaramond text-[#5B5B5B] text-[30px] text-center md:text-[35px] lg:text-[58px]'>What I Offer</p>
            </section>
            <section className='justify-center gap-[66px] grid grid-cols-[370px_370px_370px]'>
                <OfferCard img={weddingflower} title='Wedding' amount='2999' />
                <OfferCard img={portraitflower} title='Portrait' amount='399' />
                <OfferCard img={engagementflower} title='Engagement' amount='1999' />
            </section>
            <section className='relative grid grid-cols-[70%_auto] bg-[#F8F8F8] my-[100px]'>
                <img src={heroImage2} alt='hero image' className='w-full h-full object-cover' />
                <div className='top-1/2 right-[15%] absolute bg-[#ffffffd7] p-3 -translate-y-1/2'>
                    <div className="flex flex-col items-center gap-2 border-[#B58B61] py-[50px] border w-[420px] text-center">
                        <img src={portraitflower} alt='flower' />
                        <h1 className="font-ephesis text-[60px]">Creative, Passionate, Artistic</h1>
                        <div className="flex flex-col font-cormorantGaramond text-center">
                            <span className="text-[24px]">Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan</span>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className='pb-10 text-center'>
                    <h3 className='font-medium font-raleway text-[#BBA085] text-[25px] md:text-[28px]'>PORTFOLIO</h3>
                    <p className='font-cormorantGaramond text-[#5B5B5B] text-[30px] text-center md:text-[35px] lg:text-[58px]'>Featured Story</p>
                </div>
                <div className='flex'>
                    <div className='bg-[#F8F8F8] pb-5 pl-[73px] self-end'>
                        <h1 className='-mb-10 font-cormorant font-semibold text-[#B58B61] text-[120px]'>01</h1>
                        <h1 className="font-ephesis text-[46px]">Ricardo & Michelle</h1>
                        <p className="font-cormorantGaramond font-light text-[28px]">Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique purus vehicula felis velit.</p>
                    </div>
                    <img src={featstory} alt='featured story ' />
                    <img src={featstory1} alt='featured story ' className='mr-[73px] ml-[38px]' />
                </div>
                <div className="flex justify-end mt-[40px] mr-[73px]">
                    <button className="bg-[#E9E1D9] w-[194px] h-[66px] font-cormorantGaramond text-[20px]">
                        View Gallery
                    </button>
                </div>
            </section>
            <section className='py-[100px]'>
                <h3 className='font-ephesis text-[#555555] text-[25px] text-center md:text-[70px]'>Client Testimonials</h3>
                <div className='bg-[#F8F8F8]'>
                    <div className='border-[#E9E1D9] border'>
                        <img src={comma} alt='comma' />
                        <h1 className='font-cormorantGaramond text-[#4A4A4A] text-[30px] lg:text-[48px]'>Hello, My Name is Tessa</h1>
                        <p className='font-cormorantGaramond text-[#2D2D2D] text-[24px] text-center'>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget. Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Home }
