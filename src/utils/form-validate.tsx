export const nameValidate = {
  required: {
    value: true,
    message: 'Please enter username',
  },
  minLength: {
    value: 6,
    message: 'Username must be at least 6 characters long',
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: 'Please enter an email adress',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Email adress is not valid',
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: 'Please enter password',
  },
  minLength: {
    value: 6,
    message: 'Password must be at least 6 characters long',
  },
};
