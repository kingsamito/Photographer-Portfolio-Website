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
      <section className="pt-[150px] pb-[60px]">
        <div>
          <h3 className="text-center text-[28px] font-[500] leading-[50px] tracking-[20%] uppercase font-raleway text-[#BBA085]">
            About
          </h3>
          <h1 className="font-[400] text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            MY STORY
          </h1>
        </div>
        <div className="flex py-16">
          <div>
            <img src={about} alt="about" className="w-[659px]" />
          </div>
          <div className="px-[100px] ">
            <div className="text-[28px] space-y-5 max-w-2xl font-cormorantGaramond text-[#2D2D2D]">
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
            <div className="flex justify-center items-center flex-col space-y-6">
              <img src={deco} alt="deco" />
              <button className="bg-[#E9E1D9] w-[209px] h-[66px] text-[28px] leading-[100%] font-cormorantGaramond text-[#555555]">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <div className="flex justify-between">
          <img src={shoot1} alt="shoot1" />
          <img src={shoot2} alt="shoot2" />
          <img src={shoot3} alt="shoot3" />
          <img src={shoot4} alt="shoot4" />
        </div>
      </section>
      <section className="py-[100px] max-w-6xl mx-auto">
        <div className="space-y-5">
          <h3 className="text-[28px] font-raleway text-[#BBA085] leading-[50px] trackng-[20%] text-center">
            GET TO KNOW ME
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[64px] tracking-[55%] font-[400] text-center">
            A Few Facts About Myself
          </h1>
        </div>
        <div className="flex flex-col py-16">
          <div className="grid grid-cols-3">
            <img
              src={grid1}
              alt="grid1"
              className='"w-full h-full object-cover block'
            />

            <div className="flex flex-col items-center j space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  1
                </h1>
              </div>
              <p className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>

            <img
              src={grid2}
              alt="grid2"
              className='"w-full h-full object-cover block'
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  2
                </h1>
              </div>
              <p className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>

            <img
              src={grid3}
              alt="grid3"
              className='"w-full h-full object-cover block'
            />

            <div className="flex flex-col items-center space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-5">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  3
                </h1>
              </div>
              <p className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequat nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae massa sed
                egestas ornare pretium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[70px] pb-[180px] relative">
        <div>
          <div className="pl-[100px]">
            <h3 className="text-[28px] text-[#BBA085] font-[500] font-raleway tracking-[20%] leading-[50px]">
              CRAFTING MEMORIES
            </h3>
            <h1 className="font-[400] text-[#5B5B5B] text-[64px]  tracking-[5%] font-cormorantGaramond leading-[100%]">
              Your Story, My Lens
            </h1>
          </div>

          <div className="bg-[#F5F5F5] pl-[100px] flex items-center w-full h-[239px]">
            <p className="font-[300] max-w-[33rem] text-[28px] font-cormorantGaramond leading-[100%]">
              Your wedding day is a once-in-a-lifetime event, and choosing the
              right photographer is essential to preserving its magic for years
              to come. I would be honored to be a part of your special day.
            </p>
          </div>

          <div className="pt-10 pl-[100px]">
            <button className="h-[66px] w-[232px] font-cormorantGaramond text-[28px] leading-[100%] text-[#555555] bg-[#E9E1D9]">
              Book Now
            </button>
          </div>
        </div>
        <div className="absolute right-20 top-3">
          <div className="flex">
            <img src={story1} alt="story1" className="h-[422px] w-[291px] " />
            <img
              src={story2}
              alt="story1"
              className="mt-[170px] h-[436px] w-[291px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
