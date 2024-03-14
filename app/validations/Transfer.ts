import * as yup from 'yup';

const transferValidationSchema = yup.object().shape({
  amount: yup
    .string()
    .required('Amount is required')
    .matches(/^\d*\.?\d*$/, 'Amount must be a number'),
  reason: yup.string().required('Reason is required'),
});

export {transferValidationSchema};
