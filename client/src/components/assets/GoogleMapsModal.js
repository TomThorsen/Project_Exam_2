import React from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"
import { Container, Modal, ModalFooter } from "reactstrap"

const StyledContainer = styled.div``
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
const StyledCancelButton = styled(StyledButton)`
  font-size: 20px;
  background-color: #4c91b7;
  &:hover {
    background-color: #d5174e;
  }
`
const StyledModal = styled(Modal)`
  box-shadow: 3px 3px 3px black;
`
const StyledModalHeader = styled.h1`
  background-color: #039ccc;
  border-style: none;
  font-family: "Open sans", serif;
  color: white;
  font-size: 33px;
  margin: 0;
  padding-bottom: 10px;
  padding-top: 20px;
  text-align: center;
`
const StyledModalBody = styled(Container)`
  background-color: #039ccc;
`
const StyledModalFooter = styled(ModalFooter)`
  background-color: #039ccc;
  border-style: none;
`
const StyledImg = styled.img`
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  object-fit: cover;
`
let lati = 0
let long = 0
export default class GoogleMapsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: props.initialModalState,
      fade: true,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(selectedHotel) {
    this.setState({
      modal: !this.state.modal,
      fade: !this.state.fade,
    })
    if (selectedHotel !== undefined) {
      let latInt = parseFloat(selectedHotel.googleLat)
      let longInt = parseFloat(selectedHotel.googleLong)
      lati = latInt
      long = longInt
      this.setState({
        hotelName: selectedHotel.hotelName,
        hotelImgUrl: selectedHotel.hotelImgUrl,
        center: {
          lat: latInt,
          lng: longInt,
        },
        lat: latInt,
        lng: longInt,
        zoom: 11,
      })
    }
  }
  renderMarker = (map, maps) => {
    new maps.Marker({
      map: map,
      position: new maps.LatLng(lati, long),
      label: this.state.hotelName,
    })
  }
  render() {
    return (
      <StyledContainer>
        <StyledModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          fade={this.state.fade}
          className={this.props.className}
          size="lg"
        >
          <StyledModalHeader text="center">
            Hotel: {this.state.hotelName}
          </StyledModalHeader>
          <StyledModalBody>
            <StyledImg
              src={this.state.hotelImgUrl}
              alt="Image of a hotel"
              fluid
            />
            <div style={{ height: "40vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAYR9t9VTD8facOji-e9OPNlGSlcz5bqrE",
                }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) =>
                  this.renderMarker(map, maps)
                }
              ></GoogleMapReact>
            </div>
            <StyledModalFooter className="keepThis">
              <StyledCancelButton
                id="cancelButton"
                type="button"
                onClick={this.toggle}
              >
                CLOSE
              </StyledCancelButton>
            </StyledModalFooter>
          </StyledModalBody>
        </StyledModal>
      </StyledContainer>
    )
  }
}
