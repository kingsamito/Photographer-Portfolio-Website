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
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="top-1/2 left-1/2 absolute w-full text-center -translate-x-1/2 -translate-y-1/2 px-4">
          <h3 className="font-ephesis font-semibold text-[#BBA085] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[64px]">
            Your Dream Wedding Awaits
          </h3>
          <h1 className="font-cormorantGaramond font-semibold text-[40px] sm:text-[50px] md:text-[60px] text-white lg:text-[80px]">
            Artistic Wedding Photography
          </h1>
        </div>
      </section>

      {/* Award Winning Section */}
      <section className="flex flex-col justify-center items-center gap-5 bg-[#F4F4F4] py-10 lg:py-0 lg:h-[553px] text-center px-4">
        <img
          src={left}
          alt="left image"
          className="w-8 h-8 md:w-auto md:h-auto"
        />
        <h3 className="font-medium font-raleway text-[#BBA085] text-[16px] sm:text-[20px] lg:text-[28px]">
          AWARD WINNING PHOTOGRAPHY
        </h3>
        <p className="w-[90%] md:w-[80%] font-cormorantGaramond text-[24px] sm:text-[30px] md:text-[40px] lg:text-[64px] leading-tight">
          Showcasing your big day in a memorable and unforgettable way.
        </p>
      </section>

      {/* About Tessa Section */}
      <section className="flex flex-col lg:flex-row">
        <img
          src={author}
          alt="author image"
          className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-auto object-cover"
        />
        <div className="flex flex-col justify-center items-center gap-5 px-[20px] sm:px-[40px] lg:px-[100px] py-[40px] lg:py-0">
          <img
            src={comma}
            alt="comma"
            className="w-8 h-8 md:w-auto md:h-auto"
          />
          <h1 className="font-cormorantGaramond text-[#4A4A4A] text-[24px] sm:text-[30px] lg:text-[48px] text-center">
            Hello, My Name is Tessa
          </h1>
          <p className="font-cormorantGaramond text-[#2D2D2D] text-[18px] sm:text-[20px] md:text-[24px] text-center leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis placerat
            eget. Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis
            placerat.
          </p>
          <img
            src={flowerz}
            alt="flowerz"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <h1 className="font-ephesis text-[#545454] text-[30px] sm:text-[40px] lg:text-[60px]">
            Tessa.M
          </h1>
          <button className="bg-[#E9E1D9] w-[180px] sm:w-[209px] h-[56px] sm:h-[66px] font-cormorantGaramond text-[18px] sm:text-[20px]">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-10 text-center px-4">
        <h3 className="font-medium font-raleway text-[#BBA085] text-[20px] sm:text-[25px] md:text-[28px]">
          SERVICES
        </h3>
        <p className="font-cormorantGaramond text-[#5B5B5B] text-[24px] sm:text-[30px] text-center md:text-[35px] lg:text-[58px]">
          What I Offer
        </p>
      </section>

      {/* Offer Cards Section */}
      <section className="justify-center gap-[20px] sm:gap-[40px] lg:gap-[66px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        <OfferCard img={weddingflower} title="Wedding" amount="2999" />
        <OfferCard img={portraitflower} title="Portrait" amount="399" />
        <OfferCard img={engagementflower} title="Engagement" amount="1999" />
      </section>

      {/* Creative Section */}
      <section className="relative bg-[#F8F8F8] my-[60px] sm:my-[80px] lg:my-[100px]">
        <div className="lg:grid lg:grid-cols-[70%_auto]">
          <img
            src={heroImage2}
            alt="hero image"
            className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
          />
          <div className="lg:absolute lg:top-1/2 lg:right-[15%] lg:-translate-y-1/2 p-4 lg:p-0">
            <div className="bg-[#ffffffd7] p-3 lg:bg-[#ffffffd7]">
              <div className="flex flex-col items-center gap-2 border-[#B58B61] py-[30px] sm:py-[40px] lg:py-[50px] border w-full lg:w-[420px] text-center px-4">
                <img
                  src={portraitflower}
                  alt="flower"
                  className="w-12 h-12 md:w-auto md:h-auto"
                />
                <h1 className="font-ephesis text-[36px] sm:text-[48px] lg:text-[60px] leading-tight">
                  Creative, Passionate, Artistic
                </h1>
                <div className="flex flex-col font-cormorantGaramond text-center">
                  <span className="text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Dignissim
                    consectetur tristique purus vehicula felis velit ac. Tempus
                    velit morbi accumsan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 md:px-10 lg:px-[73px] pb-10">
        {/* Heading */}
        <div className="pb-6 text-center">
          <h3 className="font-medium font-raleway text-[#BBA085] text-[20px] md:text-[28px]">
            PORTFOLIO
          </h3>
          <p className="font-cormorantGaramond text-[#5B5B5B] text-[24px] md:text-[35px] lg:text-[58px]">
            Featured Story
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-10">
          {/* Text Block */}
          <div className="bg-[#F8F8F8] p-4 md:p-6 lg:pb-5 lg:pl-[73px] w-full lg:w-auto text-center lg:text-left">
            <h1 className="font-cormorant font-semibold text-[#B58B61] text-[60px] md:text-[90px] lg:text-[120px] leading-none">
              01
            </h1>
            <h1 className="font-ephesis text-[28px] md:text-[36px] lg:text-[46px]">
              Ricardo & Michelle
            </h1>
            <p className="font-cormorantGaramond font-light text-[16px] md:text-[20px] lg:text-[28px] mt-2">
              Lorem ipsum dolor sit amet consecte Dignissim consectetur
              tristique purus vehicula felis velit.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[38px]">
            <img
              src={featstory}
              alt="featured story"
              className="w-full sm:w-auto max-w-[300px] lg:max-w-none object-cover"
            />
            <img
              src={featstory1}
              alt="featured story"
              className="w-full sm:w-auto max-w-[300px] lg:max-w-none object-cover"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-[40px]">
          <button className="bg-[#E9E1D9] px-6 py-3 md:w-[194px] md:h-[66px] font-cormorantGaramond text-[16px] md:text-[20px]">
            View Gallery
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] max-w-5xl mx-auto px-4">
        <h3 className="font-ephesis text-[#555555] text-[36px] sm:text-[50px] text-center md:text-[70px]">
          Client Testimonials
        </h3>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 justify-center items-center py-[40px] sm:py-[60px] lg:py-[90px]">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2">
            <div className="hidden w-[39px] h-[57px] p-1 items-center md:flex justify-center bg-[#e9e1d9] order-2 lg:order-1">
              <img
                src={arrowleft}
                alt="arrow"
                className="cursor-pointer w-[19px] h-[23px]"
              />
            </div>
            <div className="border-2 border-[#e9e1d9] w-full max-w-[350px] sm:max-w-[400px] lg:w-[450px] h-[350px] sm:h-[400px] lg:h-[450px] p-6 lg:p-10 space-y-6 lg:space-y-9 flex flex-col items-center order-1 lg:order-2">
              <img
                src={comma}
                alt="comma"
                className="h-[30px] w-[35px] lg:h-[40.58px] lg:w-[47px] mt-6 lg:mt-10"
              />
              <p className="text-[18px] sm:text-[20px] lg:text-[25px] w-full max-w-[15rem] lg:w-[19rem] font-cormorantGaramond text-center text-[#4f4f4f] leading-[120%] lg:leading-[100%]">
                Showcasing your Big Day in a Memorable & Unforgettable way.
              </p>
              <h1 className="pt-8 lg:pt-20 text-center leading-[100%] font-cormorantGaramond text-[#414141] uppercase text-[20px] sm:text-[24px] lg:text-[28px]">
                Sarah & Luke
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2">
            <div className="order-1">
              <img
                src={testimonial}
                alt=""
                className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none"
              />
            </div>
            <div className="hidden w-[39px] h-[57px] p-1 items-center md:flex justify-center bg-[#e9e1d9] order-2">
              <img
                src={arrowright}
                alt="arrow"
                className="cursor-pointer w-[19px] h-[23px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-[20px] pb-[40px] max-w-6xl mx-auto px-4">
        <h1 className="text-center font-cormorantGaramond mx-auto leading-[110%] lg:leading-[100%] tracking-[2%] lg:tracking-[5%] max-w-2xl text-[24px] sm:text-[30px] lg:text-[40px] font-[400]">
          HELPING COUPLES BRING TO LIFE THEIR WEDDING DREAMS
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 py-6 lg:py-9 gap-6 lg:gap-0 lg:justify-between">
          <div className="flex flex-col items-center">
            <h1 className="font-playfairDisplay text-[64px] sm:text-[80px] lg:text-[128px] text-[#bba085] leading-[100%] tracking-[2%] lg:tracking-[5%]">
              12
            </h1>
            <h2 className="font-ephesis text-[24px] sm:text-[32px] lg:text-[40px] font-[400] text-[#535353] text-center">
              Years Experience
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-playfairDisplay text-[64px] sm:text-[80px] lg:text-[128px] text-[#bba085] leading-[100%] tracking-[2%] lg:tracking-[5%]">
              10k
            </h1>
            <h2 className="font-ephesis text-[24px] sm:text-[32px] lg:text-[40px] font-[400] text-[#535353] text-center">
              Photos Delivered
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-playfairDisplay text-[64px] sm:text-[80px] lg:text-[128px] text-[#bba085] leading-[100%] tracking-[2%] lg:tracking-[5%]">
              300
            </h1>
            <h2 className="font-ephesis text-[24px] sm:text-[32px] lg:text-[40px] font-[400] text-[#535353] text-center">
              Events Captured
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-playfairDisplay text-[64px] sm:text-[80px] lg:text-[128px] text-[#bba085] leading-[100%] tracking-[2%] lg:tracking-[5%]">
              6
            </h1>
            <h2 className="font-ephesis text-[24px] sm:text-[32px] lg:text-[40px] font-[400] text-[#535353] text-center">
              Awards
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[40px] sm:py-[60px] max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="space-y-12 sm:space-y-16 lg:space-y-24 h-auto lg:h-[815px] w-full lg:w-[655px] bg-[#f8f8f8] border p-8 sm:p-12 lg:p-20">
            <div className="space-y-1.5">
              <h2 className="uppercase text-[#bba085] font-raleway font-[500] text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] tracking-[10%] lg:tracking-[20%] text-center lg:text-left">
                Contact
              </h2>
              <h1 className="font-cormorantGaramond font-[400] text-[36px] sm:text-[48px] lg:text-[64px] leading-[100%] tracking-[2%] lg:tracking-[5%] text-[#5B5B5B] text-center lg:text-left">
                Get in Touch
              </h1>
            </div>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="NAME"
                className="font-[300] text-[20px] sm:text-[24px] lg:text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-full lg:w-[529px] border-[#C6C6C6] bg-transparent"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="font-[300] text-[20px] sm:text-[24px] lg:text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-full lg:w-[529px] border-[#C6C6C6] bg-transparent"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="font-[300] h-[120px] sm:h-[150px] text-[20px] sm:text-[24px] lg:text-[28px] outline-none leading-[100%] font-cormorantGaramond text-[#2D2D2D] p-2 border-b w-full lg:w-[529px] border-[#C6C6C6] bg-transparent resize-none"
              ></textarea>
              <button className="w-[160px] sm:w-[185px] h-[50px] sm:h-[60px] text-[20px] sm:text-[24px] lg:text-[28px] text-[#505050] bg-[#E9E1D9] cursor-pointer font-cormorantGaramond leading-[100%]">
                Send
              </button>
            </form>
          </div>
          <div className="w-full lg:w-auto mt-6 lg:mt-0">
            <img
              src={git}
              alt="contactimg"
              className="w-full lg:w-[605px] h-[400px] sm:h-[600px] lg:h-[815px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Home };
