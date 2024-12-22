"use client";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Page = () => {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <div>
      <Container className="py-3">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} href="/" className="uppercase bebas-neue leading-[0.0625rem] text-[2rem]">
            robert garcia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto divide-x-2 divide-gray-200">
              {navItems.map((navItem, index) => {
                return (
                  <Link className="px-3 manrope-bold text-black " href={navItem.path} key={index} passHref>
                    {navItem.name}
                  </Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Page;
