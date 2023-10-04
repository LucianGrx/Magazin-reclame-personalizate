import { useContext, useState, createContext } from "react";

const CustomizationContext = createContext({});

export const Color1 = [
  {
    color: "#683434",
    name: "maro",
  },
  {
    color: "#0DEADD",
    name: "turcoaz",
  },
  {
    color: "#082AE9",
    name: "albastru",
  },
];

export const Color2 = [
  {
    color: "#683434",
    name: "maro",
  },
  {
    color: "#0DEADD",
    name: "turcoaz",
  },
  {
    color: "#082AE9",
    name: "albastru",
  },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);

  const [primarColor, setPrimarColor] = useState(Color1[0]);
  const [secondColor, setSecondColor] = useState(Color2[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        primarColor,
        setPrimarColor,
        secondColor,
        setSecondColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
