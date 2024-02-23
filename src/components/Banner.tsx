// SectionOne.tsx
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const SectionOneContainer = styled.section`
  display: flex;
  padding: 40px 80px;
`;

const LeftCol = styled.div`
  flex: 1;
`;

const RightCol = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${theme.colors.black};
`;

const HeadingSpan = styled.span`
  color: ${theme.colors.primary};
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${theme.colors.primary};
  color: #fff;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Banner = () => {
  return (
    <SectionOneContainer>
      <LeftCol>
        <Heading>Building Brands in the <HeadingSpan>Digital Age</HeadingSpan></Heading>
        <Paragraph>Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.</Paragraph>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </LeftCol>
      <RightCol>
        <Image src="./images/banner.png" alt="Image" />
      </RightCol>
    </SectionOneContainer>
  );
};

export default Banner;
