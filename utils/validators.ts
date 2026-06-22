export function validateEmail(
    value: string
): string {
    if (!value.trim()) {
        return "El correo es obligatorio";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
        return "Correo inválido";
    }

    return "";
}

export function validatePassword(
    value: string,
): string {
    if (!value) {
        return "La contraseña es obligatoria";
    }

    if (value.length < 8) {
        return "La contraseña debe tener mínimo 8 caracteres";
    }

    if (!/[A-Z]/.test(value)) {
        return "La contraseña debe contener al menos una letra mayúscula"
    }

    if (!/[0-9]/.test(value)) {
        return "La contraseña debe contener al menos un número"
    }

    return "";
}

export function validateRequired(
    value: string, field: string
): string {
    if (!value.trim()) {
        return `${field} es obligatorio`
    }

    return "";
}
export function validateMaxLengthRequired(
    value: string, field: string, max: number
): string {
    if (!value.trim()) {
        return `${field} es obligatorio`
    }

    if (value.length > max) {
        return `Máximo ${max} caracteres`;
    }

    return "";
}

export function validateMinLengthRequired(
    value: string, field: string, min: number
): string {
    if (!value.trim()){
        return `${field} es obligatorio`
    }

    if (value.length < min) {
        return `Mínimo ${min} caracteres`;
    }

    return "";
}