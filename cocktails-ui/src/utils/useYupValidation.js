import * as yup from "yup";
import React, { useState } from 'react';

// function useYupValidation(schema) {
//   const [errors, setErrors] = useState({});
  
//   function validate(name, value) {
//     return yup.reach(schema, name)
//     .validate(value, { abortEarly: false }).then(
//       () => {
//         setErrors({ ...errors, [name]: "" });
//       },
//       (err) => {
//         setErrors({ ...errors, [name]: err.errors[0] });
//       }
//     );
//   }
//   return [errors, validate];
// }

function mapValidationErrors(yupError) {
    let errors = {}
    yupError.inner.forEach((valErr, index) => {
      errors[valErr.path] = yupError.errors[index]
    })
    return errors
  }

  function useYupValidation(schema) {
    const [errors, setErrors] = useState({})
    function validate(data, onValid) {
      return schema.validate(data, { abortEarly: false }).then(
        () => {
          setErrors({})
          onValid(data)
        },
        err => {
          setErrors(mapValidationErrors(err))
        }
      )
    }
    return [errors, validate]
  }

export default useYupValidation;
