"use client";

import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import Typography from "@/components/common/Typography";
import Paper from "@/components/common/Paper";
import Box from "@/components/common/Box";
import Stack from "@/components/common/Stack";

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

export default function ResetPassForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    

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
                    type={confirmShowPassword ? "text" : "password"}
                    rightElement={
                        confirmShowPassword 
                            ? <EyeOff size={24} /> 
                            : <Eye size={24} />
                    }
                    onRightElementClick={() => setConfirmShowPassword(prev => !prev)}
                />

                <Button className="w-full">
                    Guardar Contraseña
                </Button>
            </Stack>
        </Paper>
    )
}