"use client";

import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import Typography from "@/components/common/Typography";
import Paper from "@/components/common/Paper";
import Stack from "@/components/common/Stack";
import { useState, useEffect } from "react";

export default function ForgotPassForm() {
    const [emailSent, setEmailSent] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const isOnTimer = secondsLeft > 0;

    useEffect(() => {
        if (!isOnTimer) return

        const interval = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                }

                return prev - 1;
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [isOnTimer])

    const handleSubmit = () => {
        setEmailSent(true);
        setSecondsLeft(30);
    }

    return (
        <Paper className="w-full max-w-lg p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Recuperar Cuenta
            </Typography>

            <Stack spacing={4}>
                <Typography variant="body">
                    Ingresa tu correo para recuperar tu cuenta.
                    
                </Typography>

                <TextField
                    label="Correo"
                />

                <Typography variant="body">
                    Si el correo ingresado tiene una cuenta registrada, 
                    recibirás un link para reestablecer tu contraseña.
                </Typography>

                <Stack spacing={1}>
                    <Button className="w-full" disabled={isOnTimer} onClick={handleSubmit}>
                        {isOnTimer ? `Reenviar en ${secondsLeft}s` : "Enviar"}
                    </Button>
                
                    {emailSent && (
                        <Typography className="text-primary-deep" variant="note">
                            Revisa tu bandeja de entrada. Si no recibiste ningun correo presiona enviar nuevamente.    
                        </Typography>
                    )}
                </Stack>    
            </Stack>
        </Paper>
    )
}