export const saveFormDataToLocalStorage = (formData: any) => {
  const existingData = localStorage.getItem('formData');
  console.log(existingData)
  const existingArray = existingData ? JSON.parse(existingData) : [];
  existingArray.push(formData);
  const updatedData = JSON.stringify(existingArray);
  console.log(updatedData)
  localStorage.setItem('formData', updatedData);
  console.log(localStorage.getItem('formData'))
};

export const loadFormDataFromLocalStorage = () => {

  // localStorage.clear();
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : [];
};