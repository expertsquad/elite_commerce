export const formatBrandName = (brandName: string) => {
  if (!brandName) return "";
  return brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase();
};
