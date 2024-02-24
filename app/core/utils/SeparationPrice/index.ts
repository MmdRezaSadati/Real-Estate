const SeparationPrice = (price: number | undefined) => {
  let newPrice = price ? Math.round(price).toString() : "0";
  const CategorizedPrice = newPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return CategorizedPrice;
};
export default SeparationPrice;
