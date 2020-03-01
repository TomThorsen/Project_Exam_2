import React from "react"
import styled from "styled-components"
import Icon from "../img/icon_search.png"
import data from "../../../public/establishments.json"
import Autosuggest from "react-autosuggest"
import { navigate } from "gatsby"

const StyledWrapper = styled.div`
  & .react-autosuggest__container {
    display: flex;
    width: 1024px !important;
    justify-content: center;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 992px) {
      width: 100% !important;
      padding-top: 84px;
    }
  }
  & .react-autosuggest__input {
    width: 700px;
    height: 55px;
    text-align: center;
    font-family: "Open sans", serif;
    font-size: 28px;
    border-color: #fec406;
    border-style: solid;
    border-width: 3px;
    border-radius: 3px;
    background: url(${Icon}) no-repeat scroll 7px 7px;
    padding-left: 0px;
    @media (max-width: 992px) {
      width: 100% !important;
      margin-left: 20px;
      margin-right: 20px;
    }
    @media (max-width: 622px) {
      font-size: 20px;
    }
  }
  & .react-autosuggest__container {
    position: relative;
  }
  & .react-autosuggest__input:focus {
    outline: none;
  }
  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    align-self: center;
  }
  & .react-autosuggest__suggestion {
    cursor: pointer;
  }

  & .react-autosuggest__suggestion:hover {
    background-color: #039ccc;
    color: white;
  }
  & .react-autosuggest__suggestions-container--open {
    position: absolute;
    top: 72px;
    width: 700px;
    text-align: center;
    border-color: #fec406;
    border-style: solid;
    border-top: none;
    border-width: 3px;
    border-radius: 3px;
    background-color: #fff;
    font-family: "Open sans", serif;
    font-size: 28px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }
`
const StyledSearchCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
const StyledImg = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
`
const StyledPadder = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px;
`

const hotelsData = data;

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : hotelsData.filter(
        hotel =>
          hotel.hotelName.toLowerCase().slice(0, inputLength) === inputValue
      )
}
const getSuggestionValue = suggestion => suggestion.hotelName

const renderSuggestion = suggestion => (
  <StyledSearchCont>
    <StyledImg src={suggestion.hotelImgUrl} alt="Image of a hotel" />
    {suggestion.hotelName}
    <StyledPadder />
  </StyledSearchCont>
)

class SearchComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      value: "",
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }
  onSuggestionSelected = (event, { suggestion }) => {
    navigate("/selectedhotel/", {
      state: { selectedHotel: suggestion },
    })
  }
  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: "Where are you going?",
      value,
      onChange: this.onChange,
    }

    return (
      <StyledWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      </StyledWrapper>
    )
  }
}
export default SearchComponent
