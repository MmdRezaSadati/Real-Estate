const SeparationNumber = (num: number) => {
  const reducer = Intl.NumberFormat("en", {
    notation: "compact",
  });
  const newPrice = reducer.format(num);
  return newPrice;
};
export default SeparationNumber;
