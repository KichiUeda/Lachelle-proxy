import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: rgb(73, 79, 92);
  justify-content: center;
`;
const HeaderContent = styled.div`
  border-top: solid 1px;
  text-align: center;
  padding: 10px;
  color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HeaderFirstRowNav = styled.div`
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #c9d0de;
  margin: 20px;
  &:hover {
    color: white;
  }
`;

const HeaderSecondRowNav = styled.div`
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #c9d0de;
  margin-bottom: 8px;
  padding-left: 50px;
  &:hover {
    color: white;
  }
`

const Logo = styled.div`
  img {
    width: 99px;
    height: 29px;
  }
`
const SearchBar = styled.div`
margin-left: 100px;
  input {
    font-style: inherit;
    background-color: grey;
    padding: 5px;
    border-radius: 4px;
    border: none;
  }
`
const RegisterLogin = styled.a`
  border: 2px solid #757880;
  &:hover {
    color: white;
  }
`
const PurchaseSpan = styled.div`
  font-family: roboto;
  font-size: 15px;
  color: #c9d0de;
  display: flex;
  align-items: flex-end;
`

export default class HeaderContentigation extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <Logo><img src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"></img></Logo>
          <HeaderFirstRowNav>BUNDLES</HeaderFirstRowNav>
          <HeaderFirstRowNav>CHOICE</HeaderFirstRowNav>
          <HeaderFirstRowNav>STORE</HeaderFirstRowNav>
          <HeaderFirstRowNav>ABOUT</HeaderFirstRowNav>
          <SearchBar>
            <input placeholder="Search"></input>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button type="submit"><i className="fa fa-search"></i></button>
          </SearchBar>
          <RegisterLogin><HeaderFirstRowNav>LOG IN</HeaderFirstRowNav></RegisterLogin>
          <RegisterLogin><HeaderFirstRowNav>SIGN UP</HeaderFirstRowNav></RegisterLogin>
        </HeaderContent>
        <HeaderContent>
          <HeaderSecondRowNav>ON SALE</HeaderSecondRowNav>
          <HeaderSecondRowNav>NEW RELEASES</HeaderSecondRowNav>
          <HeaderSecondRowNav>BESTSELLING</HeaderSecondRowNav>
          <HeaderSecondRowNav>BROWSE</HeaderSecondRowNav>
          <HeaderSecondRowNav>CHARITY</HeaderSecondRowNav>
          <PurchaseSpan>
            <HeaderSecondRowNav>
              <i className="fa fa-credit-card"></i>
              $0.00
            </HeaderSecondRowNav>
            <HeaderSecondRowNav>
              <span className="fa fa-star"></span>
              0
            </HeaderSecondRowNav>
            <HeaderSecondRowNav>
              <i className="fa fa-shopping-cart"></i>
              0
            </HeaderSecondRowNav>
          </PurchaseSpan>
        </HeaderContent>
      </HeaderContainer>
    );
  }
}