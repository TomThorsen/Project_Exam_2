import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"
import Logo from "../img/logo_white.png"
import { Link } from "gatsby"

const StyledFooter = styled.div`
  height: 112px;
  flex-shrink: 0;
  background-color: #039ccc;
  margin-top: 30px;
`
const StyledFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLogo = styled.img`
  width: 201px;
  height: auto;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
`
const StyledLink = styled(Link)`
  color: white;
  font-size: 30px;
  font-family: "Open sans", serif;
  margin-top: -32px;
  padding-left: 30px;
  padding-right: 30px;
  &:hover {
    color: #fec406 !important;
    text-decoration: none !important;
  }
  @media (max-width: 992px) {
    display: none;
  }
`
const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
`
const StyledCopyrightText = styled.p`
  font-family: "Open sans", serif;
  color: white;
  font-size: 14px;
`
export default () => (
  <StyledFooter>
    <StyledFooterContent>
      <StyledLink to="/" activeStyle={{ color: "#FEC406" }}>
        HOME
      </StyledLink>
      <StyledLink to="/hotels/" activeStyle={{ color: "#FEC406" }}>
        HOTELS
      </StyledLink>
      <StyledLogoContainer>
        <StyledLogo src={Logo} alt="website logo" />
        <StyledCopyrightText>©2019 Holidaze Inc</StyledCopyrightText>
      </StyledLogoContainer>
      <StyledLink to="/contact/" activeStyle={{ color: "#FEC406" }}>
        CONTACT
      </StyledLink>
      <StyledLink to="/about/" activeStyle={{ color: "#FEC406" }}>
        ABOUT
      </StyledLink>
    </StyledFooterContent>
  </StyledFooter>
)
