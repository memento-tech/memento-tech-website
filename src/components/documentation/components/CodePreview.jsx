import styled from "styled-components";

const CodePreview = styled.div`
  width: calc(100% - 20px);
  background-color: black;

  box-sizing: border-box;
  padding: 10px;

  margin: 1rem 0 1rem 20px;

  @media screen and (max-width: 600px) {
    margin: 1rem 0;
    box-sizing: unset;
  }
`;

export default CodePreview;
