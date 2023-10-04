import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Container className="grid md:grid-cols-4 md:gap-3 gap-1 md:mx-3 mx-1 md:my-40 my-20 grid-cols-3">
      <div className="bg-slate-500 relative">
        <img
          className="w-full h-full object-cover"
          src="./img/categorii/litere-volumetrice.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/5">
            Litere volumetrice
          </Link>
        </Button>
      </div>
      <div className="bg-slate-600 md:row-span-2 relative">
        <img
          className="w-full h-full object-cover"
          src="./img/categorii/banner2.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/1">Bannere</Link>
        </Button>
      </div>
      <div className="bg-slate-700 relative">
        <img
          className="w-full h-full object-cover"
          src="./img/categorii/restaurant.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/6">Meniuri Restaurant</Link>
        </Button>
      </div>
      <div className="bg-slate-800 relative">
        <img
          className="w-full h-full object-cover"
          src="./img/categorii/flayer2.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/3">Flayere</Link>
        </Button>
      </div>
      <div className="bg-slate-900 relative">
        <img
          className="w-full h-full object-cover"
          src="./img/categorii/casete-luminoase.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/2">Casete Luminoase</Link>
        </Button>
      </div>
      <div className="bg-slate-950 md:col-span-2 md:col-start-3 relative">
        <img
          className="object-cover h-full overflow-hidden"
          src="./img/categorii/haine.png"
          alt=""
        />
        <Button>
          <Link className="link" to="/products/4">Imbracaminte</Link>
        </Button>
      </div>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  height: 80vh;

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;

const Button = styled.button`
  position: absolute;
  min-width: 100px;
  width: fit-content;
  height: 50px;
  padding: 10px;
  background-color: white;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: black;
  justify-content: center;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in;
  &:hover {
    background-color: #4F46E5;
    color: #fff;
    border-color: #4F46E5;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66,153,225,0.5);
  }
  @media (max-width: 600px) {
    height: 30px;
    padding: 5px;
    font-size: 0.53rem;
    background-color: transparent;
    color: white;
  }
`;
