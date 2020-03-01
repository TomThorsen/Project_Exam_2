import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { Container, Row, Col } from "reactstrap"
import Image from "react-bootstrap/Image"
import Banner from "../components/img/banner_1.png"
import Logo from "../components//img/logo_white.png"
import data from "../../public/establishments.json"
import { Link } from "gatsby"

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
const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #039ccc;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
const StyledContainer = styled(Container)`
  margin: 0;
  padding: 0;
  width: 100% !important;
`
const StyledRow = styled(Row)`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
`
const StyledColumn = styled(Col)`
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 767px) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-bottom: 10px;
  }
`
const StyledImg = styled(Image)`
  box-shadow: 1px 3px 3px black;
  cursor: pointer;
  object-fit: cover;
  width: 600px;
  height: 200px;
  &:hover {
    box-shadow: 0px 0px 0px black;
    filter: brightness(100%);
  }
  filter: brightness(90%);
`
const StyledImgText = styled.p`
  font-family: "Open sans", serif;
  position: absolute;
  top: 2px;
  left: 15px;
  font-size: 26px;
  color: white;
  text-shadow: 1px 1px 1px black;
`
const StyledImageLink = styled(Link)``
const StyledImgContainer = styled.div`
  position: relative;
`

let randarr = []
while (randarr.length < 5) {
  let r = Math.floor(Math.random() * data.length - 1) + 1
  if (randarr.indexOf(r) === -1) randarr.push(r)
}
export default class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "React",
      selectedHotel: "",
    }
  }
  render() {
    return (
      <>
        <Layout>
          <StyledSearch />
          <StyledDiv>
            <StyledBanner src={Banner} alt="Image of Bergen harbor" fluid />
            <StyledTextContainer>
              <StyledLogo src={Logo} alt="website logo" />
              <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                volutpat sit amet lacus eget commodo. Cras est nibh, vehicula
                nec vehicula quis, rutrum eget enim.
              </StyledParagraph>
            </StyledTextContainer>
            <StyledContainer>
              <StyledRow>
                <StyledColumn md={4} xs={12}>
                  <StyledImageLink
                    to={"/selectedhotel/"}
                    state={{
                      selectedHotel: data[randarr[0]],
                    }}
                  >
                    <StyledImgContainer>
                      <StyledImg
                        src={data[randarr[0]].hotelImgUrl}
                        alt="Image of a hotel"
                        fluid
                      />
                      <StyledImgText>
                        {data[randarr[0]].hotelName}
                      </StyledImgText>
                    </StyledImgContainer>
                  </StyledImageLink>
                </StyledColumn>
                <StyledColumn md={4} xs={12}>
                  <StyledImageLink
                    to={"/selectedhotel/"}
                    state={{
                      selectedHotel: data[randarr[1]],
                    }}
                  >
                    <StyledImgContainer>
                      <StyledImg
                        src={data[randarr[1]].hotelImgUrl}
                        alt="Image of a hotel"
                        fluid
                      />
                      <StyledImgText>
                        {data[randarr[1]].hotelName}
                      </StyledImgText>
                    </StyledImgContainer>
                  </StyledImageLink>
                </StyledColumn>
                <StyledColumn md={4} xs={12}>
                  <StyledImageLink
                    to={"/selectedhotel/"}
                    state={{
                      selectedHotel: data[randarr[2]],
                    }}
                  >
                    <StyledImgContainer>
                      <StyledImg
                        src={data[randarr[2]].hotelImgUrl}
                        alt="Image of a hotel"
                        fluid
                      />
                      <StyledImgText>
                        {data[randarr[2]].hotelName}
                      </StyledImgText>
                    </StyledImgContainer>
                  </StyledImageLink>
                </StyledColumn>
              </StyledRow>
              <StyledRow>
                <StyledColumn md={6} xs={12}>
                  <StyledImageLink
                    to={"/selectedhotel/"}
                    state={{
                      selectedHotel: data[randarr[3]],
                    }}
                  >
                    <StyledImgContainer>
                      <StyledImg
                        src={data[randarr[3]].hotelImgUrl}
                        alt="Image of a hotel"
                        fluid
                      />
                      <StyledImgText>
                        {data[randarr[3]].hotelName}
                      </StyledImgText>
                    </StyledImgContainer>
                  </StyledImageLink>
                </StyledColumn>
                <StyledColumn md={6} xs={12}>
                  <StyledImageLink
                    to={"/selectedhotel/"}
                    state={{
                      selectedHotel: data[randarr[4]],
                    }}
                  >
                    <StyledImgContainer>
                      <StyledImg
                        src={data[randarr[4]].hotelImgUrl}
                        alt="Image of a hotel"
                        fluid
                      />
                      <StyledImgText>
                        {data[randarr[4]].hotelName}
                      </StyledImgText>
                    </StyledImgContainer>
                  </StyledImageLink>
                </StyledColumn>
              </StyledRow>
            </StyledContainer>
          </StyledDiv>
        </Layout>
      </>
    )
  }
}
