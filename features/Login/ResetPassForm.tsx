"use client";

import TextField from "@/components/common/UI/TextField"
import Button from "@/components/common/UI/Button"
import Typography from "@/components/common/UI/Typography";
import Paper from "@/components/common/UI/Paper";
import Stack from "@/components/common/UI/Stack";
import Form from "@/components/common/UI/Form";
import useForm from "@/hooks/useForm";

import { validatePassword, validateConfirmPassword } from "@/utils/validators";
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

export default function ResetPassForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    
    const form = useForm({
        initialValues: {
            password: "",
            confirmPassword: "",
        },

        validators: {
            password: validatePassword,
            confirmPassword: validateConfirmPassword,
        },

        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <Paper className="w-full max-w-md p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Reestablecer Contraseña
            </Typography>

            <Stack spacing={4}>
                <Stack spacing={1}>
                    <Typography variant="body">
                        Ingresa una nueva contraseña.
                    </Typography>

                    <TextField
                        label="Contraseña"
                        value={form.values.password}
                        error={form.errors.password}
                        onChange={form.handleChange("password")}
                        onBlur={form.handleBlur("password")}
                        type={showPassword ? "text" : "password"}
                        rightElement={
                            showPassword 
                                ? <EyeOff size={24} /> 
                                : <Eye size={24} />
                        }
                        onRightElementClick={() => setShowPassword(prev => !prev)}
                    />
                </Stack>
                

                <TextField
                    label="Confirmar Contraseña"
                    value={form.values.confirmPassword}
                    error={form.errors.confirmPassword}
                    onChange={form.handleChange("confirmPassword")}
                    onBlur={form.handleBlur("confirmPassword")}
                    type={confirmShowPassword ? "text" : "password"}
                    rightElement={
                        confirmShowPassword 
                            ? <EyeOff size={24} /> 
                            : <Eye size={24} />
                    }
                    onRightElementClick={() => setConfirmShowPassword(prev => !prev)}
                />

                <Button className="w-full" type="submit">
                    Guardar Contraseña
                </Button>
            </Stack>
        </Paper>
    )
}