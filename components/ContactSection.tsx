"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

const productOptions = [
  "Aligner Case",
  "UV Sterilizer Aligner Case",
  "Ultrasonic Cleaning Case",
  "Regular Cleaning Case",
  "Aligner Removal Hook",
  "Chewies",
  "Aligner Bag",
  "Aligner Gift Box",
  "Effervescent Cleaning Tablets",
  "Aligner Cleaning Brush",
  "Multiple Products / Custom OEM",
];

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 " +
  "placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 " +
  "focus:border-transparent transition-shadow";

interface FormData {
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
}

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  product: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailjs.send(
        'service_ybqavzp',
        'template_q81jot6',
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          product: formData.product,
          message: formData.message,
        },
        'NRSIOLM0NN0h_ZEbJ'
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send inquiry. Please try again or contact us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Inquiry Today
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Our team responds within 24 hours with a personalised quote and full
            product catalog.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email",
                value: "ban@grouprsh.com",
                sub: "Reply within 24 hours",
                bg: "bg-blue-50",
                color: "text-blue-600",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                title: "WhatsApp",
                value: "+86 188 2288 5445",
                sub: "Mon–Sat · 9 AM–6 PM CST",
                bg: "bg-green-50",
                color: "text-green-600",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                ),
                title: "Factory",
                value: "A309, Fanghua Industrial Area, Shenzhen",
                sub: "Guangdong Province · Export Ready",
                bg: "bg-orange-50",
                color: "text-orange-500",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                <div className={"w-11 h-11 " + item.bg + " " + item.color + " rounded-xl flex items-center justify-center flex-shrink-0"}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Why choose us */}
            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Choose Us?
              </h4>
              <ul className="space-y-2">
                {[
                  "Low MOQ starting from 100 pcs",
                  "Free logo printing for 500+ orders",
                  "Samples available before bulk order",
                  "Shipping to 50+ countries worldwide",
                  "30-day quality guarantee",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-blue-700">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Inquiry Sent! 🎉
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours with a tailored quote and product catalog.
                </p>
                <button
                  className="mt-8 text-sm text-blue-600 hover:underline font-medium"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(emptyForm);
                  }}
                >
                  ← Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Send Us a Message
                </h3>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Dental Clinic / Distributor"
                    className={inputCls}
                  />
                </div>

                {/* Product interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">— Select a product (optional) —</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Requirements / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements: product type, quantity, customization needs, target market, etc."
                    className={inputCls + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />   "use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

const productOptions = [
  "Aligner Case",
  "UV Sterilizer Aligner Case",
  "Ultrasonic Cleaning Case",
  "Regular Cleaning Case",
  "Aligner Removal Hook",
  "Chewies",
  "Aligner Bag",
  "Aligner Gift Box",
  "Effervescent Cleaning Tablets",
  "Aligner Cleaning Brush",
  "Multiple Products / Custom OEM",
];

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 " +
  "placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 " +
  "focus:border-transparent transition-shadow";

interface FormData {
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
}

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  product: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailjs.send(
        'service_ybqavzp',
        'template_q81jot6',
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          product: formData.product,
          message: formData.message,
        },
        'NRSIOLM0NN0h_ZEbJ'
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send inquiry. Please try again or contact us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Inquiry Today
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Our team responds within 24 hours with a personalised quote and full
            product catalog.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email",
                value: "ban@grouprsh.com",
                sub: "Reply within 24 hours",
                bg: "bg-blue-50",
                color: "text-blue-600",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                title: "WhatsApp",
                value: "+86 188 2288 5445",
                sub: "Mon–Sat · 9 AM–6 PM CST",
                bg: "bg-green-50",
                color: "text-green-600",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                ),
                title: "Factory",
                value: "A309, Fanghua Industrial Area, Shenzhen",
                sub: "Guangdong Province · Export Ready",
                bg: "bg-orange-50",
                color: "text-orange-500",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                <div className={"w-11 h-11 " + item.bg + " " + item.color + " rounded-xl flex items-center justify-center flex-shrink-0"}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Why choose us */}
            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Choose Us?
              </h4>
              <ul className="space-y-2">
                {[
                  "Low MOQ starting from 100 pcs",
                  "Free logo printing for 500+ orders",
                  "Samples available before bulk order",
                  "Shipping to 50+ countries worldwide",
                  "30-day quality guarantee",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-blue-700">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Inquiry Sent! 🎉
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours with a tailored quote and product catalog.
                </p>
                <button
                  className="mt-8 text-sm text-blue-600 hover:underline font-medium"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(emptyForm);
                  }}
                >
                  ← Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Send Us a Message
                </h3>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Dental Clinic / Distributor"
                    className={inputCls}
                  />
                </div>

                {/* Product interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">— Select a product (optional) —</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Requirements / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements: product type, quantity, customization needs, target market, etc."
                    className={inputCls + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy.
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
                   </svg>
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy.
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
