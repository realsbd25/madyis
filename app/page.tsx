"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Calendar, CreditCard, Bell, Users, TrendingUp, Globe, MapPin, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem, Floating, Pulse } from "@/components/animations/motion-components";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { useEffect } from "react";

export default function HomePage() {
  const features = [
    {
      icon: Smartphone,
      title: "Native mobile application in your name",
      description: "Your official application on Apple & Google Play: services, bookings, payments, push notifications. 100% white label.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Bookings, payments, revenue & marketing",
      description: "A single dashboard to run the business: appointments, takings, financial views (gross/net revenue, costs, margin) and marketing campaigns. Filters by service and by team.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Staff, HR and application per member",
      description: "Schedules, goals, performance, and a dedicated application for each staff member: contracts, payment receipts, internal documents. Everything is connected.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const crmFeatures = [
    "STAFF AND ROLES · schedules · goals · performance",
    "EXPENSES AND BUDGET · cost tracking · exports",
    "HR AND DOCUMENTS · contracts · payment receipts · internal documents",
    "BOOKINGS AND PAYMENTS · no-shows · follow ups",
    "MARKETING · campaigns · push notifications · loyalty",
    "REPORTING · gross/net revenue · margin · clear tables",
    "CLIENT APPLICATION ON THE STORES · Apple App Store and Google Play, in your name",
    "INDIVIDUAL STAFF APPLICATION · each member has their own application to manage their agenda, communicate internally and access important documents",
  ];

  const countries = [
    { name: "Brasil", users: 50 },
    { name: "Canada", users: 150 },
    { name: "France", users: 45 },
    { name: "Russia", users: 85 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,182,255,0.1),transparent_50%)]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(40,129,181,0.1),transparent_50%)]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <Pulse duration={3}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Star className="h-4 w-4 mr-2 fill-primary animate-pulse" />
                  Trusted by 300+ businesses worldwide
                </div>
              </Pulse>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Your Business-in-a-Box
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4">
                Your entire digital ecosystem, ready in{" "}
                <motion.span
                  className="text-primary font-semibold inline-block"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  10 days
                </motion.span>
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Native full blended mobile application in your name (Apple & Google Play) + Ultra complete CRM. 100% White Label.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <Button size="lg" className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 group relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Watch A Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 group">
                      Launch My Ecosystem
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>

            {/* Feature Cards with Stagger Animation */}
            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm group">
                        <CardContent className="p-6">
                          <motion.div
                            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4 mx-auto`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Reinforcement Line */}
            <ScaleIn delay={1.2}>
              <motion.div
                className="inline-block px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-base md:text-lg font-medium text-foreground">
                  Control operations, finance, marketing and team from a{" "}
                  <span className="text-secondary font-semibold">single dashboard</span>
                </p>
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  The CRM that handles{" "}
                  <motion.span
                    className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    absolutely everything
                  </motion.span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Operations, finance, customer acquisition, team management and marketing. The CRM runs internal management: staff, HR, expenses, reporting. The client facing application handles bookings, payments and loyalty. Both stay synchronized.
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <Card className="border-2 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 gap-6">
                    {crmFeatures.map((feature, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="flex items-start space-x-3 group"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <motion.div
                              className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors"
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Check className="h-3 w-3 text-primary group-hover:text-primary-foreground" />
                            </motion.div>
                          </div>
                          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                            {feature}
                          </p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <FadeIn delay={0.6}>
                    <div className="mt-10 text-center">
                      <Link href="/features">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="lg" className="group">
                            Explore the CRM
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </FadeIn>
                </CardContent>
              </Card>
            </ScaleIn>

            <FadeIn delay={0.8}>
              <div className="mt-12 text-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90">
                      Book a Demo
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Background Pattern with animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </motion.div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <SlideIn direction="left">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                    A worldwide geolocated directory to boost your acquisition
                  </h2>

                  <div className="space-y-4 mb-8">
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Floating duration={2}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                      </Floating>
                      <div>
                        <p className="font-semibold text-xl text-white">More Discovery</p>
                        <p className="text-secondary-foreground/80">More Clients</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Floating duration={2.5}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                      </Floating>
                      <div>
                        <p className="font-semibold text-xl text-white">Zero Effort</p>
                        <p className="text-secondary-foreground/80">Automatic listings</p>
                      </div>
                    </motion.div>
                  </div>

                  <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                    Every MADYIS client is listed in our international directory by country, city and services. Your dedicated profile redirects to your application (bookings, payments) and strengthens your local visibility.
                  </p>

                  <StaggerContainer staggerDelay={0.1} className="space-y-3 mb-8">
                    {[
                      "Global directory",
                      "Filter by city/country/services",
                      "Dedicated profile",
                      "Traffic redirected to your application",
                      "Acquisition channel included",
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="flex items-center space-x-3"
                          whileHover={{ x: 5 }}
                        >
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-white">{item}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <Link href="/features#directory">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-white group">
                        See the directory
                        <Globe className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </SlideIn>

              {/* Right Column - Countries with Animated Counters */}
              <SlideIn direction="right">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Geo-Discovery That Drives Results
                  </h3>
                  <p className="text-secondary-foreground/90 mb-8">
                    Our smart map helps people find and trust businesses closest to them.
                  </p>

                  <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 gap-4">
                    {countries.map((country, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3 mb-3">
                                <motion.div
                                  animate={{ y: [0, -5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                >
                                  <MapPin className="h-6 w-6 text-primary" />
                                </motion.div>
                                <h4 className="text-xl font-bold text-white">{country.name}</h4>
                              </div>
                              <p className="text-3xl font-bold text-primary">
                                <AnimatedCounter end={country.users} prefix="+" />
                              </p>
                              <p className="text-secondary-foreground/80 text-sm">Active Users</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Get Your App Now
                </h2>
              </motion.div>

              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Get started with your own branded app. Accept bookings, engage customers, and grow on the go.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Link href="/pricing">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="text-lg px-12 h-16 bg-primary hover:bg-primary/90 group relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Launch Your Ecosystem
                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
