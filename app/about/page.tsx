import { About } from "@/components/about"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-16">
                <About />
            </main>
            <Footer />
        </div>
    )
} 