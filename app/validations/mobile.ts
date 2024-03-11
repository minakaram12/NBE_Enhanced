import * as Yup from 'yup';

const mobileSchema = Yup.object().shape({
  mobileNumber: Yup.string().required().length(16),
});

export {mobileSchema};
