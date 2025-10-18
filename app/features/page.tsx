"use client";

import Link from "next/link";
import { ArrowRight, Calendar, CreditCard, Bell, UserCheck, Clock, Database, BarChart3, Mail, MessageSquare, FileText, DollarSign, MapPin, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function FeaturesPage() {
  const customerFeatures = [
    {
      icon: Calendar,
      title: "Online Booking 24/7",
      description: "Let your customers book anytime, anywhere—no calls, no waiting. A seamless experience that's always available.",
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Accept secure payments directly within the app. Fast, simple, and hassle-free for you and your customers.",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Stay connected with instant updates, reminders, and promotions—delivered straight to users' phones.",
    },
    {
      icon: Star,
      title: "Referral Programs",
      description: "Reward your customers for coming back and spreading the word. Build loyalty and grow your business at the same time.",
    },
  ];

  const crmFeatures = [
    {
      icon: UserCheck,
      title: "Team Planning & Access Control",
      description: "Easily schedule your teams, assign roles, and manage access levels. Each team member only sees what's relevant to them, ensuring an organized, secure, and error-free workflow.",
    },
    {
      icon: Clock,
      title: "Vacation-Time-Off Management",
      description: "Centralize the management of leaves and absences: requests, approvals, and real-time tracking. Simplify planning and avoid scheduling conflicts with a clear, automated system.",
    },
    {
      icon: Database,
      title: "Full CRM with Customer History",
      description: "Keep the full history of your customers: past appointments, preferences, purchases, and communications. Deliver personalized follow-ups and strengthen client relationships with a 360° view.",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Access detailed statistics about your activity: performance, booking trends, and generated revenue. Make strategic decisions based on reliable, real-time data.",
    },
    {
      icon: Mail,
      title: "Smart Reminders",
      description: "Reduce no-shows with automatic reminders sent by email or SMS. Keep clients informed of their upcoming appointments and ensure an optimized schedule.",
    },
    {
      icon: MessageSquare,
      title: "Email & SMS Campaigns",
      description: "Create and send targeted marketing campaigns in just a few clicks. Build customer loyalty, announce new offers, and boost bookings with personalized and effective messages.",
    },
    {
      icon: FileText,
      title: "Internal HR Management",
      description: "Centralize all your HR documents and communications in one place. Securely share internal tickets, expense receipts, pay slips, and other administrative information between managers and employees, directly within the CRM.",
    },
    {
      icon: DollarSign,
      title: "Real-Time Financial Tracking",
      description: "Your CRM is connected to your payment terminal, so revenue updates automatically with each transaction. You can also add cash payments or integrate online payments made through your application. The system calculates your gross and net income based on your company's inflows and expenses, giving you a clear and reliable view of your financial health.",
    },
  ];

  const discoveryFeatures = [
    {
      icon: MapPin,
      title: "Interactive map",
      description: "Let users explore nearby services, locations with an easy-to-use interactive map.",
    },
    {
      icon: Users,
      title: "Client acquisition simplified",
      description: "Smart referrals, local discovery, and targeted campaigns, all designed to grow your client base effortlessly.",
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
              Features
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Here's exactly how our service works—simple, fast, and tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Customer-Facing Features */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Everything Your Customers Need —{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  In One App
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Make it easy for your customers to book, pay, stay updated, and feel valued — all through a single, beautifully designed app tailored to your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {customerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Smart CRM to Simplify{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Workflow
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Plan your team's schedule, manage access and time off, track customer history, and gain insights with smart analytics.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                From automated reminders to targeted email & SMS campaigns — everything you need to streamline operations and grow smarter.
              </p>
            </div>

            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold mb-8 mx-auto block w-fit">
              Awesome Features
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {crmFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section id="directory" className="py-16 md:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Be Seen Where It Matters Most
              </h2>
              <p className="text-lg sm:text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
                With location-based visibility, you connect with people when and where it matters most
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {discoveryFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary-foreground/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-white mb-2">
                Included local directory
              </p>
              <p className="text-secondary-foreground/90 mb-8">
                Manage bookings, track customer activity, send updates, and stay organized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discover how MADYIS can help you launch your complete digital ecosystem in just 10 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-10 h-14 group">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 group">
                  View Pricing
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
