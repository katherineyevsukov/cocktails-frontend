import { useState } from "react";

function mapValidationErrors(yupError) {
  let errors = {};
  yupError.inner.forEach((valErr, index) => {
    errors[valErr.path] = yupError.errors[index];
  });
  return errors;
}

function useYupValidation(schema) {
  const [errors, setErrors] = useState({});
  function validate(data, onValid) {
    return schema.validate(data, { abortEarly: false }).then(
      () => {
        setErrors({});
        onValid(data);
      },
      (err) => {
        setErrors(mapValidationErrors(err));
      }
    );
  }
  return [errors, validate];
}

export default useYupValidation;
