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
            {/* Desktop connecting lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-px">
              <div className="absolute top-0 left-1/6 right-1/3 border-t-2 border-dashed border-success/30"></div>
              <div className="absolute top-0 left-1/2 right-1/6 border-t-2 border-dashed border-success/30"></div>
            </div>

            {/* Steps */}
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="relative z-10 border border-border rounded-lg p-6 text-center h-full flex flex-col hover:border-success/60 transition-colors">
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

                {/* Arrow on desktop (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 z-20">
                    <svg
                      className="w-8 h-8 text-success/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
