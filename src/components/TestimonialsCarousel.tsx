// TestimonialsCarousel.tsx
import React from 'react';
import styled from 'styled-components';

const TestimonialsCarouselContainer = styled.section`
  padding: 40px 80px;
`;

const TestimonialItem = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-width: 304px;
  height: 450px;
  margin-left: 180px;
  top:1708px;
  left:149px;
`;

const Text = styled.p`
  flex: 1;
  padding-left: 150px;
  width:756px;
  height:90px;
  font-size:20px !important
`;
const Icon = styled.img`
  position: absolute;
 margin-left:148px;
`;


const TestimonialsCarousel = () => {
  return (
    <TestimonialsCarouselContainer>
      <TestimonialItem>
      <Icon src="./images/icon-quote.png" alt="Client" />
        <Image src="./images/testimonial-user.png" alt="Client" />
        <div>
        <Text>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”</Text>
        <Text>David Calathan - Director of Design Operations, New York</Text> 
        </div>

      </TestimonialItem>
    </TestimonialsCarouselContainer>
  );
};

export default TestimonialsCarousel;
