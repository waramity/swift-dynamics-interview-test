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
  console.log(formData)
  if (formData) {
    const parsedData = JSON.parse(formData);
    // parsedData.sort((a: any, b: any) => {
    //   const timestampA = a.timestamp;
    //   const timestampB = b.timestamp;
    //   return timestampB - timestampA;
    // });
    let sortedInput = parsedData.slice().sort((a: any, b: any) => b.id - a.id);

    console.log(parsedData)
    console.log(sortedInput)
    return sortedInput;
  } else {
    return [];
  }
};