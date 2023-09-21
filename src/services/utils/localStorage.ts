import { parse } from "path";
import FormState from "../form/formSlice"

export const saveFormDataToLocalStorage = (formData: any) => {
  const existingData = localStorage.getItem('formData');
  const existingArray = existingData ? JSON.parse(existingData) : [];
  existingArray.unshift(formData);
  const updatedData = JSON.stringify(existingArray);
  localStorage.setItem('formData', updatedData);
};

export const loadFormDataFromLocalStorage = () => {

  // localStorage.clear()
  const formData = localStorage.getItem('formData');
  if (formData) {
    const parsedData = JSON.parse(formData);
    return parsedData;
  } else {
    return [];
  }
};

export const deleteDataFromLocalStorage = (selectedData: any[]) => {

  const localStorageData = loadFormDataFromLocalStorage()

  for (var i = localStorageData.length - 1; i >= 0; i--) {
    for (var j = 0; j < selectedData.length; j++) {
      if (localStorageData[i].key == selectedData[j]) {
        localStorageData.splice(i, 1);
        selectedData.splice(j, 1);
        break; 
      }
    }
  }
  localStorage.setItem('formData', JSON.stringify(localStorageData));
};