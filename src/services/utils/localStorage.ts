export const saveFormDataToLocalStorage = (formData: any) => {
  const existingData = localStorage.getItem('formData');
  const existingArray = existingData ? JSON.parse(existingData) : [];
  existingArray.push(formData);
  const updatedData = JSON.stringify(existingArray);
  localStorage.setItem('formData', updatedData);
};

export const loadFormDataFromLocalStorage = () => {

  // localStorage.clear();
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : [];
};