"use client"
import Typography from "@/components/common/Typography"
import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import Paper from "@/components/common/Paper"
import Box from "@/components/common/Box"
import Stack from "@/components/common/Stack"
import DatePicker from "@/components/common/DatePicker"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Dayjs } from "dayjs"

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false)
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null)

    return (
        <Paper className=" w-full max-w-2xl p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Crear una Cuenta
            </Typography>

            <Stack spacing={4}>
                <Stack spacing={4} direction="row">
                    <TextField
                        label="Correo"
                    />

                    <DatePicker 
                        label="Fecha de Nacimiento"
                        value={birthDate}
                        onChange={setBirthDate}
                    />
                </Stack>
                

                <Stack spacing={4} direction="row">
                    <TextField
                        label="Nombre"
                    />

                    <TextField 
                        label="Apellido Paterno"
                    />
                    
                    <TextField 
                        label="Apellido Materno"
                    />
                </Stack>

                <Stack spacing={4} direction="row">
                    <TextField
                    label="Contraseña"
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
                    <Button className="w-full">
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
        </Paper>
    )
}