export function validateEmail(value: unknown): string {
    const email = String(value ?? "");

    if (!email.trim()) {
        return "El correo es obligatorio";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        return "Correo inválido";
    }

    return "";
}

export function validatePassword(value: unknown,): string {
    const password = String(value ?? "");

    if (!password) {
        return "La contraseña es obligatoria";
    }

    if (password.length < 8) {
        return "La contraseña debe tener mínimo 8 caracteres";
    }

    if (!/[A-Z]/.test(password)) {
        return "La contraseña debe contener al menos una letra mayúscula"
    }

    if (!/[0-9]/.test(password)) {
        return "La contraseña debe contener al menos un número"
    }

    return "";
}

export function validateRequired(value: unknown, field: string): string {
    const text = String(value ?? "");

    if (!text.trim()) {
        return `${field} es obligatorio`
    }

    return "";
}
export function validateMaxLengthRequired(value: unknown, field: string, max: number): string {
    const text = String(value ?? "");

    if (!text.trim()) {
        return `${field} es obligatorio`
    }

    if (text.length > max) {
        return `Máximo ${max} caracteres`;
    }

    return "";
}

export function validateMinLengthRequired(value: unknown, field: string, min: number): string {
    const text = String(value ?? "");

    if (!text.trim()){
        return `${field} es obligatorio`
    }

    if (text.length < min) {
        return `Mínimo ${min} caracteres`;
    }

    return "";
}

export function validateConfirmPassword(value: unknown,values?: Record<string, unknown>): string {
    const confirmPassword = String(value ?? "");
    const password = String(values?.password ?? "");

    if (!confirmPassword) {
        return "Confirma tu contraseña";
    }

    if (confirmPassword !== password) {
        return "Las contraseñas no coinciden";
    }

    return "";
}