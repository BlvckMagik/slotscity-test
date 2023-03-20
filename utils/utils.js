const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

export const isEmail = value => {
  return EMAIL_REGEX.test(value);
};

const PASSWORD_REGEX =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;

export const isPassword = value => {
  return PASSWORD_REGEX.test(value);
};

export const isValidName = value => {
  return value.length >= 3;
};

export const isValidTag = value => {
  return value[0] === '@';
};
