export const convertValue = (value: number): number => value / 10;

export const setTypeColor = (type: string): string => {
  let colorType: string | null = null;
  switch (type) {
    case "normal":
      colorType = "#9fa19f";
      break;
    case "fighting":
      colorType = "#C22E28";
      break;
    case "flying":
      colorType = "#A98FF3";
      break;
    case "poison":
      colorType = "#9141cb";
      break;
    case "ground":
      colorType = "#E2BF65";
      break;
    case "rock":
      colorType = "#afa981";
      break;
    case "bug":
      colorType = "#A6B91A";
      break;
    case "ghost":
      colorType = "#735797";
      break;
    case "steel":
      colorType = "#60a1b8";
      break;
    case "fire":
      colorType = "#EE8130";
      break;
    case "water":
      colorType = "#2980ef";
      break;
    case "grass":
      colorType = "#7AC74C";
      break;
    case "electric":
      colorType = "#fac000";
      break;
    case "psychic":
      colorType = "#F95587";
      break;
    case "ice":
      colorType = "#3dcef3";
      break;
    case "dragon":
      colorType = "#6F35FC";
      break;
    case "dark":
      colorType = "#624d4e";
      break;
    case "fairy":
      colorType = "#ef70ef";
      break;
    case "stellar":
      colorType = "#40b5a5";
      break;
    case "unknown":
      colorType = "#68a090";
      break;
    default:
      colorType = "#808080";
      break;
  }
  return colorType;
};
