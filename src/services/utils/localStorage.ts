import { parse } from "path";

export const saveFormDataToLocalStorage = (formData: any) => {
  const existingData = localStorage.getItem('formData');
  const existingArray = existingData ? JSON.parse(existingData) : [];
  existingArray.unshift(formData);
  const updatedData = JSON.stringify(existingArray);
  localStorage.setItem('formData', updatedData);
};

export const loadFormDataFromLocalStorage = () => {

  const formData = localStorage.getItem('formData');
  if (formData) {
    const parsedData = JSON.parse(formData);
    return parsedData;
  } else {
    return [];
  }
};