export const getLocalStorageData = (fieldName: string) => {
  const data = localStorage.getItem(fieldName);
  if (!data) {
    return null;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

export const setLocalStorageData = (fieldName: string, data: unknown) => {
  const stringifiedData =
    typeof data !== "string" ? JSON.stringify(data) : data;
  localStorage.setItem(fieldName, stringifiedData);
};
