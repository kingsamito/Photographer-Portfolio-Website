import blog1 from '../assets/imgs/blog1.png';
import blog2 from '../assets/imgs/blog2.png';
import blog3 from '../assets/imgs/blog3.png';
import blog4 from '../assets/imgs/blog4.png';
import blog5 from '../assets/imgs/blog5.png';
import blog6 from '../assets/imgs/blog6.png';

type Blog = {
  img: string;
  title: string;
  date: string;
  category: string;
  desc: string;
};

export const Blog = () => {
  const blogs: Blog[] = [
    {
      img: blog1,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
    {
      img: blog2,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
    {
      img: blog3,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
    {
      img: blog4,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
    {
      img: blog5,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
    {
      img: blog6,
      title: 'Gift ideas for the bride & groom on the wedding day',
      date: '28 July 2023',
      category: 'Wedding ',
      desc: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-[60px] sm:py-[80px] lg:py-[100px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">
        <div className="space-y-3 lg:space-y-4">
          <h3 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] font-[500] leading-[40px] sm:leading-[45px] lg:leading-[50px] tracking-[10%] sm:tracking-[15%] lg:tracking-wider uppercase font-raleway text-[#BBA085]">
            BLOG
          </h3>
          <h1 className="font-[400] text-[36px] sm:text-[48px] lg:text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#5B5B5B]">
            LATEST STORIES
          </h1>
          <p className="pt-3 lg:pt-5 max-w-2xl mx-auto font-[300] text-[18px] sm:text-[24px] lg:text-[28px] font-cormorantGaramond leading-[120%] lg:leading-[100%] tracking-wide text-center text-[#5B5B5B]">
            Lorem ipsum dolor sit amet consectetur. Ipsum velit tincidunt
            tristique cras urna. Amet pellentesque erat dui lacus ultricies nec
            sit.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="py-[40px] sm:py-[60px] lg:py-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-x-48 lg:gap-y-10 w-full">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3 max-w-lg mx-auto lg:mx-0"
              >
                <img
                  src={blog.img}
                  alt="blog img"
                  className="w-full h-[200px] sm:h-[250px] lg:h-auto object-cover"
                />

                <h1 className="font-cormorantGaramond max-w-lg font-[400] text-[24px] sm:text-[32px] lg:text-[48px] leading-[110%] lg:leading-[100%] tracking-wide uppercase">
                  {blog.title}
                </h1>

                <div className="space-y-2">
                  <h1>
                    <span className="font-[300] text-[18px] sm:text-[24px] lg:text-[28px] font-cormorantGaramond leading-[100%]">
                      Date:
                    </span>
                    <span className="font-dancingScript font-[400] text-[18px] sm:text-[20px] lg:text-[24px] tracking-wide text-[#BBA085]">
                      {' '}
                      {blog.date}
                    </span>
                  </h1>
                  <h1>
                    <span className="font-[300] text-[18px] sm:text-[24px] lg:text-[28px] font-cormorantGaramond leading-[100%]">
                      Category:
                    </span>
                    <span className="font-dancingScript font-[400] text-[18px] sm:text-[20px] lg:text-[24px] tracking-wide text-[#BBA085]">
                      {' '}
                      {blog.category}
                    </span>
                  </h1>
                </div>

                <p className="font-cormorantGaramond max-w-xl font-[300] text-[18px] sm:text-[24px] lg:text-[28px] leading-[120%] lg:leading-[100%] tracking-wide">
                  {blog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
