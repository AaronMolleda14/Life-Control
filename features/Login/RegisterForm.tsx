"use client"
import Typography from "@/components/common/UI/Typography"
import TextField from "@/components/common/UI/TextField"
import Button from "@/components/common/UI/Button"
import Paper from "@/components/common/UI/Paper"
import Box from "@/components/common/UI/Box"
import Stack from "@/components/common/UI/Stack"
import DatePicker from "@/components/common/UI/DatePicker"
import Form from "@/components/common/UI/Form"
import useForm from "@/hooks/useForm";

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Dayjs } from "dayjs"
import { 
    validateEmail, 
    validatePassword, 
    validateMinLengthRequired, 
    validateRequired, 
    validateConfirmPassword 
} from "@/utils/validators"

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false)

    const form = useForm({
        initialValues: {
            email: "",
            birthDate: null as Dayjs | null,
            name: "",
            paternalSurname: "",
            maternalSurname: "",
            password: "",
            confirmPassword: "",
        },

        validators: {
            email: validateEmail,
            birthDate: value => validateRequired(value, "Fecha de nacimiento"),
            name: value => validateMinLengthRequired(value, "Nombre", 3),
            paternalSurname: value => validateMinLengthRequired(value, "Apellido paterno", 3),
            maternalSurname: value => validateMinLengthRequired(value, "Apellido materno", 3),
            password: validatePassword,
            confirmPassword: validateConfirmPassword,
        },

        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <Paper className=" w-full max-w-2xl p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Crear una Cuenta
            </Typography>

            <Form onSubmit={form.handleSubmit}>
                <Stack spacing={4}>
                    <Stack spacing={4} direction="row">
                        <TextField
                            label="Correo"
                            value={form.values.email}
                            error={form.errors.email}
                            onChange={form.handleChange("email")}
                            onBlur={form.handleBlur("email")}
                        />

                        <DatePicker 
                            label="Fecha de Nacimiento"
                            value={form.values.birthDate as Dayjs | null}
                            onChange={date => form.setValue("birthDate", date)}
                        />
                    </Stack>
                    

                    <Stack spacing={4} direction="row">
                        <TextField
                            label="Nombre"
                            value={form.values.name}
                            error={form.errors.name}
                            onChange={form.handleChange("name")}
                            onBlur={form.handleBlur("name")}
                        />

                        <TextField 
                            label="Apellido Paterno"
                            value={form.values.paternalSurname}
                            error={form.errors.paternalSurname}
                            onChange={form.handleChange("paternalSurname")}
                            onBlur={form.handleBlur("paternalSurname")}
                        />
                        
                        <TextField 
                            label="Apellido Materno"
                            value={form.values.maternalSurname}
                            error={form.errors.maternalSurname}
                            onChange={form.handleChange("maternalSurname")}
                            onBlur={form.handleBlur("maternalSurname")}
                        />
                    </Stack>

                    <Stack spacing={4} direction="row">
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
                    </Stack>

                    <Stack spacing={1}>
                        <Button className="w-full" type="submit">
                            Registrarse
                        </Button>

                        <Box className="flex space-x-1">
                            <Typography>
                                ¿Ya tienes una cuenta?
                            </Typography>
                            <Link href="/">
                                <Typography variant="link">
                                    Inicia Sesión
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Form>
        </Paper>
    )
}