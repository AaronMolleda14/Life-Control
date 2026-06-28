import LoginForm from "@/features/Login/LoginForm";

export default function Home() {
    return (
        <main className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-background
        ">
            <LoginForm />
        </main>
    );
}