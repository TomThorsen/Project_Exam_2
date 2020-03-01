import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  background-color: #4c91b7;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 20px;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
  padding-bottom: 5px;
  padding-top: 10px;
  @media (max-width: 992px) {
    width: 100% !important;
    padding-top: 84px;
  }
  text-align: center;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  font-size: 30px;
  margin-top: 0px;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`
const StyledLink = styled(Link)`
  font-family: "Open sans", serif;
  color: white;
  font-size: 23px;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 622px) {
    font-size: 18px;
  }
  &:hover {
    color: #fec406 !important;
    text-decoration: none !important;
  }
`
const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`
const StyledLinkDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export default () => (
  <>
    <StyledDiv>
      <StyledHeader>Admin Menu</StyledHeader>

      <StyledRow>
        <StyledLinkDiv>
          <StyledLink to="/admin_enquiries/" activeStyle={{ color: "#FEC406" }}>
            Customer Enquiries
          </StyledLink>

          <StyledLink to="/admin_messages/" activeStyle={{ color: "#FEC406" }}>
            Contact Messages
          </StyledLink>

          <StyledLink to="/admin_create/" activeStyle={{ color: "#FEC406" }}>
            Create
          </StyledLink>

          <StyledLink to="/" activeStyle={{ color: "#FEC406" }}>
            Log Out
          </StyledLink>
        </StyledLinkDiv>
      </StyledRow>
    </StyledDiv>
  </>
)
