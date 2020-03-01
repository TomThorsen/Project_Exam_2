import React from "react"
import Layout from "../components/layout/Layout"
import AdminMenu from "../components/layout/AdminMenu"
import styled from "styled-components"
import { Row, Col, Label } from "reactstrap"
import $ from "jquery"
import { navigate } from "gatsby"
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation"

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

const StyledForm = styled(AvForm)`
  width: 710px;
  position: relative;
  margin-top: 20px;
  padding-bottom: 70px;
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const StyledLabel = styled(Label)`
  color: white;
`
const StyledFormGroup = styled(AvGroup)``
const StyledButton = styled.button`
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
  font-size: 20px;
  margin-bottom: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  &:hover {
    background-color: #36b2a6;
    text-decoration: none;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-right: 10px;
  }
`
const StyledFeedback = styled(AvFeedback)`
  color: white;
  font-family: "Open sans", serif;
`
const StyledTextInput = styled(StyledInput)`
  min-height: 150px;
`

export default class adminCreate extends React.Component {
  constructor() {
    super()
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {}
  }

  handleValidSubmit(event, values) {
    this.setState({ values })
    $.ajax({
      type: "post",
      url: "http://localhost/hotel-api/server/add-establishments-success.php",
      data: $("form").serialize(),
      success: function() {
        navigate("/create_success/")
      },
    })
  }

  render() {
    return (
      <>
        <Layout>
          <AdminMenu />
          <StyledDiv>
            <StyledHeader>CREATE NEW ESTABLISHMENT</StyledHeader>
            <StyledForm onValidSubmit={this.handleValidSubmit}>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="hotelName">Hotel Name</StyledLabel>
                    <StyledInput
                      type="text"
                      name="hotelName"
                      id="hotelName"
                      placeholder="Hotel Name"
                      validate={{
                        required: { value: true },
                      }}
                    />
                    <StyledFeedback>Hotel name required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="hotelStars">Stars</StyledLabel>
                    <StyledInput
                      type="select"
                      name="hotelStars"
                      id="hotelStars"
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
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="googleLat">Google Longitude</StyledLabel>
                    <StyledInput
                      type="text"
                      name="googleLat"
                      id="googleLat"
                      placeholder="Google Longitude"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[0-9.]+$" },
                      }}
                    />
                    <StyledFeedback>
                      Longitude required, format 11.1111
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="googleLong">Google Latitude</StyledLabel>
                    <StyledInput
                      type="text"
                      name="googleLong"
                      id="googleLong"
                      placeholder="Google Latitude"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[0-9.]+$" },
                      }}
                    />
                    <StyledFeedback>
                      Latitude required, format 11.1111
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="hotelImgUrl">Image URL</StyledLabel>
                    <StyledInput
                      type="text"
                      name="hotelImgUrl"
                      id="hotelImgUrl"
                      placeholder="Image URL"
                      validate={{
                        required: { value: true },
                      }}
                    />
                    <StyledFeedback>Image URL required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="hotelEmail">Hotel E-mail</StyledLabel>
                    <StyledInput
                      type="email"
                      name="hotelEmail"
                      id="hotelEmail"
                      placeholder="Hotel E-mail"
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
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="price">Price</StyledLabel>
                    <StyledInput
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      validate={{
                        required: { value: true },
                        pattern: { value: "^[0-9.]+$" },
                      }}
                    />
                    <StyledFeedback>
                      Price required, format 11.11
                    </StyledFeedback>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="maxGuests">Max guests</StyledLabel>
                    <StyledInput
                      type="number"
                      id="maxGuests"
                      name="maxGuests"
                      placeholder="Max number of guests"
                      validate={{
                        required: { value: true },
                        number: true,
                      }}
                    />
                    <StyledFeedback>Max guests required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="selfCatering">Self Catering</StyledLabel>
                    <StyledInput
                      type="select"
                      name="selfCatering"
                      id="selfCatering"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </StyledInput>
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="id">Hotel ID</StyledLabel>
                    <StyledInput
                      type="number"
                      id="id"
                      name="id"
                      placeholder="Hotel ID"
                      validate={{
                        required: { value: true },
                        number: true,
                      }}
                    />
                    <StyledFeedback>Max guests required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <StyledFormGroup>
                    <StyledLabel for="hotelDescription">
                      Description
                    </StyledLabel>
                    <StyledTextInput
                      type="textarea"
                      name="hotelDescription"
                      id="hotelDescription"
                      placeholder="Write your description here..."
                      validate={{
                        required: true,
                        minLength: { value: 10 },
                      }}
                    />
                    <StyledFeedback>Description required</StyledFeedback>
                  </StyledFormGroup>
                </Col>
              </Row>
              <StyledButton>CREATE</StyledButton>
            </StyledForm>
          </StyledDiv>
        </Layout>
      </>
    )
  }
}
