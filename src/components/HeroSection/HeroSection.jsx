"use client";
import { Container, Row, Col } from "react-bootstrap"
import SocialBtn from './../utlis/SocialBtn';
import ClickBtn from "../utlis/ClickBtn";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "motion/react"
import Image from "next/image";
import devPic from "@/components/assets/images/devPic.png"


export default function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <Row>
            <Col className="flex flex-col items-center justify-center" lg={6}>
              <div className="introductionText">
                <h1 className="uppercase bebas-neue text-[6.315rem] leading-[6rem]">hi, i am
                  robert garcia.</h1>
                <p className="text-[1.125rem] text-[#949494] py-3 manrope-semibold">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
                <div className="py-2">
                  <ClickBtn
                    BtnText={"Contact Me"}
                    noMargin
                  />
                </div>
                <div className="socialLinks flex gap-2">
                  <SocialBtn
                    IconComponent={<FaGithub size="1.5em" />}
                  />
                  <SocialBtn
                    IconComponent={<BsTwitterX size="1.5em" />}
                  />
                  <SocialBtn
                    IconComponent={<FaLinkedinIn size="1.5em" />}
                  />
                  <SocialBtn
                    IconComponent={<SiInstagram size="1.5em" />}
                  />
                </div>
              </div>
            </Col>
            <Col className="flex flex-col items-center justify-center" lg={6}>
              <div className="bg-gray-200 rounded-full overflow-hidden object-cover max-w-fit h-auto my-10">
                <Image
                  src={devPic}
                  priority="true"
                  alt="Dev Profile Picture"
                  className="h-auto"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div >
    </>
  )
}
