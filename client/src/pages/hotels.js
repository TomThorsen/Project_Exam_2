import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import HotelsFetcher from "../components/assets/HotelsFetcher"

const StyledContainer = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export default class Hotels extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <StyledSearch />
          <StyledContainer>
            <HotelsFetcher />
          </StyledContainer>
        </Layout>
      </>
    )
  }
}
