import React from "react"
import styled from "styled-components"
import Image from "react-bootstrap/Image"
import HotelsModal from "../components/assets/HotelsModal"
import Layout from "../components/layout/Layout"
import StyledSearch from "../components/assets/StyledSearch"
import HotelsMapModal from "../components/assets/GoogleMapsModal"

const StyledHotelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 269px;
  background-color: #4c91b7;
  margin-bottom: 10px;
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledImg = styled(Image)`
  height: 225px;
  width: 300px;
  margin: 20px;
  object-fit: cover;
  @media (max-width: 992px) {
    margin: 10px;
  }
  @media (max-width: 767px) {
  }
`
const StyledHotelInfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  @media (max-width: 992px) {
    width: 90%;
    margin: 10px;
  }
`
const StyledHotelHeader = styled.h1`
  text-align: center;
  color: white;
  font-family: "Open sans", serif;
  margin-top: -10px;
  margin-bottom: 0px;
  font-size: 36px;
  @media (max-width: 767px) {
    font-size: 26px;
  }
`
const StyledHotelLocation = styled.h3`
  text-align: center;
  color: white;
  font-family: "Open sans", serif;
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
const StyledHotelParagraph = styled.p`
  color: white;
  font-family: "Open sans", serif;
  font-size: 16px;
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
const StyledHotelRating = styled.p`
  color: white;
  font-family: "Open sans", serif;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
`
const StyledHotelStarContainer = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 767px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
`
const StyledImgStars = styled(Image)`
  height: 22px;
  width: auto;
  margin: 0px;
  @media (max-width: 767px) {
    height: 16px;
  }
`

const StyledButton = styled.button`
  font-family: "Open sans", serif;
  box-shadow: 1px 1px 2px black;
  background-color: #039ccc;
  border: solid;
  border-width: 2px;
  border-color: #fec406;
  border-radius: 3px;
  color: white;
  padding: 0px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #4c91b7;
    text-decoration: none !important;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-left: 0px !important;
  }
`

const StyledOpenModalButton = styled(StyledButton)`
  position: absolute;
  bottom: 0px;
  right: 0px;
`
const StyledOpenMapModalButton = styled(StyledOpenModalButton)`
  right: 150px;
`
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
export default class SelectedHotel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleMapClick(selectedHotel) {
    this._mapModal.toggle(selectedHotel)
    console.log(selectedHotel)
  }
  handleClick(selectedHotel) {
    this._modal.toggle(selectedHotel)
  }

  render() {
    if (this.props.location.state) {
    const starImage = [
      [],
      [require("../components/img/1_Star.png")],
      [require("../components/img/2_Star.png")],
      [require("../components/img/3_Star.png")],
      [require("../components/img/4_Star.png")],
      [require("../components/img/5_Star.png")],
      [require("../components/img/6_Star.png")],
    ]
    let selectedHotel = this.props.location.state.selectedHotel
    return (
      <>
        <Layout>
          <StyledSearch />
          <StyledContainer>
            <HotelsModal
              ref={HotelsModal => {
                this._modal = HotelsModal
              }}
            />
            <HotelsMapModal
              ref={HotelsMapModal => {
                this._mapModal = HotelsMapModal
              }}
            />

            <StyledHotelContainer>
              <StyledImg
                src={this.props.location.state.selectedHotel.hotelImgUrl}
                alt="Image of a hotel"
                fluid
              />
              <StyledHotelInfoContainer>
                <StyledHotelHeader>
                  {this.props.location.state.selectedHotel.hotelName}
                </StyledHotelHeader>
                <StyledHotelLocation>
                  ${this.props.location.state.selectedHotel.price}
                </StyledHotelLocation>
                <StyledHotelStarContainer>
                  <StyledImgStars
                    src={
                      starImage[
                        this.props.location.state.selectedHotel.hotelStars
                      ]
                    }
                    alt="Hotel Stars"
                    fluid
                  />
                </StyledHotelStarContainer>
                <StyledHotelParagraph>
                  {this.props.location.state.selectedHotel.hotelDescription}
                </StyledHotelParagraph>
                <StyledHotelRating>
                  Self Catering:{" "}
                  {this.props.location.state.selectedHotel.selfCatering}
                </StyledHotelRating>
                <StyledOpenMapModalButton
                  onClick={this.handleMapClick.bind(this, selectedHotel)}
                >
                  Map
                </StyledOpenMapModalButton>
                <StyledOpenModalButton
                  onClick={this.handleClick.bind(this, selectedHotel)}
                >
                  Send Enquiry
                </StyledOpenModalButton>
              </StyledHotelInfoContainer>
            </StyledHotelContainer>
          </StyledContainer>
        </Layout>
      </>
    )
  }
    return `null`
  }

}
