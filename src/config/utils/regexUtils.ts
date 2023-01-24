const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const copFormat = (value: number | string) =>
  value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

const numbers = /^\d+$/;

export default {
  emailRegex,
  copFormat,
  numbers,
};
