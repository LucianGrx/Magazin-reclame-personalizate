import React, {useState} from "react";
import "./Studio.css";
import { Color1, Color2, useCustomization } from "./contexts/Customization";
import { SketchPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import {addCustomItem} from '../../redux/cartReducer';

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    primarColor,
    setPrimarColor,
    secondColor,
    setSecondColor,
  } = useCustomization();

  const dispatch = useDispatch();

  const [price, setPrice] = useState(8000);
  const [numeProdus] = useState("Produs personalizat");

  const handleColorChange = (color, setColorFunction) => {
    setColorFunction({ color: color.hex, name: 'custom' });
}

const handleAddToCart = () => {
  dispatch(addCustomItem({
    id: Date.now(),
    name: numeProdus,
    material: material,
    primaryColor: primarColor,
    secondaryColor: secondColor,
    price: price,
    quantity: 1,
  }));
}


  return (
    <div className="configurator">
      <h1 className="text-4xl">Configurator</h1>
      <h2 className="text-lg">{numeProdus}</h2>
      <div className="configurator__section">
        <div className="configurator__section__title">Material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "plastic" ? "item--active" : ""}`}
            onClick={() => setMaterial("plastic")}
          >
            <div className="item__label">Plastic</div>
          </div>
          <div
            className={`item ${material === "metal" ? "item--active" : ""}`}
            onClick={() => setMaterial("metal")}
          >
            <div className="item__label">Metal</div>
          </div>
        </div>
        <div className="configurator__section__title">Culoarea Primara</div>
        <div className="configurator__section__values">
          {Color1.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === primarColor.color ? "item--active" : ""
              }`}
              onClick={() => setPrimarColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="item__label">{item.name}</div>
            </div>
          ))}
           <SketchPicker color={ primarColor.color } onChange={ color => handleColorChange(color, setPrimarColor) } />
        </div>

        <div className="configurator__section__title">Culoarea secundara</div>
        <div className="configurator__section__values">
          {Color2.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === secondColor.color ? "item--active" : ""
              }`}
              onClick={() => setSecondColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="item__label">{item.name}</div>
            </div>
          ))}
          <SketchPicker color={ secondColor.color } onChange={ color => handleColorChange(color, setSecondColor) } />
        </div>

        {/* <div className="configurator__section__title">Leduri</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item__label">modern</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item__label">Classic</div>
          </div>
        </div> */}
      </div>
      <div className="configurator__section__title">Preț: {price} RON</div>
      <button onClick={handleAddToCart}>Adăugați în coș</button>
    </div>
  );
};

export default Configurator;
