import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const StyledContent = styled.div`
  flex: 1 0 auto;
`

export default ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </StyledLayout>
)
