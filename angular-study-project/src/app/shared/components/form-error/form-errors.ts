const errorsConfig = {
  min: 'This value should be greater or equal',
  max: 'This value should be less or equal',
  maxlength: 'Length should be less or equal',
  minlength: 'Length should be greater or equal',
  pattern: 'Domain should be',
  emailExist: 'This email is already registered',
  email: 'Type correct email'
}

export const setError = (error: String, errors: Object): String => {
  if (error === 'email' || error === 'emailExist') {
    return selectConfigMessage(error);
  }
  if (error === 'min') {
    const minValue = errors[`${error}`].min;
    return `${selectConfigMessage(error)} ${minValue}`;
  }
  if (error === 'max') {
    const maxValue = errors[`${error}`].max;
    return `${selectConfigMessage(error)} ${maxValue}`;
  }
  if (error === 'maxlength') {
    const maxLength = errors[`${error}`].requiredLength;
    const actualLength = errors[`${error}`].actualLength;
    return `${selectConfigMessage(error)} ${maxLength} symbols. Now is ${actualLength}`;
  }
  if (error === 'minlength') {
    const minLength = errors[`${error}`].requiredLength;
    const actualLength = errors[`${error}`].actualLength;
    return `${selectConfigMessage(error)} ${minLength} symbols. Now is ${actualLength}`;
  }
  if (error === 'pattern') {
    const pattern = errors[`${error}`].requiredPattern;
    return selectConfigMessage(error) + ' @gmail.com';
  }
  return '';
}

const selectConfigMessage = (error: String) => {
  return errorsConfig[`${error}`];
}