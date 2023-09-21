export const saveFormDataToLocalStorage = (formData: any) => {
  localStorage.setItem('formData', JSON.stringify(formData));
};

export const loadFormDataFromLocalStorage = () => {
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : {};
};