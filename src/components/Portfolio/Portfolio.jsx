import PortfolioCard from "./PortfolioCard"
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";

export default function Portfolio() {
  return (
    <>
      <Container fluid className="bg-gray-700">
        <Container className="py-[10rem]">
          <Row className="g-4">
            <Col lg={6}>
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
              <PortfolioCard />
            </Col>
            <Col lg={6}>
              <PortfolioCard />
            </Col>
            <Col className="offset-lg-6" lg={6}>
              <PortfolioCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
