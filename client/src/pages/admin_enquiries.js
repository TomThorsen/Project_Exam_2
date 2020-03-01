import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import AdminMenu from "../components/layout/AdminMenu"
import { Table } from "reactstrap"
import AdminEnquiriesFetcher from "../components/assets/AdminEnquiriesFetcher"

const StyledDiv = styled.div`
  font-family: "Open sans", serif;
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
  padding-bottom: 0px;
  padding-top: 0px;
`
const StyledTable = styled(Table)`
  color: white;
  text-align: center;
  margin-bottom: 0;
`
const StyledTH = styled.th`
  padding-bottom: 0px !important;
  padding-top: 5px !important;
`

const AdminEnquiryModal = () => {
  return (
    <>
      <Layout>
        <AdminMenu />
        <StyledDiv>
          <StyledTable bordered>
            <thead>
              <tr>
                <StyledTH>Date Received</StyledTH>
                <StyledTH>Hotel Name</StyledTH>
                <StyledTH>From Date</StyledTH>
                <StyledTH>To Date</StyledTH>
                <StyledTH>First Name</StyledTH>
                <StyledTH>Last Name</StyledTH>
              </tr>
            </thead>
            <tbody>
              <AdminEnquiriesFetcher />
            </tbody>
          </StyledTable>
        </StyledDiv>
      </Layout>
    </>
  )
}

export default AdminEnquiryModal
