import about from '../assets/imgs/about.png';
import deco from '../assets/imgs/deco.png';
import shoot1 from '../assets/imgs/shoot1.png';
import shoot2 from '../assets/imgs/shoot2.png';
import shoot3 from '../assets/imgs/shoot3.png';
import shoot4 from '../assets/imgs/shoot4.png';
import grid1 from '../assets/imgs/grid1.png';
import grid2 from '../assets/imgs/grid2.png';
import grid3 from '../assets/imgs/grid3.png';
import story1 from '../assets/imgs/story1.png';
import story2 from '../assets/imgs/story2.png';

export const About = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-[100px] sm:pt-[130px] lg:pt-[150px] pb-[40px] sm:pb-[50px] lg:pb-[60px] px-4">
        <div>
          <h3 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] font-[500] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[15%] lg:tracking-[20%] uppercase font-raleway text-[#BBA085]">
            About
          </h3>
          <h1 className="font-[400] text-[36px] sm:text-[48px] lg:text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            MY STORY
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16">
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <img
              src={about}
              alt="about"
              className="w-full lg:w-[659px] h-[300px] sm:h-[400px] lg:h-auto object-cover"
            />
          </div>
          <div className="px-[20px] sm:px-[60px] lg:px-[100px]">
            <div className="text-[18px] sm:text-[24px] lg:text-[28px] space-y-4 lg:space-y-5 max-w-2xl font-cormorantGaramond text-[#2D2D2D] leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus vitae massa sed egestas
                ornare pretium. Donec odio faucibus consectetur feugiat varius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus vitae massa sed egestas
                ornare pretium
              </p>
            </div>
            <div className="flex justify-center items-center flex-col space-y-4 lg:space-y-6 mt-6 lg:mt-8">
              <img
                src={deco}
                alt="deco"
                className="w-12 h-12 lg:w-auto lg:h-auto"
              />
              <button className="bg-[#E9E1D9] w-[180px] sm:w-[200px] lg:w-[209px] h-[56px] sm:h-[60px] lg:h-[66px] text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] font-cormorantGaramond text-[#555555]">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="pb-[30px] sm:pb-[40px] lg:pb-[50px] px-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between overflow-x-auto">
          <img
            src={shoot1}
            alt="shoot1"
            className="w-full sm:w-auto flex-shrink-0 h-[200px] sm:h-auto object-cover"
          />
          <img
            src={shoot2}
            alt="shoot2"
            className="w-full sm:w-auto flex-shrink-0 h-[200px] sm:h-auto object-cover"
          />
          <img
            src={shoot3}
            alt="shoot3"
            className="w-full sm:w-auto flex-shrink-0 h-[200px] sm:h-auto object-cover"
          />
          <img
            src={shoot4}
            alt="shoot4"
            className="w-full sm:w-auto flex-shrink-0 h-[200px] sm:h-auto object-cover"
          />
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] max-w-6xl mx-auto px-4">
        <div className="space-y-3 lg:space-y-5">
          <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-raleway text-[#BBA085] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[15%] lg:tracking-[20%] text-center">
            GET TO KNOW ME
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[36px] sm:text-[48px] lg:text-[64px] tracking-[20%] sm:tracking-[40%] lg:tracking-[55%] font-[400] text-center">
            A Few Facts About Myself
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full mb-6 lg:mb-0">
            <div className="order-1">
              <img
                src={grid1}
                alt="grid1"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-2 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  1
                </h1>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>

            <div className="order-3">
              <img
                src={grid2}
                alt="grid2"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full">
            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-1 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  2
                </h1>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>

            <div className="order-2">
              <img
                src={grid3}
                alt="grid3"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-3 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-3 lg:pb-5">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  3
                </h1>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="pt-[40px] sm:pt-[60px] lg:pt-[70px] pb-[80px] sm:pb-[120px] lg:pb-[180px] relative px-4">
        <div className="lg:flex lg:justify-between">
          <div className="pl-0 sm:pl-[50px] lg:pl-[100px] mb-8 lg:mb-0">
            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#BBA085] font-[500] font-raleway tracking-[15%] lg:tracking-[20%] leading-[40px] sm:leading-[45px] lg:leading-[50px] text-center lg:text-left">
              CRAFTING MEMORIES
            </h3>
            <h1 className="font-[400] text-[#5B5B5B] text-[36px] sm:text-[48px] lg:text-[64px] tracking-[2%] lg:tracking-[5%] font-cormorantGaramond leading-[100%] text-center lg:text-left">
              Your Story, My Lens
            </h1>

            <div className="bg-[#F5F5F5] mt-3 pl-0 sm:pl-[50px] lg:pl-[100px] flex items-center w-full h-auto lg:h-[239px] py-6 lg:py-0 px-4 lg:px-0">
              <p className="font-[300] max-w-[33rem] text-[18px] sm:text-[24px] lg:text-[28px] font-cormorantGaramond leading-[120%] lg:leading-[100%] text-center lg:text-left">
                Your wedding day is a once-in-a-lifetime event, and choosing the
                right photographer is essential to preserving its magic for
                years to come. I would be honored to be a part of your special
                day.
              </p>
            </div>

            <div className="pt-6 lg:pt-10 pl-0 sm:pl-[50px] lg:pl-[100px] text-center lg:text-left">
              <button className="h-[56px] sm:h-[60px] lg:h-[66px] w-[200px] sm:w-[220px] lg:w-[232px] font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] text-[#555555] bg-[#E9E1D9]">
                Book Now
              </button>
            </div>
          </div>

          <div className="lg:absolute lg:right-20 lg:top-3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-0">
              <img
                src={story1}
                alt="story1"
                className="h-[300px] sm:h-[350px] lg:h-[422px] w-full sm:w-[250px] lg:w-[291px] object-cover"
              />
              <img
                src={story2}
                alt="story2"
                className="lg:mt-[170px] h-[300px] sm:h-[350px] lg:h-[436px] w-full sm:w-[250px] lg:w-[291px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
