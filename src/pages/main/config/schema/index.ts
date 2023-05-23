import { number, object } from 'yup';

export const numberSchema = number()
  .required('Number is required')
  .typeError('Input must be a number')
  .integer('Number must be an integer')
  .positive('Number must be positive');

export const validationSchema = object().shape({ number: numberSchema });
