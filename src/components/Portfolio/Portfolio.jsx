import PortfolioCard from "./PortfolioCard"
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react"

export default function Portfolio() {

  const projectCardContent = [
    {
      id: 1,
      title: "E-Commerce Project",
      description: "A fully functional e-commerce platform with a modern user interface and secure payment integration.",
      tag: ["E-Commerce", "React"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, blogs, and achievements with a sleek and responsive design.",
      tag: ["Web Development", "React"],
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An interactive dashboard for managing multiple social media accounts and analyzing performance metrics.",
      tag: ["App Development"],
    },
  ]

  return (
    <>
      <Container fluid className="bg-gray-700">
        <Container className="py-[10rem]">
          <Row className="gx-5 gy-2">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="portfolioHeading mb-5">
                  <p className="manrope-bold text-white text-[1rem] uppercase leading-[3rem]">My Portfolio</p>
                  <h1 className="bebas-neue text-[4.75rem] text-white leading-[4.3rem]">
                    My extensive list of skills
                  </h1>
                  <Link href="/portfolio">
                    <span className="flex manrope-bold text-[1.2rem] text-white leading-[3rem] tracking-wider
                  hover:underline underline-offset-8 decoration-2">Browse All Projects
                      <FaArrowRight size="1em" className="m-3" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </Col>
            {projectCardContent.map((card, index) => (
              <Col lg={6}
                md={6}
                className={`${index === 1 ? "lg:col-span-12 bg-highlight" : ""}`}
                key={index}>
                <PortfolioCard
                  id={card.id}
                  tags={card.tag}
                  projectTitle={card.title}
                  projectDesc={card.description}
                />
              </Col>
            ))}

          </Row>
        </Container>
      </Container>
    </>
  )
}
