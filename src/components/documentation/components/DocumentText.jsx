const { default: styled } = require("styled-components");

const DocumentText = styled.p`
  margin: 0;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export default DocumentText;
