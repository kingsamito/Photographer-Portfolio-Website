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
      {/* Header Section */}
      <section className="py-[80px] sm:py-[100px] lg:py-[130px] mx-auto max-w-6xl px-4">
        <div>
          <h3 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] font-[500] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[15%] lg:tracking-[20%] uppercase font-raleway text-[#BBA085]">
            SERVICES
          </h3>
          <h1 className="font-[400] text-[36px] sm:text-[48px] lg:text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            PHOTOGRAPHY PACKAGES
          </h1>
        </div>
        <div className="flex flex-col">
          {/* Service Images */}
          <div className="py-[30px] sm:py-[40px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
            <img
              src={service1}
              alt="service"
              className="w-full sm:w-auto h-[200px] sm:h-auto object-cover"
            />
            <img
              src={service2}
              alt="service"
              className="w-full sm:w-auto h-[200px] sm:h-auto object-cover"
            />
            <img
              src={service3}
              alt="service"
              className="w-full sm:w-auto h-[200px] sm:h-auto object-cover"
            />
          </div>

          {/* Service Details */}
          <div className="py-[20px] flex flex-col lg:flex-row justify-between gap-6 lg:gap-x-8">
            {/* Wedding Package */}
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[48px] sm:text-[56px] lg:text-[64px] text-[#555555] leading-[100%] text-center">
                Wedding
              </h1>
              <div className="border-l px-6 sm:px-8 lg:px-9 py-4 lg:py-2 border-[#BBA085] h-auto lg:h-[403px] space-y-3 lg:space-y-5">
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  500+ High-Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  6 Hours HD Footage
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  *Additional Photographer subject to charge
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div className="pt-4 lg:pt-0">
                  <h1 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] leading-[40px] sm:leading-[45px] lg:leading-[50px] font-[500] font-raleway tracking-[15%] lg:tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[48px] sm:text-[56px] lg:text-[64px] leading-[100%] font-[500] font-cormorantGaramond text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>

            {/* Portrait Package */}
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[48px] sm:text-[56px] lg:text-[64px] text-[#555555] leading-[100%] text-center">
                Portrait
              </h1>
              <div className="border-l px-6 sm:px-8 lg:px-10 py-4 lg:py-2 border-[#BBA085] h-auto lg:h-[403px] space-y-3 lg:space-y-5">
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  Atleast 10 High Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  Professionally Edited
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  Hourly rates applied
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div className="pt-4 lg:pt-0">
                  <h1 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] leading-[40px] sm:leading-[45px] lg:leading-[50px] font-[500] font-raleway tracking-[15%] lg:tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[48px] sm:text-[56px] lg:text-[64px] leading-[100%] font-[500] font-cormorantGaramond text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>

            {/* Engagement Package */}
            <div className="flex flex-col flex-1">
              <h1 className="font-ephesis font-[400] text-[48px] sm:text-[56px] lg:text-[64px] text-[#555555] leading-[100%] text-center">
                Engagement
              </h1>
              <div className="border-l px-6 sm:px-8 lg:px-9 py-4 lg:py-2 border-[#BBA085] h-auto lg:h-[403px] space-y-3 lg:space-y-5">
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  200 High-Quality Photos
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  3 Hours HD Footage
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  *Additional Photographer subject to charge
                </p>
                <p className="font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] text-[#2D2D2D] font-[300]">
                  *Videographer subject to charge
                </p>
                <div className="pt-4 lg:pt-0">
                  <h1 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] leading-[40px] sm:leading-[45px] lg:leading-[50px] font-[500] font-raleway tracking-[15%] lg:tracking-[20%] text-[#BBA085]">
                    PER SESSION
                  </h1>
                  <h1 className="text-center text-[48px] sm:text-[56px] lg:text-[64px] leading-[100%] font-[500] font-cormorantGaramond text-[#4F4F4F]">
                    $799
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="py-[30px] flex justify-center">
            <button className="w-[260px] sm:w-[280px] lg:w-[294px] h-[70px] sm:h-[75px] lg:h-[80px] font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] font-[500] border border-[#BBA085]">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* Celebration Quote Section */}
      <section className="my-[30px] bg-[#F5F5F5] h-auto lg:h-[482px] flex justify-center items-center py-12 lg:py-0 px-4">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <img
            src={celeb}
            alt="celeb"
            className="w-16 h-16 lg:w-auto lg:h-auto mb-4 lg:mb-0"
          />
          <h1 className="mt-3 lg:mt-5 font-cormorantGaramond font-[400] text-[24px] sm:text-[36px] lg:text-[64px] leading-[120%] lg:leading-[100%] text-center text-[#4F4F4F] max-w-4xl">
            Celebrate your love with stunning images that will be cherished for
            a lifetime
          </h1>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] max-w-6xl mx-auto px-4">
        <div className="space-y-3 lg:space-y-5">
          <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-raleway text-[#BBA085] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[15%] lg:tracking-[20%] text-center">
            Process
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[36px] sm:text-[48px] lg:text-[64px] tracking-[20%] sm:tracking-[40%] lg:tracking-[55%] font-[400] text-center">
            What To Expect
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full mb-6 lg:mb-0">
            <div className="order-1">
              <img
                src={grid4}
                alt="grid4"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-2 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  1
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem] mb-2 lg:mb-4">
                  BREAKING THE ICE
                </h1>
                <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                  tincidunt consequat nec potenti. Justo molestie amet vulputate
                  aliquam.
                </p>
              </div>
            </div>

            <div className="order-3">
              <img
                src={grid5}
                alt="grid5"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full mb-6 lg:mb-0">
            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-1 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  2
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem] mb-2 lg:mb-4">
                  PLANNING & PREPARATION
                </h1>
                <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra
                </p>
              </div>
            </div>

            <div className="order-2">
              <img
                src={grid6}
                alt="grid6"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-3 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-3 lg:pb-5">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  3
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem] mb-2 lg:mb-4">
                  SESSION COVERAGE
                </h1>
                <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra
                </p>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 w-full">
            <div className="order-1 ">
              <img
                src={grid7}
                alt="grid7"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 lg:space-y-6 order-2 px-4">
              <div className="border-b-2 border-[#B58B61] w-[120px] sm:w-[150px] lg:w-[170px] pb-2">
                <h1 className="text-[#B58B61] font-cormorant font-[600] text-center text-[80px] sm:text-[100px] lg:text-[120px] leading-[100%] tracking-[5%]">
                  4
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[100%] text-center max-w-[18rem] mb-2 lg:mb-4">
                  POST-PRODUCTION & DELIVERY
                </h1>
                <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#2D2D2D] font-cormorantGaramond font-[300] leading-[120%] lg:leading-[100%] text-center max-w-[18rem]">
                  Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                  tincidunt consequat nec potenti. Justo molestie amet
                  vulputate.
                </p>
              </div>
            </div>

            <div className="order-3">
              <img
                src={grid8}
                alt="grid8"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] max-w-6xl mx-auto px-4">
        <div>
          <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-raleway text-[#BBA085] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[15%] lg:tracking-[20%] text-center">
            FAQ
          </h3>
          <h1 className="font-cormorantGaramond leading-[100%] text-[36px] sm:text-[48px] lg:text-[64px] tracking-[20%] sm:tracking-[40%] lg:tracking-[55%] font-[400] text-center">
            Any Queries?
          </h1>
        </div>
        <div className="flex flex-col mt-12 sm:mt-16 lg:mt-20 space-y-4 lg:space-y-5">
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[28px] sm:text-[32px] lg:text-[36px] flex-shrink-0"
            />
            <div className="border-b w-full max-w-[600px] sm:max-w-[700px] lg:w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                WHAT IS YOUR PHOTOGRAPHY STYLE?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[28px] sm:text-[32px] lg:text-[36px] flex-shrink-0"
            />
            <div className="border-b w-full max-w-[600px] sm:max-w-[700px] lg:w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[28px] sm:text-[32px] lg:text-[36px] flex-shrink-0"
            />
            <div className="border-b w-full max-w-[600px] sm:max-w-[700px] lg:w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[28px] sm:text-[32px] lg:text-[36px] flex-shrink-0"
            />
            <div className="border-b w-full max-w-[600px] sm:max-w-[700px] lg:w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
            <Icon
              icon="fluent:add-32-light"
              className="text-[#B58B61] text-[28px] sm:text-[32px] lg:text-[36px] flex-shrink-0"
            />
            <div className="border-b w-full max-w-[600px] sm:max-w-[700px] lg:w-[932px] pb-3 border-[#D2D2D2]">
              <h1 className="text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[100%] text-[#2D2D2D] font-cormorantGaramond">
                HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Service Section */}
      <section className="pt-[100px] pb-[190px] max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="font-ephesis font-[400] text-[36px] md:text-[64px] text-[#555555] leading-[100%] tracking-[5%] text-center">
            Quality Service
          </h1>

          {/* Mobile Layout (Only visible on small screens) */}
          <div className="flex flex-col items-center gap-6 w-full px-4 mt-6 md:hidden">
            <img
              src={service4}
              alt="service4"
              className="w-full max-w-[350px] rounded-lg object-cover"
            />
            <p className="text-[18px] font-cormorantGaramond text-[#2D2D2D] text-center px-2">
              On your big day, you can count on me to turn fleeting moments into
              timeless treasures you will cherish for generations.
            </p>
            <button className="bg-[#E9E1D9] w-full max-w-[250px] py-3 text-[18px] font-cormorantGaramond">
              Enquire Now
            </button>
            <img
              src={service5}
              alt="service5"
              className="w-full max-w-[250px] mt-4 object-cover"
            />
          </div>

          {/* Desktop Layout (Unchanged — exactly your current code) */}
          <div className="hidden md:block relative">
            <div className="w-[702px] mt-4 h-[482px] bg-[#F5F5F5] "></div>
            <img
              src={service4}
              alt="service4"
              className="absolute -left-40 bottom-14"
            />
            <img
              src={service5}
              alt="service5"
              className="absolute -right-[5rem] -bottom-14"
            />
            <div className="absolute -right-[5rem] top-14 space-y-5 max-w-xl">
              <h1 className="text-[28px] font-[300] leading-[100%] tracking-[5%] text-[#2D2D2D] font-cormorantGaramond">
                On your big day, you can count on me to turn fleeting moments
                into timeless treasures you will cherish for generations.
              </h1>
              <button className="w-[283px] h-[87px] bg-[#E9E1D9] text-[28px] font-[400] leading-[100%]  text-[#454545] font-cormorantGaramond">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

