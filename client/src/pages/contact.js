import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import $ from "jquery"
import StyledSearch from "../components/assets/StyledSearch"
import { Row, Col } from "reactstrap"
import Logo from "../components//img/logo_white.png"
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
  margin-top: 10px;
  &::-webkit-input-placeholder {
    color: #707070;
  }
`
const StyledTextInput = styled(StyledInput)`
  min-height: 150px;
`
const StyledForm = styled(AvForm)`
  width: 710px;
  position: relative;
  padding-bottom: 70px;
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const StyledFormGroup = styled(AvGroup)`
  margin: 0;
  margin-bottom: 0px;
`
const StyledButton = styled.button`
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
const StyledTextDiv = styled.div`
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
const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #039ccc;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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
const StyledFeedback = styled(AvFeedback)`
  color: white;
  font-family: "Open sans", serif;
`

export default class contactForm extends React.Component {
  constructor() {
    super()
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {}
  }

  handleValidSubmit(event, values) {
    this.setState({ values })
    $.ajax({
      type: "post",
      url: "../../server/contact-success.php",
      data: $("form").serialize(),
      success: function() {
        navigate("/contact_success/")
      },
    })
  }

  render() {
    return (
      <>
        <Layout>
          <StyledSearch />
          <StyledDiv>
            <StyledHeader>CONTACT US</StyledHeader>
            <StyledForm onValidSubmit={this.handleValidSubmit}>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
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
                <Col xs="12" sm="12">
                  <StyledFormGroup>
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
              <StyledButton>SUBMIT</StyledButton>
            </StyledForm>
          </StyledDiv>
          <StyledTextDiv>
            <StyledTextContainer>
              <StyledLogo src={Logo} alt="website logo" />
              <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                volutpat sit amet lacus eget commodo. Cras est nibh, vehicula
                nec vehicula quis, rutrum eget enim.
              </StyledParagraph>
            </StyledTextContainer>
          </StyledTextDiv>
        </Layout>
      </>
    )
  }
}
