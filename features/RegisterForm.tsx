"use client"
import Typography from "@/components/common/Typography"
import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="
                w-full
                max-w-lg
                rounded-2xl
                border
                border-border
                bg-surface
                p-8
            "
        >
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Crear una Cuenta
            </Typography>

            <div className="space-y-4">
                <TextField
                    label="Correo"
                />

                <div className="flex space-x-4">
                    <TextField
                        label="Nombre"
                    />

                    <TextField 
                        label="Apellido"
                    />
                </div>

                <div className="space-y-1">
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

                    <div className="text-right">
                        <Link href="/forgot-password">
                            <Typography variant="link">
                                ¿Olvidaste tu contraseña?
                            </Typography>
                        </Link>
                    </div>
                </div>
                
                <div className="space-y-1">
                    <Button className="w-full">
                        Iniciar sesión
                    </Button>

                    <div className="flex space-x-1">
                        <Typography>
                            ¿Necesitas una cuenta?
                        </Typography>
                        <Link href="/register">
                            <Typography variant="link">
                                Registrarse
                            </Typography>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}