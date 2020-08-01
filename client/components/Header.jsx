import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #494f5c;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
  space-between: 3px;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #c9d0de;
  margin-bottom: 2px;
  padding-left: 60px;
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
width: 400px;
margin-right: 50px;
margin-left: 100px;
  input {
    background-color: #7d828a;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    font-size: 0.80em;
    font-weight: bold;
    padding: 0.75em 2em 0.75em 0.9em;
    width: 100%;
  }
}
`
const Input = styled.input`
::placeholder {
  color: #282c34;
}
`
const RegisterAndLoginBoxes = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 46.5px;
  border: 2px solid #757880;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  &:hover {
    color: white;
    border-color: white;
  }
`
const PurchaseSpan = styled.div`
 margin-left: 10%;
  font-family: roboto;
  font-size: 15px;
  color: #c9d0de;
  display: flex;
  justify-content: flex-end;
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
            <Input className='search-box' type="text" placeholder="Search"></Input>
          </SearchBar>
          <RegisterAndLoginBoxes><HeaderFirstRowNav><i class="fa fa-user-circle-o fa-2" aria-hidden="true"></i>  LOG IN</HeaderFirstRowNav></RegisterAndLoginBoxes>
          <RegisterAndLoginBoxes><HeaderFirstRowNav>SIGN UP</HeaderFirstRowNav></RegisterAndLoginBoxes>
        </HeaderContent>
        <HeaderContent>
          <HeaderSecondRowNav className='header-2nd-row'>ON SALE</HeaderSecondRowNav>
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