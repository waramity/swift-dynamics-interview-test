export const saveFormDataToLocalStorage = (formData: any) => {
  const existingData = localStorage.getItem('formData');
  const existingArray = existingData ? JSON.parse(existingData) : [];
  existingArray.push(formData);
  const updatedData = JSON.stringify(existingArray);
  console.log(updatedData)
  localStorage.setItem('formData', existingArray);
};

export const loadFormDataFromLocalStorage = () => {
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : [];
};