import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const SectionFourContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 80px;
  flex-direction: column;
  
`;

const Col12 = styled.div`
  flex: 1 0 100%;
  display:flex;
  justify-content:center;
  text-align :center

`;
const CardHolder = styled.div`
  flex: 1 0 100%;
  display:flex;
  justify-content:center;
`;

const BlockLevelElement = styled.div`
  margin-bottom: 20px;
`;

const BlockHeading = styled.h2`
  color: ${theme.colors.black};
`;

const BlockParagraph = styled.p`
  color: ${theme.colors.gray};
`;

const CardContainer = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
`;

const CardIcon = styled.div`
  margin-bottom: 10px;
`;

const CardHeading = styled.h4`
  color: ${theme.colors.primary};
`;

const CardParagraph = styled.p`
  color: ${theme.colors.gray};
`;

const LearnMoreButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${theme.colors.primary};
  color: #fff;
  cursor: pointer;
`;

const SectionFour = () => {
  return (
    <SectionFourContainer>
      <Col12>
        <BlockLevelElement>
          <BlockHeading>Explore Our Services</BlockHeading>
          <BlockParagraph>We are self-service data analytics software that lets you create visually.</BlockParagraph>
        </BlockLevelElement>
      </Col12>
      <CardHolder>
        <CardContainer>
          <CardIcon><img src="./images/icon-phone-message.png"/></CardIcon>
          
          <CardHeading>App Development</CardHeading>
          <CardParagraph>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</CardParagraph>
        </CardContainer>
        {/* Add more cards as needed */}
        <CardContainer>
        <CardIcon><img src="./images/icon-globe.png"/></CardIcon>
          <CardHeading>Web Designing</CardHeading>
          <CardParagraph>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</CardParagraph>
        </CardContainer>
        <CardContainer>
        <CardIcon><img src="./images/icon-pencil.png"/></CardIcon>
          <CardHeading>Graphic Designing</CardHeading>
          <CardParagraph>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</CardParagraph>
        </CardContainer>
        <CardContainer>
        <CardIcon><img src="./images/icon-laptop-marketing.png"/></CardIcon>
          <CardHeading>Digital Marketing</CardHeading>
          <CardParagraph>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</CardParagraph>
        </CardContainer>
      </CardHolder>
      <Col12>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </Col12>
    </SectionFourContainer>
  );
};

export default SectionFour;
