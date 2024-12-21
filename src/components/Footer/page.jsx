import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import SocialBtn from "../utlis/SocialBtn"
import ClickBtn from "../utlis/ClickBtn";
import Input from "../utlis/Input";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


export default function page() {
  return (
    <div>
      <Container fluid className="w-full text-white bg-[#000000] py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="footerLeftContent">
                <h2 className="bebas-neue text-[4.75rem] uppercase">Let’s connect</h2>
                <p className="manrope-light py-1">Connect Through Email at
                  <Link className="underline decoration-1 underline-offset-6 decoration-[#D3E97A] px-2" href="/contact-us">
                    robertgarcia@gmail.com
                  </Link>
                </p>
                <p className="manrope-light py-1">For more info, here’s my
                  <Link className="underline decoration-1 underline-offset-6 decoration-[#D3E97A] px-2" href="/contact-us">
                    resume
                  </Link>
                </p>
              </div>
              <div className="socialBtn gap-2 flex">
                <SocialBtn
                  IconComponent={<FaGithub />}
                />
                <SocialBtn
                  IconComponent={<BsTwitterX />}
                />
                <SocialBtn
                  IconComponent={<FaLinkedinIn />}
                />
                <SocialBtn
                  IconComponent={<SiInstagram />}
                />
              </div>
            </Col>
            <Col lg={6}>
              <Input />
              <ClickBtn
                BtnText={"Submit"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
