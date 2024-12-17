export const stringCoverter = (part: string) => {
  return part
    .split(" ")
    .map((word: string, index: number) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

export const formatBodyPartName = (bodyPart: string) => {
  return bodyPart
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert a space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .toLowerCase() // Make the rest of the string lowercase
    .replace(/^([a-z])/, (str) => str.toUpperCase()); // Capitalize the first letter again
};