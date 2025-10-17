"use client";

import Link from "next/link";
import { ArrowRight, Upload, Eye, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HowItWorksPage() {
  const timeline = [
    {
      day: "Day 1",
      icon: Upload,
      title: "Just Send the Basics — We'll Do the Rest",
      description: "Upload your logo, list your services, and share your brand colors. We'll create a fully personalized experience for your business.",
      color: "from-primary to-accent",
    },
    {
      day: "Day 3",
      icon: Eye,
      title: "Your App Preview Is Ready",
      description: "Explore the prototype we've tailored for you. Share your feedback and let's make it perfect.",
      color: "from-accent to-primary",
    },
    {
      day: "Day 7",
      icon: Rocket,
      title: "Your App Is Ready to Launch",
      description: "The final version is complete and set for submission. Review everything and let us know when you're ready to go live.",
      color: "from-primary to-secondary",
    },
    {
      day: "Day 10",
      icon: CheckCircle2,
      title: "Your App Is Now Live",
      description: "Now available on the App Store and Google Play—ready for users to download and explore.",
      color: "from-secondary to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Let's Walk You Through It
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Here's exactly how our service works—simple, fast, and tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary opacity-20" />

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-24">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row items-center gap-8 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content Card */}
                      <div
                        className={`w-full md:w-5/12 ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                          <CardContent className="p-8">
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm mb-4`}
                            >
                              {item.day}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Center Icon */}
                      <div className="relative flex items-center justify-center w-full md:w-2/12">
                        <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}>
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alignment */}
                      <div className="hidden md:block w-5/12" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MADYIS
                </span>
                ?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                A complete solution designed for businesses that want to scale fast without technical complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                    <span className="text-3xl font-bold">10</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Days to Launch</h3>
                  <p className="text-muted-foreground">
                    From concept to app stores in just 10 days. No technical knowledge required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                    <span className="text-3xl font-bold">100%</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">White Label</h3>
                  <p className="text-muted-foreground">
                    Your brand, your colors, your identity. No MADYIS branding on your app.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                    <span className="text-3xl font-bold">24/7</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Always Available</h3>
                  <p className="text-muted-foreground">
                    Your customers can book and pay anytime, anywhere. Never miss an opportunity.
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
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses already using MADYIS to power their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 group">
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 h-14 group">
                  Contact Sales
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
