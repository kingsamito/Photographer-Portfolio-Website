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
      <section className="py-[100px] mx-auto max-w-7xl px-5">
        <div className="space-y-4">
          <h3 className="text-center text-[28px] font-[500] leading-[50px] tracking-wider uppercase font-raleway text-[#BBA085]">
            BLOG
          </h3>
          <h1 className="font-[400] text-[64px] font-cormorantGaramond leading-[100%] text-center text-[#5B5B5B]">
            LATEST STORIES
          </h1>
          <p className="pt-5 max-w-2xl mx-auto font-[300] text-[28px] font-cormorantGaramond leading-[100%] tracking-wide text-center text-[#5B5B5B]">
            Lorem ipsum dolor sit amet consectetur. Ipsum velit tincidunt
            tristique cras urna. Amet pellentesque erat dui lacus ultricies nec
            sit.
          </p>
        </div>

        <div className="py-[90px]">
          <div className="grid grid-cols-2 gap-x-48 gap-y-10 w-full">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <img src={blog.img} alt="blog img" />

                <h1 className="font-cormorantGaramond max-w-lg font-[400] text-[48px] leading-[100%] tracking-wide uppercase">
                  {blog.title}
                </h1>
                <h1>
                  <span className="font-[300] text-[28px] font-cormorantGaramond leading-[100%]">
                    Date:
                  </span>
                  <span className="font-dancingScript font-[400] text-[24px] tracking-wide text-[#BBA085]">
                    {' '}
                    {blog.date}
                  </span>
                </h1>
                <h1>
                  <span className="font-[300] text-[28px] font-cormorantGaramond leading-[100%]">
                    Category:
                  </span>
                  <span className="font-dancingScript font-[400] text-[24px] tracking-wide text-[#BBA085]">
                    {' '}
                    {blog.category}
                  </span>
                </h1>
                <p className="font-cormorantGaramond max-w-xl font-[300] text-[28px] leading-[100%] tracking-wide">
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
