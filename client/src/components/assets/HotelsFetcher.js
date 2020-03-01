import React from "react"
import styled from "styled-components"
import data from "../../../public/establishments.json"
import HotelsModal from "./HotelsModal"
import HotelsMapModal from "./GoogleMapsModal"

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
const StyledImg = styled.img`
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
const StyledImgStars = styled.img`
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
export default class HotelsFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick(selectedHotel) {
    this._modal.toggle(selectedHotel)
  }
  handleMapClick(selectedHotel) {
    this._mapModal.toggle(selectedHotel)
  }
  render() {
    const hotelList = data
    if (hotelList[0].id === "234234") {
      hotelList.reverse()
    }
    return hotelList.map((selectedHotel, index) => {
      const starImage = [
        [],
        [require("../img/1_Star.png")],
        [require("../img/2_Star.png")],
        [require("../img/3_Star.png")],
        [require("../img/4_Star.png")],
        [require("../img/5_Star.png")],
        [require("../img/6_Star.png")],
      ]
      return (
        <>
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
              src={selectedHotel.hotelImgUrl}
              alt="Image of a hotel"
              fluid
            />
            <StyledHotelInfoContainer>
              <StyledHotelHeader>{selectedHotel.hotelName}</StyledHotelHeader>
              <StyledHotelLocation>${selectedHotel.price}</StyledHotelLocation>
              <StyledHotelStarContainer>
                <StyledImgStars
                  src={starImage[selectedHotel.hotelStars]}
                  alt="Hotel Stars"
                  fluid
                />
              </StyledHotelStarContainer>
              <StyledHotelParagraph>
                {selectedHotel.hotelDescription}
              </StyledHotelParagraph>
              <StyledHotelRating>
                Self Catering: {selectedHotel.selfCatering}
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
        </>
      )
    })
  }
}
