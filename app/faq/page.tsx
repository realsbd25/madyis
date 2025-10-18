"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, MessageCircle, Clock, Shield, Users, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/motion-components";

export default function FAQPage() {
  const faqs = [
    {
      question: "How long until my app is live?",
      answer: "Under 10 days after receiving your materials (logo, services, etc.)",
      icon: Clock,
      category: "Getting Started",
    },
    {
      question: "Will the app have my name and brand?",
      answer: "Yes. Your logo, name, and colors appear in the app stores.",
      icon: Shield,
      category: "Branding",
    },
    {
      question: "Do I need technical skills?",
      answer: "Not at all. The platform is made for non-technical users.",
      icon: Users,
      category: "Technical",
    },
    {
      question: "Will my clients understand how to use it?",
      answer: "Yes. The interface is intuitive and similar to modern apps.",
      icon: Zap,
      category: "User Experience",
    },
    {
      question: "Is support available?",
      answer: "Yes. A dedicated team is here to assist you anytime.",
      icon: MessageCircle,
      category: "Support",
    },
    {
      question: "Do I keep 100% of my revenue?",
      answer: "Yes. MADYIS takes no commission on your bookings.",
      icon: DollarSign,
      category: "Pricing",
    },
    {
      question: "Can I cancel anytime?",
      answer: "A 12-month commitment is required. After that, you are free.",
      icon: HelpCircle,
      category: "Subscription",
    },
  ];

  const additionalFaqs = [
    {
      question: "Y a-t-il des frais d'installation?",
      answer: "Oui, des frais d'installation uniques de $125 USD (€113 EUR / CHF 116) s'appliquent pour couvrir la configuration personnalisée, le développement de l'application et la soumission aux stores (App Store et Google Play).",
      category: "Pricing",
    },
    {
      question: "Puis-je annuler à tout moment?",
      answer: "Un engagement de 12 mois est requis. Après cela, vous pouvez annuler votre abonnement à tout moment sans frais d'annulation.",
      category: "Subscription",
    },
    {
      question: "Que se passe-t-il après la période de lancement de 10 jours?",
      answer: "Votre application est mise en ligne sur l'App Store et Google Play, et votre abonnement mensuel/annuel commence. Nous fournissons un support continu, des mises à jour et une maintenance.",
      category: "Getting Started",
    },
    {
      question: "Offrez-vous des remboursements?",
      answer: "Nous offrons une garantie de remboursement de 30 jours. Si vous n'êtes pas satisfait de notre service dans les 30 premiers jours, nous vous rembourserons intégralement.",
      category: "Pricing",
    },
    {
      question: "Quelles sont les langues supportées?",
      answer: "L'application et le CRM sont disponibles en français et en anglais. Vous pouvez basculer entre les langues à tout moment dans les paramètres.",
      category: "Technical",
    },
    {
      question: "Comment fonctionnent les paiements intégrés?",
      answer: "Les paiements sont intégrés via Stripe ou un terminal connecté. Vos clients peuvent payer directement dans l'application de manière sécurisée. Vous conservez 100% de vos revenus - MADYIS ne prend aucune commission.",
      category: "Pricing",
    },
    {
      question: "Puis-je gérer plusieurs emplacements ou équipes?",
      answer: "Oui, absolument. Le CRM vous permet de gérer plusieurs emplacements, équipes et services depuis un seul tableau de bord. Chaque membre du personnel a sa propre application dédiée.",
      category: "Features",
    },
    {
      question: "Les données sont-elles sécurisées et conformes au RGPD?",
      answer: "Oui, toutes vos données sont hébergées de manière sécurisée et nous sommes entièrement conformes au RGPD et aux réglementations internationales sur la protection des données.",
      category: "Security",
    },
  ];

  const categories = Array.from(new Set([...faqs, ...additionalFaqs].map(faq => faq.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
              >
                <HelpCircle className="w-10 h-10 text-primary" />
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Questions Fréquentes
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Trouvez les réponses à toutes vos questions sur MADYIS, notre plateforme, et comment elle peut transformer votre entreprise.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Quick FAQs - Card Style */}
            <FadeIn delay={0.2}>
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                  Questions les plus fréquentes
                </h2>

                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
                  {faqs.map((faq, index) => {
                    const Icon = faq.icon;
                    return (
                      <StaggerItem key={index}>
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                                    {faq.question}
                                  </h3>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    {faq.answer}
                                  </p>
                                  <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                    {faq.category}
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* Additional FAQs - Accordion Style */}
            <ScaleIn delay={0.4}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                  Plus de questions et réponses
                </h2>

                <Card className="border-2 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <Accordion type="single" collapsible className="space-y-4">
                      {additionalFaqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-2 border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <div className="flex items-start space-x-3">
                              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-semibold text-foreground pr-4">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4 pl-8">
                            <p className="leading-relaxed">{faq.answer}</p>
                            <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {faq.category}
                            </span>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Vous avez d'autres questions?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Notre équipe est là pour vous aider. Contactez-nous et nous répondrons à toutes vos questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 group">
                      Contactez-nous
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/pricing">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg px-10 h-14 group">
                      Voir les tarifs
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
