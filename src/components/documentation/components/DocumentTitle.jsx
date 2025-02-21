import styled from "styled-components";

const DocumentTitle = ({ level, id = "", children }) => {
  if (level === 1) {
    return <MainTitle id={id}>{children}</MainTitle>;
  }

  if (level === 2) {
    return <FirstSubtitle id={id}>{children}</FirstSubtitle>;
  }

  if (level === 3) {
    return <SecondSubtitle id={id}>{children}</SecondSubtitle>;
  }

  return <OtherSubtitle id={id}>{children}</OtherSubtitle>;
};

export default DocumentTitle;

const MainTitle = styled.h1`
  width: 100%;
  border-bottom: 1px solid #e1e1e1;

  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const FirstSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.8rem;
  border-bottom: 1px solid #e1e1e1;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SecondSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const OtherSubtitle = styled.h4`
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
