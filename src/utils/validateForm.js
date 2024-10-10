export const validateForm = (formValues) => {
    const errors = {};
  
    if (!formValues.name) {
      errors.name = 'Name is required';
    }
  
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
};
  