import { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import DoubleArrowIcon from "./icons/DoubleArrowIcon";

const ReadmeNavigation = ({ projectId = null, navigationLinks }) => {
  const [sideBarVisible, setSideBarVisible] = useState(true);

  const getNavigationLinks = (links) => {
    return links.map((link) => {
      return (
        <div key={link.id}>
          <StyledLink
            // @ts-ignore
            $level={link.level - 1}
            to={link.id}
            duration={500}
            smooth={true}
            spy={true}
            className={link.id}
            containerId="markdown-body"
            onClick={() => {
              if (window.innerWidth < 600) {
                setSideBarVisible(false);
              }
            }}
          >
            {link.title}
          </StyledLink>
          {link.subtitles && getNavigationLinks(link.subtitles)}
        </div>
      );
    });
  };

  return (
    <Sidebar className={sideBarVisible && "visible"}>
      <SideBarCloseIconContainer>
        <DoubleArrowIcon
          rotate={sideBarVisible ? "0deg" : "180deg"}
          onClick={() => setSideBarVisible(!sideBarVisible)}
        />
      </SideBarCloseIconContainer>
      {sideBarVisible && (
        <>
          {projectId && (
            <SideBarTop>
              <ProjectName>PROJECT: {projectId}</ProjectName>
            </SideBarTop>
          )}
          <NavLinks>{getNavigationLinks(navigationLinks)}</NavLinks>
        </>
      )}
    </Sidebar>
  );
};

export default ReadmeNavigation;

const Sidebar = styled.div`
  position: relative;
  width: 20px;
  background: #2c3e50;
  color: white;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 0;

    height: 3rem;
    width: 100%;

    background: linear-gradient(
      90deg,
      rgba(47, 69, 129, 0.7665266790309874) 0%,
      rgba(36, 91, 150, 0.9710084717480743) 45%,
      rgba(109, 158, 218, 0.906582701439951) 100%
    );
  }
`;

const SideBarTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SideBarCloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    rotate: -90deg;
  }
`;

const ProjectName = styled.h1`
  font-size: 1rem;
  font-weight: 400;

  text-transform: capitalize;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;

  a:hover {
    font-size: 1.1rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 0;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: start;

  padding-left: ${(props) =>
    "calc(10px * " +
    // @ts-ignore
    props.$level +
    ")"};

  cursor: pointer;
`;
