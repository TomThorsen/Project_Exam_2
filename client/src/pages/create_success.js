import React from "react"
import Layout from "../components/layout/Layout"
import AdminMenu from "../components/layout/AdminMenu"
import styled from "styled-components"

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
  font-family: "Open sans", serif;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 20px;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`

export default () => (
  <>
    <Layout>
      <AdminMenu />
      <StyledDiv>
        <StyledHeader>NEW ESTABLISHMENT CREATED</StyledHeader>
      </StyledDiv>
    </Layout>
  </>
)
