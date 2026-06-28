import { useState } from "react";

type Validator = (value: unknown, values?: Record<string, unknown>) => string;

interface UseFormProps<T> {
    initialValues: T;

    validators?: Partial<Record<keyof T, Validator>>;

    onSubmit?: (values: T) => void;
}

export default function useForm<T extends Record<string, unknown>>({
    initialValues,
    validators = {},
    onSubmit,
}: UseFormProps<T>) {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

    function setValue(field: keyof T, value: unknown) {
        setValues(prev => ({
            ...prev,
            [field]: value,
        }));
    }

    function validateField(field: keyof T) {
        const validator = validators[field];

        if (!validator) return true;

        const error = validator(values[field], values);

        setErrors(prev => ({
            ...prev,
            [field]: error,
        }));

        return !error;
    }

    function validateForm() {
        let isValid = true;

        const newErrors: Partial<Record<keyof T, string>> = {};

        for (const field in validators) {
            const validator = validators[field];

            if (!validator) continue;

            const error = validator(values[field], values);

            newErrors[field] = error;

            if (error) {
                isValid = false;
            }
        }

        setErrors(newErrors);

        return isValid;
    }

    function handleChange( field: keyof T) {
        return (
            e: React.ChangeEvent<
                HTMLInputElement
            >
        ) => {

            setValue(
                field,
                e.target.value
            );
        };
    }

    function handleBlur(field: keyof T) {
        return () => {

            setTouched(prev => ({
                ...prev,
                [field]: true,
            }));

            validateField(field);
        };
    }

    function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        onSubmit?.(values);
    }

    function resetForm() {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }

    return {
        values,
        errors,
        touched,

        setValue,
        handleChange,
        handleBlur,

        validateField,
        validateForm,

        handleSubmit,
        resetForm,
    };
}