import SkillCard from "./SkillCard";
import { Container } from "react-bootstrap";
import { FaHtml5, FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs, FaBootstrap, FaDocker, FaAws, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { motion } from "motion/react"
import "swiper/css";
import "swiper/css/pagination";

export default function ExtensiveSkill() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const SkillCardContent = [
    {
      title: "HTML & CSS",
      description: "The foundation of web development, enabling the creation of structured, visually appealing, and responsive web pages.",
      icon: <FaHtml5 size="3em" />,
    },
    {
      title: "JavaScript & TypeScript",
      description: "Powerful languages for building dynamic, interactive, and scalable web applications.",
      icon: <BiLogoTypescript size="3em" />,
    },
    {
      title: "React.js & Next.js",
      description: "Modern frameworks for building fast, scalable, and SEO-friendly single-page applications and websites.",
      icon: <RiReactjsFill size="3em" />,
    },
    {
      title: "Node.js & Express.js",
      description: "Efficient tools for building robust server-side applications and APIs using JavaScript.",
      icon: <FaNodeJs size="3em" />,
    },
    {
      title: "Tailwind CSS & Bootstrap",
      description: "Advanced CSS frameworks for designing modern, responsive, and customizable UI components.",
      icon: <FaBootstrap size="3em" />,
    },
    {
      title: "MongoDB & PostgreSQL",
      description: "Popular databases for managing structured and unstructured data efficiently.",
      icon: <DiMongodb size="3em" />,
    },
    {
      title: "Git & GitHub",
      description: "Essential tools for version control and collaboration in modern software development.",
      icon: <FaGithub size="3em" />,
    },
    {
      title: "Docker & Kubernetes",
      description: "Tools for containerization and orchestration, enabling scalable and portable software deployments.",
      icon: <FaDocker size="3em" />,
    },
    {
      title: "AWS & Azure",
      description: "Cloud platforms offering scalable infrastructure, storage, and advanced services for modern applications.",
      icon: <FaAws size="3em" />,
    },
  ];

  return (
    <>
      <Container fluid className="bg-gray-900 py-[10rem] px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="skillHeading py-[2rem] ps-[8rem]">
            <span className="manrope-bold text-white text-[1rem] uppercase">My Skills</span>
            <h1 className="bebas-neue text-[4.75rem] text-white">
              My extensive list of skills
            </h1>
          </div>
        </motion.div>

        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            }
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {SkillCardContent.map((skill, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="my-4"
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false }}
                variants={cardVariants}
              >
                <SkillCard
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end my-5 mx-5 gap-3">
          <button
            className="bg-[#D3E97A] rounded-full p-4 text-black shadow-md transition-all transform hover:scale-95 hover:shadow-lg active:shadow-sm"
            ref={navigationPrevRef}
          >
            <FaChevronLeft size="1.5em" />
          </button>
          <button
            className="bg-[#D3E97A] rounded-full p-4 text-black shadow-md transition-all transform hover:scale-95 hover:shadow-lg active:shadow-sm"
            ref={navigationNextRef}
          >
            <FaChevronRight size="1.5em" />
          </button>
        </div>
      </Container >
    </>
  );
}
