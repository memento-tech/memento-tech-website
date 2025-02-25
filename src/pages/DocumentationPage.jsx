import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styled from "styled-components";
import ReadmeViewer from "../components/ReadmeViewer";
import projectsData from "../data/projectsData";
import LoadingSpinner from "../components/LoadingSpinner";

const DocumentationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projectData, setProjectData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var foundData = projectsData.filter((data) =>
      data.link.endsWith("project=" + searchParams.get("project"))
    )[0];

    if (foundData) {
      setProjectData(foundData);
    } else {
      setProjectData(null);
    }

    setTimeout(() => setLoading(false), 1000);
  }, [searchParams]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }
  if (!projectData) {
    return (
      <PageContainer>
        <NotFoundProjectContainer>
          <p>Project documentation not found</p>
          <Link to={"/projects"}>Back to projects</Link>
        </NotFoundProjectContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <MainContainer>
        <ReadmeViewer projectData={projectData} />
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

  position: relative;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  height: calc(100vh - 4rem);

  .visible {
    width: 40%;

    @media screen and (max-width: 600px) {
      width: 100%;
      min-height: 100%;
      background: #2c3e50;
    }
  }
`;

const NotFoundProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  a {
    color: white;
  }
`;
