// // Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: black;
  color: #fff;
`;

const FooterHead = styled.p`
  font-weight: bold;
  margin-bottom: 30px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MenuItem = styled.div`
   
`;
const Col4 = styled.div`
   flex: 2;
   margin-right: 40px;
`;
const Col8 = styled.div`
   flex: 3;
`;
const Colrow = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 0 40px;
`;
const Colsrow = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding-top: 20px;
`;
const Col12 = styled.div`
   flex: 1;
`;

const CompanyInfo = styled.p`
   
`;
const Image = styled.img`
   max-width: 100%;
   height: auto;
   margin: -10px 20px 0 0;
`;

const Footertext = styled.p`
  font-weight: regular;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MenuList>
        <Col4>
          <MenuItem>
            <FooterHead>Digital agency</FooterHead>
            <CompanyInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</CompanyInfo>
            <Colsrow>
                <Image src="./images/twitter.png" />
                <Image src="./images/facebook.png" />
                <Image src="./images/instagram.png" />
            </Colsrow>  
          </MenuItem>
        </Col4>
        <Col8>
          <Colrow>
            <Col12>
              <MenuItem>
                <FooterHead>Company</FooterHead>
                <Footertext>About</Footertext>
                <Footertext>Features</Footertext>
                <Footertext>Works</Footertext>
                <Footertext>Careers</Footertext>
              </MenuItem>
            </Col12>
            <Col12>
              <MenuItem>
                <FooterHead>Help</FooterHead>
                <Footertext>Customer Support</Footertext>
                <Footertext>Delivery Details</Footertext>
                <Footertext>Terms & Conditions</Footertext>
                <Footertext>Privacy Policy</Footertext>
              </MenuItem>
            </Col12>
            <Col12>
              <MenuItem>
                <FooterHead>Resources</FooterHead>
                <Footertext>Free eBooks</Footertext>
                <Footertext>How to -Blog</Footertext>
              </MenuItem>
            </Col12>
          </Colrow>
        </Col8>
      </MenuList>  
    </FooterContainer>
  );
};

export default Footer;
