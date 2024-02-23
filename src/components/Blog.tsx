// SectionSix.tsx
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const SectionSixContainer = styled.section`
  padding: 20px 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: ${theme.colors.black};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Card = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 10px;
`;

const CardImage = styled.img`
  width:366px;
  height: 450px;
  margin-bottom: 10px;
`;

const LearnMoreButton = styled.button`
  padding: 10px 20px;
  border: 2px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  color: #fff;
  cursor: pointer;
  margin:auto;
`;
const MiniCard = styled.div`
width:322px;
height:233px;
top:-92px;
left:81px;
position: relative;
background-color: ${theme.colors.white};
padding: 8px;
`
const Icon = styled.img`
  position: absolute;
  right: 10px; 
`;

const SectionSix = () => {
  return (
    <SectionSixContainer>
      <Heading>Our Blogs</Heading>
      <CardContainer>
        <Card>
          <CardImage src="./images/blog1.png" alt="Blog 1" />
          <MiniCard>
            <h3>Realtime analytics</h3>
            <p>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. </p>
            <Icon src="./images/icon-arrow-right-black.png" alt="Blog 1" />

          </MiniCard>

        </Card>
        <Card>
          <CardImage src="./images/blog1.png" alt="Blog 1" />
          <MiniCard>
            <h3>Realtime analytics</h3>
            <p>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. </p>
            <Icon src="./images/icon-arrow-right-black.png" alt="Blog 1" />

          </MiniCard>   
          
               </Card>
        <Card>
          <CardImage src="./images/blog1.png" alt="Blog 1" />
          <MiniCard>
            <h3>Realtime analytics</h3>
            <p>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. </p>
            <Icon src="./images/icon-arrow-right-black.png" alt="Blog 1" />

          </MiniCard>        </Card>

      </CardContainer>
      <LearnMoreButton>View All Posts</LearnMoreButton>

    </SectionSixContainer>
  );
};

export default SectionSix;
