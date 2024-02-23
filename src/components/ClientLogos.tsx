// SectionThree.tsx
import React from 'react';
import styled from 'styled-components';

const SectionThreeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 80px;
`;

const GrayScaleImage = styled.img`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  margin: 10px;
`;

const ClientLogos = () => {
  return (
    <SectionThreeContainer>
      <GrayScaleImage  src="./images/Customerlogos.png" alt="Image 1" />
      {/* <GrayScaleImage src="image2-url" alt="Image 2" />
      <GrayScaleImage src="image3-url" alt="Image 3" />
      <GrayScaleImage src="image4-url" alt="Image 4" />
      <GrayScaleImage src="image5-url" alt="Image 5" /> */}
    </SectionThreeContainer>
  );
};

export default ClientLogos;
