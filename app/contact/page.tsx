import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-16">
                <Contact />
            </main>
            <Footer />
        </div>
    )
} 