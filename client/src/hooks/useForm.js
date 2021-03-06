import { useState } from "react";

// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };
 
    return [value, handleChanges]
}