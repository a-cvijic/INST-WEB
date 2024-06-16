"use client";
import React from "react";
import { BackgroundBeams } from "../components/background-beams";
import { FlipWords } from "../components/flip-words";
import { TracingBeam } from "../components/tracing-beam";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";

export default function Page() {
  const words = ["Statics", "Mechanics", "Material Resistance"];

  // Testimonials data
  const testimonials = [
    {
      quote: "The guidance provided was exceptional and helped me understand complex topics easily.",
      name: "John Doe",
      title: "Student",
    },
    {
      quote: "I highly recommend their services. They have deep knowledge and great teaching skills.",
      name: "Jane Smith",
      title: "Student",
    },
    {
      quote: "Their expertise and ability to simplify complex topics is unparalleled.",
      name: "Sam Brown",
      title: "Student",
    },
    {
      quote: "They provided me with a clear understanding and confidence in my studies.",
      name: "Alice Johnson",
      title: "Student",
    },
    {
      quote: "A fantastic learning experience that greatly improved my knowledge and skills.",
      name: "Michael Lee",
      title: "Student",
    }
  ] as { quote: string; name: string; title: string; }[];

  return (
    <div className="flex flex-col items-center bg-neutral-950 text-neutral-200">
      {/* Hero Section */}
      <div className="h-screen w-full flex items-center justify-center relative">
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Need Expert Help?
          </h1>
          <p className="text-2xl md:text-4xl text-neutral-500 mt-4">
            With over 40 years of experience, we offer top-notch instruction in{" "}
            <span className="text-neutral-200 font-bold">
              <FlipWords words={words} />
            </span>
          </p>
        </div>
        <BackgroundBeams />
      </div>

      {/* Tracing Beam Wrapper for other sections */}
      <TracingBeam>
        {/* About the Instructions Section */}
        <section className="w-full px-4 py-10 md:py-20 mt-10">
          <div className="h-full flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About the Instructions</h2>
          </div>
          <p className="text-lg md:text-2xl text-neutral-500 mt-4">
            Our expert offers personalized guidance in various subjects, including statics, mechanics, and material resistance. With decades of experience, you will gain deep insights and understanding in these fields.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="max-w-4xl px-4 py-10 md:py-20 text-center bg-neutral-900 rounded-lg shadow-md mt-10">
          <h2 className="text-3xl md:text-5xl font-bold">Contact Information</h2>
          <p className="text-lg md:text-2xl text-neutral-500 mt-4">
            If you need more information or want to schedule a session, feel free to reach out to us at:
          </p>
          <p className="text-xl md:text-3xl text-neutral-400 mt-4">contact@example.com</p>
          <p className="text-xl md:text-3xl text-neutral-400">+123 456 7890</p>
        </section>

        {/* Testimonials Section with Infinite Moving Cards */}
        <section className="w-full px-4 py-10 md:py-20 mt-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Testimonials</h2>
          <div className="h-[40rem] flex items-center justify-center overflow-hidden relative">
            <InfiniteMovingCards
              items={testimonials.map(testimonial => ({
                quote: testimonial.quote,
                name: testimonial.name,
                title: testimonial.title,
              }))}
              direction="right"
              speed="slow"
            />
          </div>
        </section>

        {/* Counter Section */}
        <section className="w-full px-4 py-10 md:py-20 mt-10 bg-neutral-900 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Our Achievements</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-5xl md:text-6xl font-bold text-neutral-200">500+</h3>
              <p className="text-lg md:text-2xl text-neutral-500 mt-4">Students Instructed</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl md:text-6xl font-bold text-neutral-200">98%</h3>
              <p className="text-lg md:text-2xl text-neutral-500 mt-4">Successful Passing Rate</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl md:text-6xl font-bold text-neutral-200">10,000+</h3>
              <p className="text-lg md:text-2xl text-neutral-500 mt-4">Hours of Instruction</p>
            </div>
          </div>
        </section>
      </TracingBeam>

      {/* Footer Section */}
      <footer className="w-full px-4 py-6 mt-10 bg-neutral-900 text-neutral-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 3H4.5C3.67 3 3 3.67 3 4.5V19.5C3 20.33 3.67 21 4.5 21H19.5C20.33 21 21 20.33 21 19.5V4.5C21 3.67 20.33 3 19.5 3zM8.44 18H5.96V9.24H8.44V18zM7.2 8.22C6.3 8.22 5.6 7.52 5.6 6.62C5.6 5.73 6.3 5.02 7.2 5.02C8.1 5.02 8.8 5.73 8.8 6.62C8.8 7.52 8.1 8.22 7.2 8.22zM18 18H15.52V13.1C15.52 12 15.5 10.55 14.13 10.55C12.74 10.55 12.51 11.76 12.51 12.95V18H10.03V9.24H12.42V10.24H12.46C12.83 9.63 13.68 9.06 14.85 9.06C17.14 9.06 18 10.39 18 12.46V18Z"></path>
              </svg>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.41 5.19 20.17 9.27 21.41C9.81 21.52 10.02 21.21 10.02 20.94C10.02 20.73 10.01 20.06 10.01 19.26C6.73 19.91 6.14 17.98 6.14 17.98C5.77 16.88 5.19 16.53 5.19 16.53C4.39 15.96 5.29 15.97 5.29 15.97C6.21 16.05 6.74 16.92 6.74 16.92C7.57 18.17 8.86 17.79 9.36 17.57C9.44 16.96 9.68 16.57 9.95 16.36C7.25 16.12 4.5 15.14 4.5 10.79C4.5 9.59 4.91 8.66 5.58 8C5.47 7.76 5.14 6.5 5.67 5.12C5.67 5.12 6.57 4.88 10.02 6.61C10.96 6.32 11.97 6.17 13 6.17C14.03 6.17 15.04 6.32 15.98 6.61C19.42 4.88 20.33 5.12 20.33 5.12C20.86 6.5 20.53 7.76 20.42 8C21.09 8.66 21.5 9.59 21.5 10.79C21.5 15.15 18.75 16.11 16.05 16.35C16.38 16.6 16.66 17.12 16.66 18.02C16.66 19.32 16.65 20.38 16.65 20.94C16.65 21.21 16.86 21.53 17.41 21.41C21.48 20.17 24 16.41 24 12C24 6.48 19.52 2 14 2H12Z"></path>
              </svg>
            </a>
          </div>
          <div className="text-center">
            <p>Need a website? Email me at: <a href="mailto:cvijic.ac@gmail.com" className="text-neutral-200 hover:underline">cvijic.ac@gmail.com</a></p>
            <p>Copyright © 2024 A.C. Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
