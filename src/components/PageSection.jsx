import styled from "styled-components";

const PageSection = ({
  leftOrient,
  text,
  visualSrc,
  srcHeight = "200px",
  srcWidth = "auto",
}) => {
  var srcStyle = {
    height: srcHeight,
    width: srcWidth,
  };
  return (
    <SectionContainer>
      {leftOrient ? (
        <SectionText>{text}</SectionText>
      ) : (
        <img src={visualSrc} style={srcStyle} />
      )}
      {leftOrient ? (
        <img src={visualSrc} style={srcStyle} />
      ) : (
        <SectionText>{text}</SectionText>
      )}
    </SectionContainer>
  );
};

export default PageSection;

const SectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: end;
  padding: 1rem 0;

  margin-bottom: 2rem;
`;

const SectionText = styled.p`
  margin: 0;
  text-align: center;

  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.8) 40%);

  padding: 1rem;
`;
