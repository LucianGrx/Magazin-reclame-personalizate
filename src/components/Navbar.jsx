import React, { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";
import {Container, Wrapper, Left, Logo, MenuBar, Center, Right, MenuItem, CartNumber, DropdownMenu} from '../styles/NavbarStyles'
import Cart from "./Cart";
import { useSelector } from "react-redux";
import AuthContext from './AuthContext';
import { Link } from "react-router-dom";



const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const { isAuthenticated } = useContext(AuthContext);
  const { logout, username } = useContext(AuthContext);

  return (
      <Container className="shadow-lg">
        <Wrapper>
          <Left>
            <MenuBar>
              <AiOutlineMenu className="hover:text-gray-600"/>
            </MenuBar>
          </Left>
          <Center>
            <Logo href="/">Magazin Online</Logo>
          </Center>
          <Right>
            <MenuItem id="search-icon" className="px-4">
              <AiOutlineSearch className="hover:text-gray-600 hidden md:block text-black"/>
            </MenuItem>
            <MenuItem onClick={() => setHover(!hover)} >
            <BsPerson className="hover:text-gray-600 text-black"/>
            {hover && (<DropdownMenu>
              {isAuthenticated ? (<div><p>Welcome, {username}</p><button onClick={() => logout()}>Logout</button></div>) : (<Link to='/login'>Login</Link>)}
            </DropdownMenu>)}
            
              
            </MenuItem>
            <MenuItem>
              <RiShoppingBag3Line className="hover:text-gray-600 relative text-black" onClick={() =>setOpen(!open)}/>
              <CartNumber className="hover:bg-purple-600" onClick={() => setOpen(!open)}>{products.length}</CartNumber>
            </MenuItem>
          </Right>
        </Wrapper>
        {open && <Cart />}
      </Container>
  );
};

export default Navbar;

