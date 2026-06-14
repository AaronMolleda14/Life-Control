import TextField from "./components/common/TextField";
import Button from "./components/common/Button";
import ThemeToggle from "./components/common/ThemeToggle";

export default function Home() {
  return (
    <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-background
            "
        >
            <div
                className="
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    p-8
                "
            >
                <h1
                    className="
                        mb-6
                        text-center
                        text-3xl
                        font-bold
                        text-primary
                    "
                >
                    Life Control
                </h1>

                <div className="space-y-4">
                    <TextField
                        label="Correo"
                        placeholder="correo@ejemplo.com"
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                    />

                    <Button className="w-full">
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        </main>
  );
}