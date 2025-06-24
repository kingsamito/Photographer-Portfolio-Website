import heroImage from '../assets/imgs/hero.jpg';
import heroImage2 from '../assets/imgs/hero2.jpg';
import featstory from '../assets/imgs/featstory.jpg';
import featstory1 from '../assets/imgs/featstory1.jpg';
import author from '../assets/imgs/Author Bio Photo.png';
import left from '../assets/icons/leaf.svg';
import comma from '../assets/icons/comma.svg';
import flowerz from '../assets/icons/flowerz.svg';
import portraitflower from '../assets/icons/portraitflower.svg';
import weddingflower from '../assets/icons/weddingflower.svg';
import engagementflower from '../assets/icons/engagementflower.svg';
import OfferCard from '../components/OfferCard';
import testimonial from '../assets/imgs/testimonial.png';
import arrowleft from '../assets/imgs/arrow-left.png';
import arrowright from '../assets/imgs/arrowright.png';
import git from '../assets/imgs/getintouch.png';

const Home = () => {
  return (
    <>
      <section className="relative h-screen">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="top-1/2 left-1/2 absolute w-full text-center -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-ephesis font-semibold text-[#BBA085] text-[50px] lg:text-[64px]">
            Your Dream Wedding Awaits
          </h3>
          <h1 className="font-cormorantGaramond font-semibold text-[60px] text-white lg:text-[80px]">
            Artistic Wedding Photography
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 bg-[#F4F4F4] py-10 lg:py-0 lg:h-[553px] text-center">
        <img src={left} alt="left image" />
        <h3 className="font-medium font-raleway text-[#BBA085] text-[20px] lg:text-[28px]">
          AWARD WINNING PHOTOGRAPHY
        </h3>
        <p className="w-[80%] font-cormorantGaramond text-[40px] lg:text-[64px]">
          Showcasing your big day in a memorable and unforgettable way.
        </p>
      </section>
      <section className="flex">
        <img src={author} alt="author image" className="w-[40%]" />
        <div className="flex flex-col justify-center items-center gap-5 px-[100px]">
          <img src={comma} alt="comma" />
          <h1 className="font-cormorantGaramond text-[#4A4A4A] text-[30px] lg:text-[48px]">
            Hello, My Name is Tessa
          </h1>
          <p className="font-cormorantGaramond text-[#2D2D2D] text-[24px] text-center">
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis placerat
            eget. Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis
            placerat.
          </p>
          <img src={flowerz} alt="flowerz" />
          <h1 className="font-ephesis text-[#545454] text-[40px] lg:text-[60px]">
            Tessa.M
          </h1>
          <button className="bg-[#E9E1D9] w-[209px] h-[66px] font-cormorantGaramond text-[20px]">
            Learn More
          </button>
        </div>
      </section>
      <section className="pt-[100px] pb-10 text-center">
        <h3 className="font-medium font-raleway text-[#BBA085] text-[25px] md:text-[28px]">
          SERVICES
        </h3>
        <p className="font-cormorantGaramond text-[#5B5B5B] text-[30px] text-center md:text-[35px] lg:text-[58px]">
          What I Offer
        </p>
      </section>
      <section className="justify-center gap-[66px] grid grid-cols-[370px_370px_370px]">
        <OfferCard img={weddingflower} title="Wedding" amount="2999" />
        <OfferCard img={portraitflower} title="Portrait" amount="399" />
        <OfferCard img={engagementflower} title="Engagement" amount="1999" />
      </section>
      <section className="relative grid grid-cols-[70%_auto] bg-[#F8F8F8] my-[100px]">
        <img
          src={heroImage2}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="top-1/2 right-[15%] absolute bg-[#ffffffd7] p-3 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2 border-[#B58B61] py-[50px] border w-[420px] text-center">
            <img src={portraitflower} alt="flower" />
            <h1 className="font-ephesis text-[60px]">
              Creative, Passionate, Artistic
            </h1>
            <div className="flex flex-col font-cormorantGaramond text-center">
              <span className="text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
                tristique purus vehicula felis velit ac. Tempus velit morbi
                accumsan
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pb-10 text-center">
          <h3 className="font-medium font-raleway text-[#BBA085] text-[25px] md:text-[28px]">
            PORTFOLIO
          </h3>
          <p className="font-cormorantGaramond text-[#5B5B5B] text-[30px] text-center md:text-[35px] lg:text-[58px]">
            Featured Story
          </p>
        </div>
        <div className="flex">
          <div className="bg-[#F8F8F8] pb-5 pl-[73px] self-end">
            <h1 className="-mb-10 font-cormorant font-semibold text-[#B58B61] text-[120px]">
              01
            </h1>
            <h1 className="font-ephesis text-[46px]">Ricardo & Michelle</h1>
            <p className="font-cormorantGaramond font-light text-[28px]">
              Lorem ipsum dolor sit amet consecte Dignissim consectetur
              tristique purus vehicula felis velit.
            </p>
          </div>
          <img src={featstory} alt="featured story " />
          <img
            src={featstory1}
            alt="featured story "
            className="mr-[73px] ml-[38px]"
          />
        </div>
        <div className="flex justify-end mt-[40px] mr-[73px]">
          <button className="bg-[#E9E1D9] w-[194px] h-[66px] font-cormorantGaramond text-[20px]">
            View Gallery
          </button>
        </div>
      </section>
      <section className="py-[100px] max-w-5xl mx-auto">
        <h3 className="font-ephesis text-[#555555] text-[25px] text-center md:text-[70px]">
          Client Testimonials
        </h3>
        <div className="flex gap-10 justify-center items-center py-[90px]">
          <div className="flex items-center space-x-2  ">
            <div className="w-[39px] h-[57px] p-1 items-center flex justify-center bg-[#e9e1d9]">
              <img
                src={arrowleft}
                alt="arrow"
                className="cursor-pointer w-[19px] h-[23px]"
              />
            </div>
            <div className="border-2 border-[#e9e1d9] w-[450px] h-[450px] p-10 space-y-9 flex flex-col items-center ">
              <img
                src={comma}
                alt="comma"
                className="h-[40.58px] w-[47px] mt-10 "
              />
              <p className="text-[25px] w-[19rem] font-cormorantGaramond text-center text-[#4f4f4f] leading-[100%]">
                Showcasing your Big Day in a Memorable & Unforgettable way.
              </p>
              <h1 className="pt-20 text-center leading-[100%] font-cormorantGaramond text-[#414141] uppercase text-[28px]">
                Sarah & Luke
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <img src={testimonial} alt="" />
            </div>
            <div className="w-[39px] h-[57px] p-1 items-center flex justify-center bg-[#e9e1d9]">
              <img
                src={arrowright}
                alt="arrow"
                className="cursor-pointer w-[19px] h-[23px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[20px] pb-[40px] max-w-6xl mx-auto">
        <h1 className="text-center font-cormorantGaramond mx-auto leading-[100%] tracking-[5%] max-w-2xl text-[40px] font-[400] ">
          HELPING COUPLES BRING TO LIFE THEIR WEDDING DREAMS
        </h1>
        <div className="flex py-9 justify-between">
          <div className="flex flex-col items-center ">
            <h1 className="font-playfairDisplay text-[128px] text-[#bba085] leading-[100%] tracking-[5%]">
              12
            </h1>
            <h2 className="font-ephesis text-[40px] font-[400] text-[#535353]">
              Years Experience
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="font-playfairDisplay text-[128px] text-[#bba085] leading-[100%] tracking-[5%]">
              10k
            </h1>
            <h2 className="font-ephesis text-[40px] font-[400] text-[#535353]">
              Photos Delivered
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="font-playfairDisplay text-[128px] text-[#bba085] leading-[100%] tracking-[5%]">
              300
            </h1>
            <h2 className="font-ephesis text-[40px] font-[400] text-[#535353]">
              Events Captured
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="font-playfairDisplay text-[128px] text-[#bba085] leading-[100%] tracking-[5%]">
              6
            </h1>
            <h2 className="font-ephesis text-[40px] font-[400] text-[#535353]">
              Awards
            </h2>
          </div>
        </div>
      </section>
      <section className="py-[60px] max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="space-y-24 h-[815px] w-[655px] bg-[#f8f8f8] border p-20 ">
            <div className="space-y-1.5">
              <h2 className="uppercase text-[#bba085] font-raleway font-[500] text-[28px] leading-[100%] tracking-[20%]">
                Contact
              </h2>
              <h1 className="font-cormorantGaramond font-[400] text-[64px] leading-[100%] tracking-[5%] text-[#5B5B5B]">
                Get in Touch
              </h1>
            </div>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="NAME"
                className="font-[300] text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-[529px] border-[#C6C6C6]"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="font-[300] text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-[529px] border-[#C6C6C6]"
              />

              <textarea
                name="message"
                placeholder="Message"
                className="font-[300] h-[150px] text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-[529px] border-[#C6C6C6]"
              ></textarea>
              <button className="w-[185px] h-[60px] text-[28px] text-[#505050] bg-[#E9E1D9] cursor-pointer font-cormorantGaramond leading-[100%]">
                Send
              </button>
            </form>
          </div>
          <div>
            <img
              src={git}
              alt="contactimg"
              className="w-[605px] h-[815px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Home };
