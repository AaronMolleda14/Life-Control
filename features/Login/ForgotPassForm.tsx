"use client";

import TextField from "@/components/common/UI/TextField";
import Button from "@/components/common/UI/Button";
import Typography from "@/components/common/UI/Typography";
import Paper from "@/components/common/UI/Paper";
import Stack from "@/components/common/UI/Stack";
import Form from "@/components/common/UI/Form";
import useForm from "@/hooks/useForm";

import { validateEmail } from "@/utils/validators";
import { useState, useEffect } from "react";

export default function ForgotPassForm() {
    const [emailSent, setEmailSent] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const isOnTimer = secondsLeft > 0;

    const handleSubmit = () => {
        setEmailSent(true);
        setSecondsLeft(30);
    }

    const form = useForm({
        initialValues: {
            email: "",
        },

        validators: {
            email: validateEmail,
        },

        onSubmit: values => {
            console.log(values)
            handleSubmit()
        }
    })

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

    return (
        <Paper className="w-full max-w-lg p-8">
            <Typography variant="h1" className="text-center text-primary mb-6" >
                Recuperar Cuenta
            </Typography>

            <Form onSubmit={form.handleSubmit}>
                <Stack spacing={4}>
                    <Typography variant="body">
                        Ingresa tu correo para recuperar tu cuenta.
                        
                    </Typography>

                    <TextField
                        label="Correo"
                        value={form.values.email}
                        error={form.errors.email}
                        onChange={form.handleChange("email")}
                        onBlur={form.handleBlur("email")}
                    />

                    <Typography variant="body">
                        Si el correo ingresado tiene una cuenta registrada, 
                        recibirás un link para reestablecer tu contraseña.
                    </Typography>

                    <Stack spacing={1}>
                        <Button className="w-full" disabled={isOnTimer} type="submit">
                            {isOnTimer ? `Reenviar en ${secondsLeft}s` : "Enviar"}
                        </Button>
                    
                        {emailSent && (
                            <Typography className="text-primary-deep" variant="note">
                                Revisa tu bandeja de entrada. Si no recibiste ningun correo presiona enviar nuevamente.    
                            </Typography>
                        )}
                    </Stack>    
                </Stack>
            </Form>
        </Paper>
    )
}