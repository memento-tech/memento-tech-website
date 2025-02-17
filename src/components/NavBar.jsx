// @ts-nocheck
import styled from "styled-components";
import mTechLogo from "../assets/m-tech-logo-white-empty.png";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBarHolder />
      <NavBarContainer scrolled={scrolled}>
        <Link to={"/memento-tech-website"}>
          <NavBarLogo src={mTechLogo} />
        </Link>
        <LinksContainer>
          <NavBarLink to={"/memento-tech-website"}>Home</NavBarLink>
          <NavBarLink to={"/memento-tech-website/projects"}>
            Projects
          </NavBarLink>
          <NavBarLink to={"/memento-tech-website/blog"}>Blog</NavBarLink>
          <NavBarLink to={"/memento-tech-website/contact-us"}>
            Contact Us
          </NavBarLink>
        </LinksContainer>
      </NavBarContainer>
    </>
  );
};

export default NavBar;

const NavBarHolder = styled.div`
  width: 100%;
  height: 4rem;
`;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;

  background: ${({ scrolled }) =>
    scrolled
      ? "linear-gradient(90deg, rgba(47,69,129,1) 0%, rgba(36,91,150,1) 45%, rgba(109,158,218,1) 100%)"
      : "#0d11170"};
  border-bottom: ${({ scrolled }) => (scrolled ? "none" : "2px solid #ffffff")};

  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding: 0 0.5rem;
  padding-bottom: ${({ scrolled }) => (scrolled ? "2px" : "0")};

  z-index: 1000;
`;

const NavBarLogo = styled.img`
  max-height: 50%;
  max-width: 50px;
  border-radius: 8px;
  margin: 0 10px;
`;

const LinksContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const NavBarLink = styled(Link)`
  color: white;
  padding: 0 1rem;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    color: #ffffff;
    font-weight: 800;
  }
`;
