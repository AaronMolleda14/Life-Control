"use client";

import TextField from "@/components/common/UI/TextField"
import Button from "@/components/common/UI/Button"
import Typography from "@/components/common/UI/Typography";
import Paper from "@/components/common/UI/Paper";
import Box from "@/components/common/UI/Box";
import Stack from "@/components/common/UI/Stack";
import Form from "@/components/common/UI/Form";
import useForm from "@/hooks/useForm";

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

import { validateEmail, validatePassword } from "@/utils/validators";

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validators: {
            email: validateEmail,
            password: validatePassword,
        },

        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <Paper className="w-full max-w-md p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Life Control
            </Typography>

            <Form onSubmit={form.handleSubmit}>
                <Stack spacing={4}>
                    <TextField
                        label="Correo"
                        value={form.values.email}
                        error={form.errors.email}
                        onChange={form.handleChange("email")}
                        onBlur={form.handleBlur("email")}
                    />

                    <Stack spacing={1}>
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

                        <Box className="text-right">
                            <Link href="/forgot-password">
                                <Typography variant="link">
                                    ¿Olvidaste tu contraseña?
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                    
                    <Stack spacing={1}>
                        <Button className="w-full" type="submit">
                            Iniciar sesión
                        </Button>

                        <Box className="flex space-x-1">
                            <Typography>
                                ¿Necesitas una cuenta?
                            </Typography>
                            <Link href="/register">
                                <Typography variant="link">
                                    Registrarse
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Form>
        </Paper>
    )
}