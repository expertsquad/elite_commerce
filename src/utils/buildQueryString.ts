export const buildQueryString = (
  filter: Record<string, string | string[]>
): string => {
  let query = "";

  Object.entries(filter).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(
        (item) => (query = query ? `${query}&${key}=${item}` : `${key}=${item}`)
      );
    } else {
      query = query ? `${query}&${key}=${value}` : `${key}=${value}`;
    }
  });

  return query;
};
