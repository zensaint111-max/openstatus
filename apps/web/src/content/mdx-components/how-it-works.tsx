"use client";

import { Monitor, Bell, Globe } from "lucide-react";
import React from "react";

interface HowItWorksStep {
  number: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function HowItWorks() {
  const steps: HowItWorksStep[] = [
    {
      number: 1,
      title: "Add your monitors",
      icon: <Monitor className="w-8 h-8" />,
      description:
        "Connect your websites and APIs in seconds. Set check frequency and regions.",
    },
    {
      number: 2,
      title: "Get notified instantly",
      icon: <Bell className="w-8 h-8" />,
      description:
        "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    },
    {
      number: 3,
      title: "Share your status",
      icon: <Globe className="w-8 h-8" />,
      description: "Publish a beautiful public status page to keep your users informed.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How it works</h2>
          <p className="text-muted-foreground text-lg">
            Simple steps to get started with OpenStatus
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center">
                {/* Card */}
                <div className="relative z-10 border border-border rounded-lg p-6 text-center h-full flex flex-col hover:border-success/60 transition-colors w-full">
                  {/* Numbered badge */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 text-success">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Connector line to next step (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-success/50 to-transparent z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
