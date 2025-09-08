import { Portfolio } from "@/components/portfolio"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-16">
                <Portfolio />
            </main>
            <Footer />
        </div>
    )
} 