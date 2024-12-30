import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Rocket, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Web Platform
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A full-featured web application built with Next.js, featuring authentication, 
              real-time updates, and a beautiful user interface.
            </p>
            <div className="space-x-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="h-14 w-14 text-primary" />
                <CardTitle>Fast Performance</CardTitle>
                <CardDescription>
                  Optimized for speed with Next.js and React Server Components
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-14 w-14 text-primary" />
                <CardTitle>Secure by Default</CardTitle>
                <CardDescription>
                  Built-in security features and best practices
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-14 w-14 text-primary" />
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Designed to grow with your needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}