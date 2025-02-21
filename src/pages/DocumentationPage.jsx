import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import styled from "styled-components";
import DoubleArrowIcon from "../components/icons/DoubleArrowIcon";
import { navigationLinks } from "../data/project-backofficeStarterNavigation";
import BackofficeStarterDocumentation from "../components/documentation/BackofficeStarterDocumentation";
import { Link } from "react-scroll";

const DocumentationPage = () => {
  const [sideBarVisible, setSideBarVisible] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    setProjectId(searchParams.get("project"));
  }, [searchParams]);

  const getNavigationLinks = (links, topIndex, level) => {
    return links.map((link, index) => {
      var indexPrefix = "";

      if (topIndex !== null) {
        indexPrefix = topIndex + ".";
      }

      var currentIndex = index + 1;

      return (
        <>
          <StyledLink
            $level={level}
            key={indexPrefix + currentIndex}
            to={link.href}
            duration={500}
            smooth={true}
            spy={true}
            containerId="documentContainer"
          >
            {indexPrefix}
            {currentIndex}. {link.title}
          </StyledLink>
          {link.subtitles &&
            getNavigationLinks(
              link.subtitles,
              indexPrefix + currentIndex,
              level + 1
            )}
        </>
      );
    });
  };

  return (
    <PageContainer>
      <MainContainer>
        <Sidebar className={sideBarVisible && "visible"}>
          <SideBarCloseIconContainer>
            <DoubleArrowIcon
              rotate={sideBarVisible ? "0deg" : "180deg"}
              onClick={() => setSideBarVisible(!sideBarVisible)}
            />
          </SideBarCloseIconContainer>
          {sideBarVisible && (
            <>
              <SideBarTop>
                <ProjectName>PROJECT: {projectId}</ProjectName>
              </SideBarTop>
              {navigationLinks && (
                <NavLinks>
                  {getNavigationLinks(navigationLinks, null, 0)}
                </NavLinks>
              )}
            </>
          )}
        </Sidebar>
        <Content id="documentContainer">
          <BackofficeStarterDocumentation />
        </Content>
      </MainContainer>
    </PageContainer>
  );
};

export default DocumentationPage;

const PageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  background-color: #13131397;
`;

const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 4rem);

  .visible {
    width: 40%;
  }
`;

const Sidebar = styled.div`
  position: relative;
  width: 20px;
  background: #2c3e50;
  color: white;
  padding: 20px;
  overflow-y: auto;
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

  padding-left: ${(props) => "calc(10px * " + props.$level + ")"};

  cursor: pointer;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;

  text-align: justify;
  text-justify: inter-word;
`;
