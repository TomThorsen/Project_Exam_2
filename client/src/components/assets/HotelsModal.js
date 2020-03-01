import React from "react"
import styled from "styled-components"
import { Col, Container, Label, Modal, ModalFooter, Row } from "reactstrap"
import $ from "jquery"
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation"

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
const StyledSubmitButton = styled(StyledButton)`
  font-size: 20px;
  background-color: #64b362;
  &:hover {
    background-color: #36b2a6;
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
const StyledLabel = styled(Label)`
  color: white;
  font-family: "Open sans", serif;
`
const StyledInput = styled(AvInput)`
  font-family: "Open sans", serif;
  border-style: solid;
  border-color: #fec406;
  border-width: 3px;
  color: #707070;
  &::-webkit-input-placeholder {
    color: #707070;
  }
`
const StyledTextInput = styled(StyledInput)`
  min-height: 160px;
`
const StyledForm = styled(AvForm)`
  margin-top: 30px;
`
const StyledFormGroup = styled(AvGroup)`
  margin: 0;
  margin-bottom: 5px;
`
const StyledFeedback = styled(AvFeedback)`
  color: white;
  font-family: "Open sans", serif;
`
export default class HotelsModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
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
      this.setState({
        hotelName: selectedHotel.hotelName,
        hotelId: selectedHotel.id,
      })
    }
  }
  handleValidSubmit(event, values) {
    this.setState({ values })
    event.preventDefault()
    $.ajax({
      type: "post",
      url: "http://localhost/hotel-api/server/enquiry-success.php",
      data: $("form").serialize(),
      success: function() {
        $("#modalHeader").html("BOOKING REQUEST SENT")
        $("form input, form select, form label, form textarea,.hideThis").hide()
        $("#cancelButton").html("EXIT")
      },
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
        >
          <StyledModalHeader id="modalHeader" text="center">
            SEND BOOKING ENQUIRY
          </StyledModalHeader>
          <StyledModalHeader className="hideThis" text="center">
            Hotel: {this.state.hotelName}
          </StyledModalHeader>
          <StyledModalBody>
            <StyledForm onValidSubmit={this.handleValidSubmit}>
              <Row>
                <StyledInput
                  type="hidden"
                  name="establishment"
                  id="establishment"
                  value={this.state.hotelName}
                />
                <StyledInput
                  type="hidden"
                  name="hotelID"
                  id="hotelID"
                  value={this.state.hotelId}
                />

                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="fromDate">FROM DATE</StyledLabel>
                    <StyledInput
                      type="date"
                      name="fromDate"
                      id="fromDate"
                      placeholder="FROM DATE"
                      validate={{
                        required: true,
                        dateRange: {
                          start: { value: 0, units: "days" },
                          end: { value: 2, units: "years" },
                        },
                      }}
                    />
                    <StyledFeedback>
                      You can't use a past date, and only up to 2 years in the
                      future
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="toDate">TO DATE</StyledLabel>
                    <StyledInput
                      type="date"
                      name="toDate"
                      id="toDate"
                      placeholder="TO DATE"
                      validate={{
                        required: true,
                        dateRange: {
                          start: { value: 1, units: "days" },
                          end: { value: 2, units: "years" },
                        },
                      }}
                    />
                    <StyledFeedback>
                      You can't use a past date, and only up to 2 years in the
                      future
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="adultGuests">Adults</StyledLabel>
                    <StyledInput
                      type="select"
                      name="adultGuests"
                      id="adultGuests"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </StyledInput>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="childGuests">Children</StyledLabel>
                    <StyledInput
                      type="select"
                      name="childGuests"
                      id="childGuests"
                    >
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </StyledInput>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="firstName"></StyledLabel>
                    <StyledInput
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="FIRST NAME"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[A-Za-z0-9]+$" },
                      }}
                    />
                    <StyledFeedback>
                      First name required, no special characters allowed
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="lastName"></StyledLabel>
                    <StyledInput
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="LAST NAME"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[A-Za-z0-9]+$" },
                      }}
                    />
                    <StyledFeedback>
                      Last name required, no special characters allowed
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="emailAddress"></StyledLabel>
                    <StyledInput
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="EMAIL"
                      validate={{
                        required: true,
                        email: true,
                      }}
                    />
                    <StyledFeedback>
                      Email required, format mail@domain.com
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="phoneNumber"></StyledLabel>
                    <StyledInput
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="PHONE NUMBER"
                      validate={{
                        required: true,
                        number: true,
                        minLength: { value: 8 },
                        maxLength: { value: 8 },
                      }}
                    />
                    <StyledFeedback>
                      Phonenumber required, format 23232323
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="homeAddress"></StyledLabel>
                    <StyledInput
                      type="text"
                      name="homeAddress"
                      id="homeAddress"
                      placeholder="ADDRESS"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[A-Za-z0-9 ]+$" },
                      }}
                    />
                    <StyledFeedback>
                      Address required, no special characters allowed
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="postNumber"></StyledLabel>
                    <StyledInput
                      type="number"
                      name="postNumber"
                      id="postNumber"
                      placeholder="POST NUMBER"
                      validate={{
                        required: true,
                        number: true,
                        minLength: { value: 4 },
                        maxLength: { value: 4 },
                      }}
                    />
                    <StyledFeedback>
                      Postnumber required, format 2323
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12">
                  <StyledFormGroup>
                    <StyledLabel for="textMessage"></StyledLabel>
                    <StyledTextInput
                      type="textarea"
                      name="textMessage"
                      id="textMessage"
                      placeholder="Write your message here..."
                      validate={{
                        required: true,
                        minLength: { value: 10 },
                      }}
                    />
                    <StyledFeedback>Message required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <StyledModalFooter className="keepThis">
                <StyledSubmitButton className="hideThis" type="submit">
                  SUBMIT
                </StyledSubmitButton>
                <StyledCancelButton
                  id="cancelButton"
                  type="button"
                  onClick={this.toggle}
                >
                  CANCEL
                </StyledCancelButton>
              </StyledModalFooter>
            </StyledForm>
          </StyledModalBody>
        </StyledModal>
      </StyledContainer>
    )
  }
}
