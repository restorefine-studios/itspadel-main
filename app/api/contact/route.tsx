// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key is available (skip during build)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 });
    }

    // Check if Resend is configured
    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
    }

    console.log("Processing contact form submission:", { name, email, phone });

    // Send email using Resend - use html instead of text for HTML content
    const { data, error } = await resend.emails.send({
      from: "It's Padel <contact@itspadel.co.uk>",
      to: "info@itspadel.co.uk",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
