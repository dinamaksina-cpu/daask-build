"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const projectType = String(form.get("projectType") || "").trim();
    const location = String(form.get("location") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = `Website enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Project type: ${projectType || "Not specified"}`,
      `Project location: ${location || "Not specified"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    setStatus("Your email app is opening with the enquiry ready to send.");
    window.location.href = `mailto:daaskbuild@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Project type</span>
          <select name="projectType" defaultValue="">
            <option value="" disabled>Select a project type</option>
            <option>New build</option>
            <option>Extension or renovation</option>
            <option>Renewable energy or passive building</option>
            <option>Heritage building</option>
            <option>Commercial or specialist work</option>
            <option>Plant hire</option>
            <option>Other</option>
          </select>
        </label>
        <label className="form-wide">
          <span>Project location</span>
          <input name="location" type="text" autoComplete="street-address" placeholder="Town or area" />
        </label>
        <label className="form-wide">
          <span>Tell us about your project</span>
          <textarea name="message" rows={6} required />
        </label>
      </div>
      <div className="form-submit">
        <button className="button button-primary" type="submit">Prepare email</button>
        <p>This form opens your email app. You can review the message before sending it to <a href="mailto:daaskbuild@gmail.com">daaskbuild@gmail.com</a>.</p>
      </div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
