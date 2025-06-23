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
      <section className="py-[100px] mx-auto max-w-7xl">
        <div>
          <h3 className="text-center text-[28px] font-[500] leading-[50px] tracking-wider uppercase font-raleway text-[#BBA085]">
            PORTFOLIO
          </h3>
          <h1 className="font-[400] text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#4F4F4F]">
            HIGHLIGHTED WORKS
          </h1>

          <div className="py-[90px]">
            <div className="grid grid-cols-3 gap-20 place-items-center">
              {portfolio.map((port, index) => (
                <div key={index} className="flex flex-col">
                  <img src={port.img} alt="img" />

                  <div className="w-[373px] h-[127px] bg-[#F5F5F5] flex flex-col justify-center items-center">
                    <h1 className="text-[#4B4B4B] text-[36px] tracking-[5%] leading-[100%] font-dancingScript font-[400]">
                      {port.name}
                    </h1>
                    <h1 className="text-[#BBA085] text-[28px] tracking-wider leading-[50px] font-raleway font-[500]">
                      {port.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-20">
              {' '}
              <button className="w-[294px] h-[80px] border border-[#BBA085] font-cormorantGaramond text-[28px] leading-[100%] font-[500]">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center h-[513px] mb-[100px] flex justify-center items-center"
        style={{ backgroundImage: `url(${portbg})` }}
      >
        <div className="bg-white w-[968px] h-[280px] opacity-[70%] p-5 flex justify-center items-center">
          <div className="border border-[#BBA085] w-[932px] h-[246px] space-y-5 flex flex-col justify-center items-center">
            <>
              <h1 className="text-center font-ephesis font-[400] text-[60px] leading-[50px] text-[#BBA085]">
                My Promise
              </h1>
              <p className="max-w-3xl text-center font-cormorantGaramond text-[28px] font-[300] leading-[100%]">
                I guarantee breathtaking wedding photos that perfectly capture
                the magic of your special day, or your money back
              </p>
            </>
          </div>
        </div>
      </section>

      <section className="py-[250px] relative">
        <div className="bg-[#F5F5F5] h-[507px] p-10 pl-20 ">
          <h1 className="font-raleway tracking-widest font-[500] text-[28px] leading-[50px] text-[#BBA085]">
            YOU’RE PERFECT
          </h1>
          <h1 className="font-corinthia pl-8 text-[#6C6C6C] leading-[100%] text-[64px] tracking-wide">
            Stay Beautfiul
          </h1>
          <p className="font-cormorantGaramond text-[28px] font-[300] leading-7 text-[#4F4F4F] max-w-lg ">
            Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra
            justo nullam est placerat. Eget tortor lacus porta pellentesque duis
            velit habitant nisl dignissim.
          </p>
          <button className="w-[273px] mt-10 h-[83px] bg-[#E9E1D9] text-[28px] font-cormorantGaramond font-[500] text-[#454545] leading-[100%]">
            Enquire Now
          </button>
        </div>

        <div className="absolute right-28 top-32">
          <img src={beautiful} alt="beautiful" />
        </div>
      </section>
    </>
  );
};
