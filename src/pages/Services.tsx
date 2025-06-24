import service1 from '../assets/imgs/service1.png';
import service2 from '../assets/imgs/service2.png';
import service3 from '../assets/imgs/service3.png';
import service4 from '../assets/imgs/service4.png';
import service5 from '../assets/imgs/service5.png';
import celeb from '../assets/imgs/celeb.png';
import grid4 from '../assets/imgs/grid4.png';
import grid5 from '../assets/imgs/grid5.png';
import grid6 from '../assets/imgs/grid6.png';
import grid7 from '../assets/imgs/grid7.png';
import grid8 from '../assets/imgs/grid8.png';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Services = () => {
  return (
    <>
      <section className="py-[130px] mx-auto max-w-6xl">
        <div>
          <h3 className="text-center text-[28px] font-[500] leading-[50px] tracking-[20%] uppercase font-raleway text-[#BBA085]">
            SERVICES
          </h3>
          <h1 className="font-[400] text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            PHOTOGRAPHY PACKAGES
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="py-[40px] flex justify-between">
            <img src={service1} alt="service" />
            <img src={service2} alt="service" />
            <img src={service3} alt="service" />
          </div>
          <div className="py-[20px] flex justify-between gap-x-8">
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[64px] text-[#555555] leading-[100%] text-center">
                Wedding
              </h1>
              <div className="border-l px-9 py-2 border-[#BBA085] h-[403px] space-y-5">
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  500+ High-Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  6 Hours HD Footage
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  *Additional Photographer subject to charge
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div>
                  {' '}
                  <h1 className="text-center text-[28px] leading-[50px] font-[500] font-raleway tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[64px] leading-[100%] font-[500] font-cormorantGaramond  text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[64px] text-[#555555] leading-[100%] text-center">
                Portrait
              </h1>
              <div className="border-l px-10 py-2 border-[#BBA085] h-[403px] space-y-5">
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  Atleast 10 High Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  Professionally Edited
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  Hourly rates applied
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div>
                  {' '}
                  <h1 className="text-center text-[28px] leading-[50px] font-[500] font-raleway tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[64px] leading-[100%] font-[500] font-cormorantGaramond  text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[64px] text-[#555555] leading-[100%] text-center">
                Engagement
              </h1>
              <div className="border-l px-9 py-2 border-[#BBA085] h-[403px] space-y-5">
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  200 High-Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  3 Hours HD Footage
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  *Additional Photographer subject to charge
                </p>
                <p className="font-cormorantGaramond text-[28px] leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div>
                  {' '}
                  <h1 className="text-center text-[28px] leading-[50px] font-[500] font-raleway tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[64px] leading-[100%] font-[500] font-cormorantGaramond  text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[30px] flex justify-center">
            <button className="w-[294px] h-[80px] font-cormorantGaramond text-[28px] leading-[100%] font-[500] border border-[#BBA085]">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      <section className="my-[30px] bg-[#F5F5F5] h-[482px] flex justify-center items-center ">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          {' '}
          <img src={celeb} alt="celeb" />
          <h1 className="mt-5 font-cormorantGaramond font-[400] text-[64px] leading-[100%] text-center text-[#4F4F4F]">
            Celebrate your love with stunning images that will be cherished for
            a lifetime
          </h1>
        </div>
      </section>

      <section className="py-[100px] max-w-6xl mx-auto">
        <div className="space-y-5">
          <h3 className="text-[28px] font-raleway text-[#BBA085] leading-[50px] trackng-[20%] text-center">
            Process
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[64px] tracking-[55%] font-[400] text-center">
            What To Expect
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center py-16">
          <div className="grid grid-cols-3 ">
            <img
              src={grid4}
              alt="grid4"
              className='"w-full h-full object-cover block'
            />

            <div className="flex flex-col  items-center space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  1
                </h1>
              </div>
              <div>
                <h1 className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  BREAKING THE ICE
                </h1>
                <p className="mt-4 text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                  tincidunt consequat nec potenti. Justo molestie amet vulputate
                  aliquam.
                </p>
              </div>
            </div>

            <img
              src={grid5}
              alt="grid5"
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
              <div>
                <h1 className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  PLANNING & PREPARATION
                </h1>
                <p className="mt-4 text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra
                </p>
              </div>
            </div>

            <img
              src={grid6}
              alt="grid6"
              className='"w-full h-full object-cover block'
            />

            <div className="flex flex-col items-center space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-5">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  3
                </h1>
              </div>
              <div>
                <h1 className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  SESSION COVERAGE
                </h1>
                <p className="mt-4 text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <img
              src={grid7}
              alt="grid7"
              className='"w-full h-full object-cover block'
            />

            <div className="flex flex-col items-center j space-y-6">
              <div className="border-b-2 border-[#B58B61] w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[120px] leading-[100%] tracking-[5%]">
                  4
                </h1>
              </div>
              <div>
                <h1 className="text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  POST-PRODUCTION & DELIVERY
                </h1>
                <p className="mt-4 text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                  tincidunt consequat nec potenti. Justo molestie amet
                  vulputate.
                </p>
              </div>
            </div>

            <img
              src={grid8}
              alt="grid8"
              className='"w-full h-full object-cover block'
            />
          </div>
        </div>
      </section>

      <section className="py-[100px] max-w-6xl mx-auto">
        <div>
          <h3 className="text-[28px] font-raleway text-[#BBA085] leading-[50px] trackng-[20%] text-center">
            FAQ
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[64px] tracking-[55%] font-[400] text-center">
            Any Queries?
          </h1>
        </div>
        <div className="flex flex-col mt-20 space-y-5">
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[36px]"
            />
            <div className="border-b w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                WHAT IS YOUR PHOTOGRAPHY STYLE?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[36px]"
            />
            <div className="border-b w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[36px]"
            />
            <div className="border-b w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[36px]"
            />
            <div className="border-b w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[36px]"
            />
            <div className="border-b w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[190px] max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="font-ephesis font-[400] text-[64px] text-[#555555] leading-[100%] tracking-[5%] text-center">
            Quality Service
          </h1>
          <div className="w-[702px] mt-4 h-[482px] bg-[#F5F5F5] "></div>
          <img
            src={service4}
            alt="service4"
            className="absolute left-0 bottom-14"
          />
          <img
            src={service5}
            alt="service5"
            className="absolute right-[6rem] -bottom-14"
          />
          <div className="absolute right-[6rem] top-28 space-y-5 max-w-xl">
            <h1 className="text-[28px] font-[300] leading-[100%] tracking-[5%] text-[#2D2D2D] font-cormorantGaramond">
              On your big day, you can count on me to turn fleeting moments into
              timeless treasures you will cherish for generations.
            </h1>
            <button className="w-[283px] h-[87px] bg-[#E9E1D9] text-[28px] font-[400] leading-[100%]  text-[#454545] font-cormorantGaramond">
              Enquire Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
