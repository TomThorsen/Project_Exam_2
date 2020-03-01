import React from "react"
import styled from "styled-components"
import { Col, Container, Modal, ModalFooter, Row } from "reactstrap"
import data from "../../../public/enquiries.json"

const StyledTD = styled.td`
  padding-bottom: 5px !important;
  padding-top: 5px !important;
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
  padding-top: 20px;
  text-align: center;
`
const StyledModalBody = styled(Container)`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0;
`
const StyledModalBodyDiv = styled(Container)`
  background-color: #039ccc;
  margin-bottom: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyledModalFooter = styled(ModalFooter)`
  background-color: #039ccc;
  border-style: none;
`
const StyledCloseButton = styled.button`
  font-family: "Open sans", serif;
  box-shadow: 1px 1px 2px black;
  background-color: #64b362;
  border: solid;
  border-width: 2px;
  border-color: #fec406;
  border-radius: 3px;
  color: white;
  padding: 0px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #36b2a6;
    text-decoration: none !important;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-left: 0px !important;
  }
`
const StyledRow = styled.tr`
  cursor: pointer;
  &:hover {
    color: #fec406;
  }
`
const StyledSubHeader = styled.h3`
  font-family: "Open sans", serif;
  margin-top: 10px;
  color: white;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
`
const StyledModalText = styled.p`
  font-family: "Open sans", serif;
  margin: 0px;
  color: white;
  font-size: 20px;
`

class EnquiriesModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: props.initialModalState,
      fade: true,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(index) {
    this.setState({
      modal: !this.state.modal,
      fade: !this.state.fade,
    })
    if (index >= 0) {
      this.setState({
        contactTime: data[index].contactTime,
        contactDate: data[index].contactDate,
        establishment: data[index].establishment,
        fromDate: data[index].fromDate,
        toDate: data[index].toDate,
        firstName: data[index].firstName,
        lastName: data[index].lastName,
        emailAddress: data[index].emailAddress,
        phoneNumber: data[index].phoneNumber,
        homeAddress: data[index].homeAddress,
        postNumber: data[index].postNumber,
        adultGuests: data[index].adultGuests,
        childGuests: data[index].childGuests,
        textMessage: data[index].textMessage,
        hotelID: data[index].hotelID,
      })
    }
  }
  render() {
    return (
      <StyledModal
        isOpen={this.state.modal}
        toggle={this.toggle}
        fade={this.state.fade}
        className={this.props.className}
        size="lg"
      >
        <StyledModalHeader text="center" toggle={this.toggle}>
          {this.state.establishment}
        </StyledModalHeader>
        <StyledModalBody>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="12">
                <StyledSubHeader>
                  <b>ID:</b> {this.state.hotelID}
                </StyledSubHeader>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>DATE RECEIVED:</b>
                  <br /> {this.state.contactDate}
                </StyledModalText>
              </Col>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>TIME RECEIVED:</b>
                  <br /> {this.state.contactTime}
                </StyledModalText>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>FROM DATE:</b>
                  <br /> {this.state.fromDate}
                </StyledModalText>
              </Col>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>TO DATE:</b>
                  <br /> {this.state.toDate}
                </StyledModalText>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>ADULTS:</b> {this.state.adultGuests}
                </StyledModalText>
              </Col>
              <Col xs="12" sm="6">
                <StyledModalText>
                  <b>CHILDREN:</b> {this.state.childGuests}
                </StyledModalText>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>
                  <b>NAME:</b> {this.state.firstName} {this.state.lastName}
                </StyledModalText>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>
                  <b>EMAIL:</b> {this.state.emailAddress}
                </StyledModalText>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>
                  <b>ADDRESS:</b> {this.state.homeAddress}
                </StyledModalText>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>
                  <b>POST NR:</b> {this.state.postNumber}
                </StyledModalText>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>
                  <b>PHONE NR:</b> {this.state.phoneNumber}
                </StyledModalText>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="12">
                <StyledSubHeader>
                  <b>Message:</b>
                </StyledSubHeader>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalText>{this.state.textMessage}</StyledModalText>
              </Col>
            </Row>
          </StyledModalBodyDiv>
        </StyledModalBody>
        <StyledModalFooter>
          <StyledCloseButton onClick={this.toggle}>CLOSE</StyledCloseButton>
        </StyledModalFooter>
      </StyledModal>
    )
  }
}
const firstItem = data[0]
export default class AdminEnquiriesFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick(index) {
    this._modal.toggle(index)
  }

  render() {
    if (data[0] === firstItem) {
      data.reverse()
    }
    return data.map((dataInfo, index) => {
      return (
        <>
          <EnquiriesModal
            ref={EnquiriesModal => {
              this._modal = EnquiriesModal
            }}
          />
          <StyledRow onClick={this.handleClick.bind(this, index)}>
            <StyledTD>{dataInfo.contactDate}</StyledTD>
            <StyledTD>{dataInfo.establishment}</StyledTD>
            <StyledTD>{dataInfo.fromDate}</StyledTD>
            <StyledTD>{dataInfo.toDate}</StyledTD>
            <StyledTD>{dataInfo.firstName}</StyledTD>
            <StyledTD>{dataInfo.lastName}</StyledTD>
          </StyledRow>
        </>
      )
    })
  }
}
