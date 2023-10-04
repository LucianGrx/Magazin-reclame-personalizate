import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  height: 74px;
  transition: 0.4s ease-in-out;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

const Wrapper = styled.nav`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

`;
const Left = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Logo = styled.a`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 23px;
    margin-left: 35px;
  }
`;

const MenuBar = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Center = styled.div`
  /* flex: 1; */
  text-align: center;

`;
const Right = styled.ul`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media  screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

const MenuItem = styled.li`
  font-size: 25px;
  cursor: pointer;
  padding: 0px 20px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
    padding: 0px 10px;
  }
`;

const CartNumber = styled.span`
  font-size: 11px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #00bbf9;
  color: white;
  position: absolute;
  right: 30px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content:center;

  @media screen and (max-width: 768px) {
    right: 20px;
    top: 21px;
    width: 18px;
    height: 18px;
    font-size: 10px;
  }

  @media screen and (max-width: 390px) {
    right: 20px;
    top: 20px;
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 16px;
  z-index: 1;
`;


export {Container, Wrapper, Left, Logo, MenuBar, Center, Right, MenuItem, CartNumber, DropdownMenu};