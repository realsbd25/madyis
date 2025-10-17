"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Smartphone, Calendar, Users, CreditCard, Bell, Database, BarChart3, Mail, FileText, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "CHF">("USD");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const prices = {
    monthly: {
      USD: 186,
      EUR: 168,
      CHF: 172,
    },
    annual: {
      USD: 1874,
      EUR: 1690,
      CHF: 1730,
    },
    installation: {
      USD: 125,
      EUR: 113,
      CHF: 116,
    },
  };

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    CHF: "CHF ",
  };

  const features = [
    "Application mobile disponible sur App Store et Google Play, 100% marque blanche à votre nom et logo",
    "Installation complète et configuration personnalisée sous 10 jours ouvrés",
    "Dashboard Manager & CRM ultra-complet pour la gestion des rendez-vous, clients, paiements, équipes, statistiques et RH",
    "Application Staff dédiée avec gestion des plannings, notifications en temps réel et espace RH interne pour le partage de documents et communications internes",
    "Fiches clients détaillées avec historique et préférences",
    "Paiements intégrés via Stripe ou terminal connecté",
    "Outils marketing intégrés : rappels automatiques, relances clients, notifications push personnalisées",
    "Multilingue : français et anglais",
    "Sécurité et conformité internationale (RGPD, hébergement sécurisé)",
    "Support technique prioritaire",
  ];

  const selectedPrice = prices[billingCycle][currency];
  const installationFee = prices.installation[currency];
  const monthlyEquivalent = billingCycle === "annual" ? Math.round(selectedPrice / 12) : selectedPrice;
  const savings = billingCycle === "annual" ? Math.round((prices.monthly[currency] * 12 - prices.annual[currency]) / prices.monthly[currency] * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Our Pricing
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              One plan. All features. Zero hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Currency & Billing Selector */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-muted-foreground">Currency:</span>
                <Select value={currency} onValueChange={(value: "USD" | "EUR" | "CHF") => setCurrency(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="CHF">CHF</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-muted-foreground">Billing:</span>
                <div className="flex items-center rounded-lg border border-border p-1 bg-muted/30">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      billingCycle === "monthly"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("annual")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all relative ${
                      billingCycle === "annual"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Annual
                    {savings > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        Save {savings}%
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <Card className="border-4 border-primary/20 shadow-2xl bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
              <CardHeader className="text-center pb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 mx-auto">
                  PACKAGE COMPLET
                </div>
                <CardTitle className="text-4xl font-bold mb-2">
                  {currencySymbols[currency]}{monthlyEquivalent}
                  <span className="text-xl text-muted-foreground font-normal">/mois</span>
                </CardTitle>
                {billingCycle === "annual" && (
                  <p className="text-muted-foreground mb-2">
                    Facturé annuellement à {currencySymbols[currency]}{selectedPrice}
                  </p>
                )}
                {billingCycle === "monthly" && (
                  <p className="text-muted-foreground mb-2">
                    Facturé mensuellement
                  </p>
                )}
                <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-medium">
                  + Frais d'installation uniques de {currencySymbols[currency]}{installationFee}
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="mb-8">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full text-lg h-14 bg-primary hover:bg-primary/90 group">
                      Commencer Maintenant
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Ce qui est inclus</h3>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Check className="h-3 w-3 text-primary group-hover:text-primary-foreground" />
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                All prices exclude VAT. Cancel anytime, no long-term commitment required.
              </p>
              <p className="text-sm text-muted-foreground">
                Need a custom solution for your enterprise? <Link href="/contact" className="text-primary hover:underline font-medium">Contact our sales team</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Y a-t-il des frais d'installation?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, des frais d'installation uniques de {currencySymbols[currency]}{installationFee} s'appliquent pour couvrir la configuration personnalisée, le développement de l'application et la soumission aux stores (App Store et Google Play).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Puis-je annuler à tout moment?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, vous pouvez annuler votre abonnement à tout moment. Il n'y a pas de contrat à long terme ni de frais d'annulation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Que se passe-t-il après la période de lancement de 10 jours?
                  </h3>
                  <p className="text-muted-foreground">
                    Votre application est mise en ligne sur l'App Store et Google Play, et votre abonnement mensuel/annuel commence. Nous fournissons un support continu, des mises à jour et une maintenance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Offrez-vous des remboursements?
                  </h3>
                  <p className="text-muted-foreground">
                    Nous offrons une garantie de remboursement de 30 jours. Si vous n'êtes pas satisfait de notre service dans les 30 premiers jours, nous vous rembourserons intégralement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Quelles sont les langues supportées?
                  </h3>
                  <p className="text-muted-foreground">
                    L'application et le CRM sont disponibles en français et en anglais. Vous pouvez basculer entre les langues à tout moment dans les paramètres.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Launch Your Ecosystem?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses already using MADYIS to power their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-10 h-14 group">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
