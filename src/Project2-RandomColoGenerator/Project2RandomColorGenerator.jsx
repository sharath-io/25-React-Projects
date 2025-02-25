import { useEffect, useState } from "react";
import "./styles.css";

export const Project2RandomColorGenerator = () => {
  const [colorType, setColorType] = useState("rgb");
  const [bgColor, setBgColor] = useState("rgb(0,255,255)");

  const generateRandomMax=(max) =>{
    return Math.floor(Math.random() * max)
  }

  const generateRandom = () => {
    if (colorType === "hex") {
      const str = "0123456789ABCDEF";
      let result = "#";
      for (let i = 0; i < 6; i++)
        result = result + str[generateRandomMax(16)] ;
      setBgColor(result);
    }else{
        const a = generateRandomMax(256);
        const b = generateRandomMax(256);
        const c = generateRandomMax(256);
        
        setBgColor(`rgb(${a}, ${b}, ${c})`)
    }
  };

  useEffect(()=>{
    generateRandom();
  },[colorType])

  return (
    <div className="my-20">
      <h1 className="text-2xl">Project2 - Random Color Generator</h1>

      <div
        className="my-5 w-150 mx-auto p-5 h-150"
        style={{ backgroundColor: bgColor }}
      >
        <button className="btn" onClick={() => setColorType("hex")}>HEX Color</button>
        <button  className="btn"  onClick={() => setColorType("rgb")}>RGB Color</button>
        <button  className="btn"  onClick={generateRandom}>Generate Random Color</button>

        <h1 className="flex justify-center items-center text-3xl my-20">{colorType} : {bgColor}</h1>
      </div>
    </div>
  );
};
