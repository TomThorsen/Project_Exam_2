import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { Row, Col, Label } from "reactstrap"
import users from "../../public/users.json"

import $ from "jquery"
import {
  AvForm,
  AvField,
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
  position: relative;
  @media (max-width: 992px) {
    width: 100%;
  }
  padding-bottom: 50px;
  padding-top: 50px;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 0px;
  text-align: center;
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
const StyledForm = styled(AvForm)`
  width: 410px;
  max-width: 410px;

  padding-bottom: 20px;
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
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
  position: absolute;
  bottom: 17px;
  right: 15px;
  padding: 0px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
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
const StyledLabel = styled(Label)`
  color: white;
  font-family: "Open sans", serif;
  margin-top: 20px;
  margin-bottom: 0px;
`
const StyledFeedback = styled(AvFeedback)`
  color: white;
  font-family: "Open sans", serif;
`
const StyledCustomFeedback = styled.p`
  color: white;
  font-family: "Open sans", serif;
  text-align: center;
`
const StyledRow = styled(Row)`
  flex-direction: row;
`
export default class Register extends React.Component {
  constructor() {
    super()
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {}
  }

  handleValidSubmit(event, values) {
    this.setState({ values })
    event.preventDefault()
    let result = users.filter(obj => {
      return obj.username === values.username
    })
    if (result.length !== 0) {
      $("#customFeedback").html("Username is taken")
      $("#username").css("border-color", "red")
    } else {
      $.ajax({
        type: "post",
        url: "http://localhost/hotel-api/server/newuser.php",
        data: $("form").serialize(),
        success: function() {
          $("#customFeedback").html("")
          $("#formHeader").html(
            "REGISTRATION SUCCESSFUL. <br/>YOU MAY NOW LOG IN"
          )
          $("form input, form select, form label, form textarea, button").hide()
        },
      })
    }
  }

  render() {
    return (
      <Layout>
        <StyledSearch />
        <StyledDiv>
          <StyledHeader id="formHeader">REGISTER</StyledHeader>
          <StyledForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <StyledInput
                name="username"
                id="username"
                placeholder="USERNAME"
                class="hideThis"
                required
              />
              <StyledCustomFeedback id="customFeedback"></StyledCustomFeedback>
              <StyledFeedback>Username required</StyledFeedback>
            </AvGroup>
            <AvGroup>
              <StyledInput
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                required
              />
              <StyledFeedback>Password required</StyledFeedback>
            </AvGroup>
            <AvGroup>
              <StyledInput
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="CONFIRM PASSWORD"
                required
                validate={{ match: { value: "password" } }}
              />
              <StyledFeedback>Password does not match</StyledFeedback>
            </AvGroup>
            <StyledRow>
              <Col xs="6" sm="6">
                <AvGroup>
                  <StyledLabel for="isAdmin">Admin?</StyledLabel>
                  <AvField type="select" name="isAdmin" id="isAdmin">
                    <option>YES</option>
                    <option>NO</option>
                  </AvField>
                </AvGroup>
              </Col>
              <Col xs="6" sm="6">
                <AvGroup>
                  <StyledButton class="hideThis">Submit</StyledButton>
                </AvGroup>
              </Col>
            </StyledRow>
          </StyledForm>
        </StyledDiv>
      </Layout>
    )
  }
}
