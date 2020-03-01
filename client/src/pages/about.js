import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { Row, Col} from 'reactstrap'
import Image from 'react-bootstrap/Image'
import Banner from "../components/img/banner_1.png"
import Logo from "../components//img/logo_white.png"

const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 992px) {
      width: 100%;
  }
`

const StyledBanner = styled(Image)`
  width: 100%;
  height: auto;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 10px;
  text-align: center;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`
const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #039CCC;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
const StyledTopContainer = styled(StyledTextContainer)`
  margin-top: 0;
`
const StyledLogo = styled.img`
  width: 280px;
  height: auto;
  padding-top: 20px;
  @media (max-width: 767px) {
    width: 180px;
  }
`
const StyledParagraph = styled.p`
  font-family: "Open sans", serif;
  color: white;
  text-align: center;
  font-size: 18px;
  width: 780px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
const StyledInfoContainer = styled(StyledTextContainer)`
  background-color: #4C91B7;
  margin-top: 0px;
    justify-content: space-between;
`
const StyledRow = styled(Row)`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
`
const StyledContactText = styled.p`
  font-family: "Open sans", serif;
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0;
`
export default () => (
  <>
    <Layout>
      <StyledSearch />
      <StyledDiv>
        <StyledTopContainer>
          <StyledHeader>ABOUT US</StyledHeader>
        </StyledTopContainer>
        <StyledBanner src={Banner} alt="Image of Bergen harbor" fluid />
        <StyledTextContainer>
          <StyledLogo src={Logo} alt="website logo" />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            volutpat sit amet lacus eget commodo. Cras est nibh, vehicula nec
            vehicula quis, rutrum eget enim.
          </StyledParagraph>
        </StyledTextContainer>
        <StyledInfoContainer>
          <StyledHeader>CONTACT INFORMATION</StyledHeader>
          <StyledRow>
            <Col xs="6" sm="6">
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
            </Col>
            <Col xs="6" sm="6">
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
              <StyledContactText>Contact information</StyledContactText>
            </Col>
          </StyledRow>
        </StyledInfoContainer>
      </StyledDiv>
    </Layout>
  </>
)
