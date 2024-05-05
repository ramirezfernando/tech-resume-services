"use client";

import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { faqs } from "../data/data";

const FAQsHeader = ({ title, subtitle }: { title: string; subtitle: ReactNode }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

export default function FAQs() {
  return (
    <section className="w-full py-4 font-light mt-8">
      <FAQsHeader title="Frequently Asked Questions" 
      subtitle={(<span>
        {"Do you have a question that isn't answered here? Email me"}  <a className="underline" href="mailto:ramirez.fernando2003@gmail.com">here</a>.
      </span>)}/>

      <div className="mx-auto lg:max-w-6xl px-3 font-light text-[#444240]">

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger key={index}>{faq.emoji} {faq.question}</AccordionTrigger>
            <AccordionContent key={index}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>

        ))}
    </Accordion>
        
      </div>
    </section>
  );
}
