import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import Logo from "../components//img/logo_white.png"

const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  background-color: #4c91b7;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 20px;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`
const StyledTextDiv = styled.div`
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
const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #039ccc;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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
export default () => (
  <>
    <Layout>
      <StyledSearch />
      <StyledDiv>
        <StyledHeader>THANK YOU FOR YOUR MESSAGE</StyledHeader>
        <StyledParagraph>
          We will get back to you as soon as possible!
        </StyledParagraph>
      </StyledDiv>
      <StyledTextDiv>
        <StyledTextContainer>
          <StyledLogo src={Logo} alt="website logo" />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            volutpat sit amet lacus eget commodo. Cras est nibh, vehicula nec
            vehicula quis, rutrum eget enim.
          </StyledParagraph>
        </StyledTextContainer>
      </StyledTextDiv>
    </Layout>
  </>
)
