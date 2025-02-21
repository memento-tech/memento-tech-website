import { useState } from "react";

const { default: styled } = require("styled-components");

const ImagePreview = ({ image, width, widthOnClick = "100%" }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <ImageStyled
      src={image}
      $width={clicked ? widthOnClick : width}
      onClick={() => setClicked(!clicked)}
    />
  );
};

export default ImagePreview;

const ImageStyled = styled.img`
  width: ${(props) => (props.$width ? props.$width : "100%")};
  align-self: center;
  justify-self: center;

  margin: 1rem;

  cursor: pointer;
`;
