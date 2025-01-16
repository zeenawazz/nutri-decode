import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import VoiceCommandSection from './components/VoiceCommandSection'
import RegionalComplianceSection from './components/RegionalComplianceSection'
import MultiLanguageSection from './components/MultiLanguageSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import ClientWrapper from './components/ClientWrapper'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <ClientWrapper>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VoiceCommandSection />
        <RegionalComplianceSection />
        <MultiLanguageSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
        <Footer />
        <FloatingActionButton />
      </ClientWrapper>
    </main>
  )
}

