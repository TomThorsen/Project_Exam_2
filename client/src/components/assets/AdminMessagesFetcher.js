import React from "react"
import styled from "styled-components"
import { Col, Container, Modal, ModalFooter, Row } from "reactstrap"
import data from "../../../public/contact.json"

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
const StyledModalTextDetails = styled(StyledModalText)`
  text-align: center;
`

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + "..."
}

class InfoModal extends React.Component {
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
        firstName: data[index].firstName,
        lastName: data[index].lastName,
        contactDate: data[index].contactDate,
        emailAddress: data[index].emailAddress,
        phoneNumber: data[index].phoneNumber,
        textMessage: data[index].textMessage,
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
      >
        <StyledModalBody>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="12">
                <StyledModalHeader>
                  {this.state.firstName} {this.state.lastName}
                </StyledModalHeader>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12">
                <StyledSubHeader>
                  DATE RECEIVED: {this.state.contactDate}
                </StyledSubHeader>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="6">
                <StyledModalTextDetails>
                  EMAIL: {this.state.emailAddress}
                </StyledModalTextDetails>
              </Col>
              <Col xs="12" sm="6">
                <StyledModalTextDetails>
                  PHONE NR: {this.state.phoneNumber}
                </StyledModalTextDetails>
              </Col>
            </Row>
          </StyledModalBodyDiv>
          <StyledModalBodyDiv>
            <Row>
              <Col xs="12" sm="12">
                <StyledSubHeader>Message:</StyledSubHeader>
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
const firstMessageItem = data[0]
export default class AdminMessagesFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick(index) {
    this._modal.toggle(index)
  }

  render() {
    if (data[0] === firstMessageItem) {
      data.reverse()
    }
    return data.map((dataInfo, index) => {
      const shortenedMsg = truncateString(dataInfo.textMessage, 25)
      return (
        <>
          <InfoModal
            ref={InfoModal => {
              this._modal = InfoModal
            }}
          />
          <StyledRow onClick={this.handleClick.bind(this, index)}>
            <StyledTD>{dataInfo.contactDate}</StyledTD>
            <StyledTD>{dataInfo.firstName}</StyledTD>
            <StyledTD>{dataInfo.lastName}</StyledTD>
            <StyledTD>{dataInfo.emailAddress}</StyledTD>
            <StyledTD>{dataInfo.phoneNumber}</StyledTD>
            <StyledTD>{shortenedMsg}</StyledTD>
          </StyledRow>
        </>
      )
    })
  }
}
