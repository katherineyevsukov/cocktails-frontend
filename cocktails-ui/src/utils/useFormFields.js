import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setFields] = useState(initialState);

  return [
    fields,
    function(event) {
      setFields({
        ...fields,
        [event.target.name]: event.target.value
      });
    }
  ];
}
