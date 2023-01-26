import React, { useState, useEffect } from "react";

const useForm = (callback, validate, ...values) => {
    const [inputs, setInputs] = useState(values);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log(inputs)

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(inputs));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return {
        handleChange,
        handleSubmit,
        inputs,
        errors,
    }
}

export default useForm;