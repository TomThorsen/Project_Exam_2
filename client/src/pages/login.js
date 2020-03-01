import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { navigate } from "gatsby"
import {
  AvFeedback,
  AvForm,
  AvGroup,
  AvInput,
} from "availity-reactstrap-validation"
import users from "../../public/users.json"
import $ from "jquery"

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
  padding-bottom: 50px;
  padding-top: 50px;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 0px;
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
  position: relative;
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
const StyledFeedback = styled(AvFeedback)`
  color: white;
  font-family: "Open sans", serif;
`
const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledCustomFeedback = styled.p`
  color: white;
  font-family: "Open sans", serif;
  text-align: center;
`
export default class Login extends React.Component {
  constructor() {
    super()
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {}
  }

  handleValidSubmit(event, values) {
    this.setState({ values })

    let result = users.filter(obj => {
      return obj.username === values.username
    })

    if (result.length === 0) {
      $("#customFeedback").html("Could not find user")
    } else {
      if (
        values.username === result[0].username &&
        values.password === result[0].password
      ) {
        if (result[0].isAdmin === "YES") {
          sessionStorage.setItem("adminLoggedin", "true")
          navigate("/admin_enquiries/")
        } else {
          $("#customFeedback").html("User does not have admin access")
          $("#username,#password").css("border-color", "red")
        }
      } else {
        $("#customFeedback").html("Password is incorrect")
        $("#username,#password").css("border-color", "red")
      }
    }
  }

  render() {
    return (
      <Layout>
        <StyledSearch />
        <StyledDiv>
          <StyledHeader id="formHeader">LOG IN</StyledHeader>
          <StyledForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <StyledInput
                name="username"
                id="username"
                placeholder="USERNAME"
                class="hideThis"
                required
              />
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
              <StyledCustomFeedback id="customFeedback"></StyledCustomFeedback>
              <StyledFeedback>Password required</StyledFeedback>
            </AvGroup>
            <StyledButtonDiv>
              <StyledButton type="submit" class="hideThis">
                LOG IN
              </StyledButton>
            </StyledButtonDiv>
          </StyledForm>
        </StyledDiv>
      </Layout>
    )
  }
}
