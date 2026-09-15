'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hospital: 'Ruby Hall Clinic (Sasoon Road)',
    category: 'Facial & Cosmetic Surgery',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Construct formatted WhatsApp message URL for instant medical inquiry routing
    const text = encodeURIComponent(
      `*New Consultation Inquiry*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      `🏥 *Preferred Hospital:* ${formData.hospital}\n` +
      `🩺 *Procedure Category:* ${formData.category}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || 'Earliest Available'}\n` +
      `📝 *Query:* ${formData.message || 'I would like to schedule a private consultation with Dr. Chintan Gujarathi.'}`
    );

    const waUrl = `https://wa.me/917977429688?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-[32px] border border-[#EDE6F5] p-7 sm:p-10 card-shadow">
      <div className="mb-6">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#9784B4] uppercase block">
          SCHEDULE CONSULTATION
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#25202E] mt-1">
          Request an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-[#6D6377] mt-1.5 leading-relaxed">
          Please provide your details below. Our clinic coordinator will contact you promptly to confirm your appointment timing with Dr. Chintan Gujarathi.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-[#F6F2FA] border border-[#DFCEEE] text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#9784B4] text-white flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 className="font-serif text-xl text-[#25202E]">Inquiry Submitted Successfully</h4>
          <p className="text-xs text-[#6D6377] max-w-sm mx-auto">
            Thank you, {formData.name}. Dr. Chintan Gujarathi&apos;s team at {formData.hospital} will reach out to you shortly via phone or WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#9784B4] uppercase tracking-wider underline hover:text-[#7A6697] pt-2 block mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Full Name <span className="text-[#B8684D]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ananya Sharma"
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all placeholder:text-[#AAA2B5]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-[#B8684D]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 098765 43210"
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all placeholder:text-[#AAA2B5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. ananya@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all placeholder:text-[#AAA2B5]"
              />
            </div>

            <div>
              <label htmlFor="hospital" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Preferred Consulting Center <span className="text-[#B8684D]">*</span>
              </label>
              <select
                id="hospital"
                value={formData.hospital}
                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all"
              >
                <option value="Ruby Hall Clinic (Sasoon Road)">Ruby Hall Clinic (Sasoon Road, Pune) — Primary</option>
                <option value="Manipal Hospital (Kharadi)">Manipal Hospital (Kharadi, Pune)</option>
                <option value="Symbiosis Hospital (Lavale)">Symbiosis University Hospital (Lavale, Pune)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Area of Clinical Interest <span className="text-[#B8684D]">*</span>
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all"
              >
                <option value="Facial & Cosmetic Surgery">Facial & Cosmetic Surgery (Rhinoplasty, Facelift, Lids)</option>
                <option value="Body Contouring & Breast">Body Contouring & Breast (Gynecomastia, Liposuction, Implants)</option>
                <option value="Reconstructive Microsurgery & Wounds">Reconstructive Microsurgery & Wounds (Cancer Flaps, Burns, Trauma)</option>
                <option value="Hand, Nerve & Specialized Surgery">Hand, Nerve & Specialized (Carpal Tunnel, Cysts, Tendons)</option>
                <option value="General Surgical Assessment">General Surgical Assessment & Second Opinion</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
                Preferred Date (Optional)
              </label>
              <input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#483F53] uppercase tracking-wider mb-1.5">
              Consultation Notes / Medical Query
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your concern or any prior treatments..."
              className="w-full px-4 py-3 rounded-xl border border-[#EDE6F5] bg-[#FAF9FC] text-sm text-[#25202E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9784B4]/40 transition-all placeholder:text-[#AAA2B5]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
            >
              Submit & Connect on WhatsApp →
            </button>
            <span className="text-xs text-[#8A8095]">
              Direct coordination with Dr. Gujarathi&apos;s team
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
