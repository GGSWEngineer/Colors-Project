// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   }

// we have the main palette which is this selected one on top and for each color we are creating a palette to represent its 10 shades 

import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  // newPalette.colors looks like this = {
    // 50: [],
    // 100: [],
    // 200: [], so on
// }

  // we are pushing an object to the each 
  for (let color of starterPalette.colors) {
    // the first color in the getScale function representes the obj of said color, and then the .color gets the hexadecimal code
    let scale = getScale(color.color, 10).reverse();
    for(let i in scale) {
        // newPallete is an Object, .colors gets the property colors which is another Object, [levels[i]], levels[0] is 50, and newPalette.colors[50].push is gonna push this other object in there
        newPalette.colors[levels[i]].push({
            name: `${color.name} ${levels[i]}`,
            id: color.name.toLowerCase().replace(/ /g, "-"),
            hex: scale[i],
            rgb: chroma(scale[i]).css(), // this gives us rgb due to chroma(library help)
            rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")

        })
    }
  }

  return newPalette;

}

function getRange(hexColor) {
    // Returns an array with a darkened hex color, the original hex color, and white.
    const end = "#fff";
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
  }
  
  function getScale(hexColor, numberOfColors) {
    // Generates a color scale based on the input hex color and the number of colors required.
    // The scale transitions from darkened color to original color to white.
    // all of these are hex colors
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
  }


  export { generatePalette }
  