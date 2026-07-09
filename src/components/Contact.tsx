"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: "Royal Basketball Academy — Enrollment Inquiry",
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5fr 7fr",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: info */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="court-divider" />
            <span className="section-label">Get in Touch</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "var(--charcoal)",
              marginBottom: "2rem",
            }}
          >
            Ready to{" "}
            <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Play?</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#6A5A54",
              lineHeight: 1.75,
              maxWidth: "38ch",
              marginBottom: "3rem",
            }}
          >
            Reach out through the form, or connect with us directly on Instagram
            or WhatsApp. We&rsquo;ll get back to you within 24 hours.
          </p>

          {/* Map embed placeholder */}
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              backgroundColor: "#E8E2D9",
              position: "relative",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d85.3659!3d27.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM5JzMxLjciTiA4NcKwMjEnNTcuMiJF!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(20%) saturate(0.7) brightness(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Basketball Academy location map"
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.825rem",
              color: "#8A7A74",
              lineHeight: 1.6,
            }}
          >
            Siddhipur, Sana Gaon–Sankhadevi–Dharachour Road<br />
            Kathmandu Valley, Nepal
          </p>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div
              style={{
                padding: "4rem 3rem",
                border: "1px solid rgba(107,20,32,0.15)",
                textAlign: "center",
              }}
            >
              <div className="stat-numeral" style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  marginBottom: "0.75rem",
                }}
              >
                Message Sent!
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "#6A5A54", fontSize: "0.95rem", lineHeight: 1.65 }}>
                We&rsquo;ll be in touch within 24 hours. See you on the court.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="enrollment-form" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Field styles */}
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                { id: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+977 98XXXXXXXX", required: false },
                { id: "age", label: "Player Age", type: "number", placeholder: "e.g. 12", required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={`form-${field.id}`}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--brass)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {field.label}
                    {field.required && <span style={{ color: "var(--maroon)", marginLeft: "3px" }}>*</span>}
                  </label>
                  <input
                    id={`form-${field.id}`}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      backgroundColor: "transparent",
                      border: "1px solid rgba(107,20,32,0.2)",
                      color: "var(--charcoal)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--maroon)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(107,20,32,0.2)"; }}
                  />
                </div>
              ))}

              {/* Program select */}
              <div>
                <label
                  htmlFor="form-program"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--brass)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Program Interest
                </label>
                <select
                  id="form-program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem",
                    backgroundColor: "var(--ivory)",
                    border: "1px solid rgba(107,20,32,0.2)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select a program…</option>
                  <option value="little-hoopers">Little Hoopers (Ages 5–10)</option>
                  <option value="fundamentals">Fundamentals Program (Ages 10–14)</option>
                  <option value="competitive">Competitive & Travel Team (14+)</option>
                  <option value="private">Private Coaching</option>
                  <option value="adult">Adult & Open Sessions</option>
                  <option value="trial">Free Trial Session</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="form-message"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--brass)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={4}
                  placeholder="Any questions or details you'd like to share…"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(107,20,32,0.2)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--maroon)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(107,20,32,0.2)"; }}
                />
              </div>

              <button
                type="submit"
                id="form-submit"
                className="btn-magnetic"
                style={{ alignSelf: "flex-start", border: "none", cursor: "pointer" }}
                disabled={sending}
              >
                <span>{sending ? "Sending..." : "Send Message"}</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
