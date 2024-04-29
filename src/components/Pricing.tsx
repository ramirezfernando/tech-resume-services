"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"
import React, { useState } from "react"

type PricingCardProps = {
  title: string
  hourlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingCard = ({ title, hourlyPrice, description, features, actionLabel, popular }: PricingCardProps) => (
  <Card className={`w-72 flex flex-col justify-between py-1 ${popular ? 'border-rose-400' : 'border-zinc-700'} mx-auto sm:mx-0 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors`}>
    <div>
      <CardHeader className="pb-8 pt-4">
        
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            {popular &&
            <div
              className="px-2.5 rounded-xl h-fit w-fit text-sm py-1 bg-zinc-200 text-black bg-gradient-to-r from-orange-400 to-rose-400 ">
              Most Popular
            </div>
            }
        
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">{hourlyPrice ? '$' + hourlyPrice : '$10'}</h3>
          <span className="flex flex-col justify-end text-sm mb-1">{hourlyPrice && "/hour"}</span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel === "Contact Me" ? (
            <a href="mailto:ramirez.fernando2003@gmail.com">{actionLabel}</a>
        ): "Get started"}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function Pricing() {

  const plans = [
    {
      title: "Asynchronous Resume Review",
      description: "Perfect for those who prefer asynchronous communication",
      features: ["Resume Review", "Back-and-forth messaging"],
      actionLabel: "Contact Me",
      popular: false,
    },
    {
      title: "Synchronous Resume Review",
      hourlyPrice: 25,
      description: "Perfect for those who prefer synchronous communication",
      features: ["Resume Review", "One-on-one video call"],
      actionLabel: "Contact Me",
      popular: true,
    },
  ]
  return (
    <div className="py-8 font-light">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} />
        })}
      </section>
    </div>
  )
}