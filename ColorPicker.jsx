
//import React, { useState } from "react";

//function ColorPicker({ onColorSelect }) {
 // const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  //const [focusedIndex, setFocusedIndex] = useState(null);
 // const [hoverColor, setHoverColor] = useState(null);

 // const colors = [
  //  { name: "Red", hex: "#FF0000" },
   // { name: "Green", hex: "#00FF00" },
   // { name: "Blue", hex: "#0000FF" },
   // { name: "Yellow", hex: "#FFFF00" },
  //  { name: "Cyan", hex: "#00FFFF" },
  //  { name: "Magenta", hex: "#FF00FF" },
 // ];

 // const handleClick = (color) => {
  //  setSelectedColor(color);
   // if (onColorSelect) onColorSelect(color);
 // };

 // const handleMouseEnter = (hex) => {
 //   setHoverColor(hex);
 // };

  //const handleMouseLeave = () => {
   // setHoverColor(null);
 // };

  //const handleFocus = (index) => {
   // setFocusedIndex(index);
 // };

 // const handleBlur = () => {
   // setFocusedIndex(null);
  //};

 // const handleKeyDown = (e, index) => {
   // if (e.key === "Enter" || e.key === " ") {
   //   e.preventDefault();
   //   handleClick(colors[index]);
   // } else if (e.key === "ArrowRight") {
   //   setFocusedIndex((index + 1) % colors.length);
   // } else if (e.key === "ArrowLeft") {
   //   setFocusedIndex((index - 1 + colors.length) % colors.length);
   // }
 // };

 // return (
   // <div className="color-picker">
   //   <h1>Color Picker</h1>
   //   <div className="color-list">
   //     {colors.map((color, index) => (
    //      <div
     //       key={index}
     //       className={`color-item ${focusedIndex === index ? "focused" : ""}`}
     //       style={{ backgroundColor: color.hex }}
     //       onClick={() => handleClick(color)}
     //       onMouseEnter={() => handleMouseEnter(color.hex)}
     //       onMouseLeave={handleMouseLeave}
     //       onFocus={() => handleFocus(index)}
     //       onBlur={handleBlur}
     //       onKeyDown={(e) => handleKeyDown(e, index)}
     //       tabIndex={0}
     //     >
     //       {(selectedColor.hex === color.hex || hoverColor === color.hex) && (
     //         <span className="color-code">
     //           {selectedColor.hex === color.hex
     //             ? selectedColor.name
     //             : color.hex}
     //         </span>
     //       )}
     //     </div>
     //   ))}
     // </div>
   // </div>
 // );
//}

//export default ColorPicker;
