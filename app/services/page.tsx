import { Services } from "@/components/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-16">
                <Services />
            </main>
            <Footer />
        </div>
    )
} 