export const formatProductVariantName = (variantName: string) => {
  if (!variantName && variantName === "Not specified") return "";
  return (
    variantName.charAt(0).toUpperCase() + variantName.slice(1).toLowerCase()
  );
};
