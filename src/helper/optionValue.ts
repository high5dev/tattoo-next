export const optionValue = (part: string) => {
    return part
      .split(" ")
      .map((word: string, index: number) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  };