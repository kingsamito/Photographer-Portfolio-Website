import port1 from '../assets/imgs/port1.png';
import port2 from '../assets/imgs/port2.png';
import port3 from '../assets/imgs/port3.png';
import port4 from '../assets/imgs/port4.png';
import port5 from '../assets/imgs/port5.png';
import port6 from '../assets/imgs/port6.png';
import port7 from '../assets/imgs/port7.png';
import port8 from '../assets/imgs/port8.png';
import port9 from '../assets/imgs/port9.png';
import portbg from '../assets/imgs/portbg.png';
import beautiful from '../assets/imgs/beautiful.png';

export const Portfolio = () => {
  type Portfolio = {
    img: string;
    name: string;
    title: string;
  };

  const portfolio: Portfolio[] = [
    {
      img: port1,
      name: 'Sarah & Luke ',
      title: 'WEDDING',
    },
    {
      img: port2,
      name: 'Richard & Jane ',
      title: 'WEDDING',
    },
    {
      img: port3,
      name: 'Gareth & Eva ',
      title: 'WEDDING',
    },
    {
      img: port4,
      name: 'Sarah & Luke',
      title: 'ENGAGEMENT',
    },
    {
      img: port5,
      name: 'Richard & Jane ',
      title: 'ENGAGEMENT',
    },
    {
      img: port6,
      name: 'Gareth & Eva ',
      title: 'ENAGAGEMENT',
    },
    {
      img: port7,
      name: 'Sarah',
      title: 'PORTRAIT',
    },
    {
      img: port8,
      name: 'JANE',
      title: 'PORTRAIT',
    },
    {
      img: port9,
      name: 'ANGELINE',
      title: 'PORTRAIT',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] mx-auto max-w-7xl px-4">
        <div>
          <h3 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] font-[500] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[10%] sm:tracking-[15%] lg:tracking-wider uppercase font-raleway text-[#BBA085]">
            PORTFOLIO
          </h3>
          <h1 className="font-[400] text-[36px] sm:text-[48px] lg:text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            HIGHLIGHTED WORKS
          </h1>

          {/* Portfolio Grid */}
          <div className="py-[40px] sm:py-[60px] lg:py-[90px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 place-items-center">
              {portfolio.map((port, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full max-w-[350px] sm:max-w-none"
                >
                  <img
                    src={port.img}
                    alt="img"
                    className="w-full lg:w-[373px] h-[250px] sm:h-[280px] lg:h-auto object-cover"
                  />

                  <div className="w-full lg:w-[373px] h-[100px] sm:h-[110px] lg:h-[127px] bg-[#F5F5F5] flex flex-col justify-center items-center">
                    <h1 className="text-[#4B4B4B] text-[24px] sm:text-[28px] lg:text-[36px] tracking-[2%] lg:tracking-[5%] leading-[100%] font-dancingScript font-[400]">
                      {port.name}
                    </h1>
                    <h1 className="text-[#BBA085] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[10%] lg:tracking-wider leading-[40px] sm:leading-[45px] lg:leading-[50px] font-raleway font-[500]">
                      {port.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
              <button className="w-[260px] sm:w-[280px] lg:w-[294px] h-[70px] sm:h-[75px] lg:h-[80px] border border-[#BBA085] font-cormorantGaramond text-[20px] sm:text-[24px] lg:text-[28px] leading-[100%] font-[500]">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section
        className="bg-cover bg-center h-[400px] sm:h-[450px] lg:h-[513px] mb-[60px] sm:mb-[80px] lg:mb-[100px] flex justify-center items-center px-4"
        style={{ backgroundImage: `url(${portbg})` }}
      >
        <div className="bg-white w-full max-w-[600px] sm:max-w-[800px] lg:w-[968px] h-auto lg:h-[280px] opacity-[70%] p-4 sm:p-6 lg:p-5 flex justify-center items-center">
          <div className="border border-[#BBA085] w-full lg:w-[932px] h-auto lg:h-[246px] space-y-3 sm:space-y-4 lg:space-y-5 flex flex-col justify-center items-center py-8 sm:py-10 lg:py-0 px-4 sm:px-6 lg:px-0">
            <h1 className="text-center font-ephesis font-[400] text-[36px] sm:text-[48px] lg:text-[60px] leading-[40px] sm:leading-[45px] lg:leading-[50px] text-[#BBA085]">
              My Promise
            </h1>
            <p className="max-w-3xl text-center font-cormorantGaramond text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-[120%] lg:leading-[100%]">
              I guarantee breathtaking wedding photos that perfectly capture the
              magic of your special day, or your money back
            </p>
          </div>
        </div>
      </section>

      {/* Stay Beautiful Section */}
      <section className="py-[120px] sm:py-[180px] lg:py-[250px] relative px-4">
        {/* Content Container */}
        <div className="bg-[#F5F5F5] h-auto lg:h-[507px] p-6 sm:p-8 lg:p-10 pl-4 sm:pl-8 lg:pl-20 relative">
          <h1 className="font-raleway tracking-[10%] sm:tracking-[15%] lg:tracking-widest font-[500] text-[20px] sm:text-[24px] lg:text-[28px] leading-[40px] sm:leading-[45px] lg:leading-[50px] text-[#BBA085] text-center lg:text-left">
            YOU'RE PERFECT
          </h1>
          <h1 className="font-corinthia pl-0 sm:pl-4 lg:pl-8 text-[#6C6C6C] leading-[100%] text-[36px] sm:text-[48px] lg:text-[64px] tracking-wide text-center lg:text-left">
            Stay Beautiful
          </h1>
          <p className="font-cormorantGaramond text-[18px] sm:text-[24px] lg:text-[28px] font-[300] leading-6 sm:leading-7 lg:leading-7 text-[#4F4F4F] max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra
            justo nullam est placerat. Eget tortor lacus porta pellentesque duis
            velit habitant nisl dignissim.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="w-[240px] sm:w-[260px] lg:w-[273px] mt-6 sm:mt-8 lg:mt-10 h-[70px] sm:h-[75px] lg:h-[83px] bg-[#E9E1D9] text-[20px] sm:text-[24px] lg:text-[28px] font-cormorantGaramond font-[500] text-[#454545] leading-[100%]">
              Enquire Now
            </button>
          </div>

          {/* Mobile Image (stacked) */}
          <div className="mt-8 flex justify-center lg:hidden">
            <img
              src={beautiful}
              alt="beautiful"
              className="w-[200px] sm:w-[300px] h-[250px] sm:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Desktop Image (unchanged absolute positioning) */}
        <div className="hidden lg:block absolute right-4 sm:right-12 lg:right-28 top-16 sm:top-24 lg:top-32 w-[200px] sm:w-[300px] lg:w-auto">
          <img
            src={beautiful}
            alt="beautiful"
            className="w-full h-[250px] sm:h-[350px] lg:h-auto object-cover lg:object-contain"
          />
        </div>
      </section>
    </>
  );
};
