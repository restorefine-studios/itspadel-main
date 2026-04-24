import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as XLSX from "xlsx";
import { put, head } from "@vercel/blob";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    // --- Excel: build newsletter sheet and persist to Blob ---
    const HEADERS = ["Email", "Subscribed At"];
    let newsletterBase64: string | null = null;
    let enquiriesBase64: string | null = null;

    try {
      let workbook: XLSX.WorkBook;
      try {
        const existing = await head("newsletter.xlsx");
        const res = await fetch(existing.url);
        workbook = XLSX.read(Buffer.from(await res.arrayBuffer()), { type: "buffer" });
      } catch {
        workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([HEADERS]), "Subscribers");
      }

      XLSX.utils.sheet_add_aoa(
        workbook.Sheets["Subscribers"],
        [[email, new Date().toLocaleString("en-GB")]],
        { origin: -1 }
      );

      const buf: Buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
      await put("newsletter.xlsx", buf, { access: "public", addRandomSuffix: false });
      newsletterBase64 = buf.toString("base64");
    } catch (e) {
      console.error("Excel (newsletter) error:", e);
    }

    try {
      const existing = await head("enquiries.xlsx");
      const res = await fetch(existing.url);
      enquiriesBase64 = Buffer.from(await res.arrayBuffer()).toString("base64");
    } catch { /* enquiries file doesn't exist yet */ }

    const unsubscribeToken = Buffer.from(email).toString("base64url");
    const unsubscribeUrl = `https://www.itspadel.co.uk/unsubscribe?token=${unsubscribeToken}`;

    // --- Thank you email to subscriber ---
    const thankYouHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to itspadel</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#009FF3;padding:36px 40px;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:4px;color:#ffffff;text-transform:uppercase;opacity:0.8;">itspadel</p>
              <h1 style="margin:0;font-size:32px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">You're in the squad.</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#111111;padding:44px 40px;">

              <p style="margin:0 0 20px;font-size:16px;color:#cccccc;line-height:1.7;">
                Welcome to the <strong style="color:#ffffff;">itspadel</strong> newsletter. You'll be the first to hear about:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:top;">
                          <div style="width:6px;height:6px;background-color:#009FF3;margin-top:7px;"></div>
                        </td>
                        <td>
                          <p style="margin:0;font-size:14px;color:#cccccc;">Latest padel news &amp; updates from the courts</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:top;">
                          <div style="width:6px;height:6px;background-color:#009FF3;margin-top:7px;"></div>
                        </td>
                        <td>
                          <p style="margin:0;font-size:14px;color:#cccccc;">Exclusive offers &amp; member-only deals</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:top;">
                          <div style="width:6px;height:6px;background-color:#009FF3;margin-top:7px;"></div>
                        </td>
                        <td>
                          <p style="margin:0;font-size:14px;color:#cccccc;">Coaching tips to level up your game</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:top;">
                          <div style="width:6px;height:6px;background-color:#009FF3;margin-top:7px;"></div>
                        </td>
                        <td>
                          <p style="margin:0;font-size:14px;color:#cccccc;">Upcoming events &amp; tournaments</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 36px;font-size:14px;color:#666666;line-height:1.7;">
                In the meantime, book a court or explore what's on at itspadel.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <a href="https://www.itspadel.co.uk"
                      style="display:inline-block;background-color:#009FF3;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 36px;">
                      Explore itspadel
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0a0a0a;padding:28px 40px;border-top:1px solid #1a1a1a;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#333333;">itspadel</p>
              <p style="margin:0;font-size:12px;color:#444444;">East Kilbride &nbsp;·&nbsp; <a href="https://www.itspadel.co.uk" style="color:#444444;text-decoration:none;">www.itspadel.co.uk</a></p>
              <p style="margin:8px 0 0;font-size:11px;color:#333333;">
                You're receiving this because you subscribed at itspadel.co.uk. &nbsp;
                <a href="${unsubscribeUrl}" style="color:#444444;text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // --- Notification email to admin ---
    const adminHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#009FF3;padding:28px 40px;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:4px;color:#ffffff;opacity:0.8;text-transform:uppercase;">itspadel</p>
              <h1 style="margin:0;font-size:22px;font-weight:900;color:#ffffff;">New Newsletter Subscriber</h1>
            </td>
          </tr>
          <tr>
            <td style="background-color:#111111;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1a1a;border-left:3px solid #009FF3;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:0;font-size:16px;color:#009FF3;font-weight:600;">
                      <a href="mailto:${email}" style="color:#009FF3;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:12px;color:#444444;">Full subscriber list is attached.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#0a0a0a;padding:20px 40px;border-top:1px solid #1a1a1a;">
              <p style="margin:0;font-size:12px;color:#333333;">itspadel &nbsp;·&nbsp; www.itspadel.co.uk</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // Send welcome email to subscriber — this is user-facing, must succeed
    const { error: thankYouError } = await resend.emails.send({
      from: "itspadel <no-reply@itspadel.co.uk>",
      to: email,
      subject: "Welcome to the itspadel newsletter",
      html: thankYouHtml,
    });

    if (thankYouError) {
      console.error("Welcome email error:", thankYouError);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    // Send admin notification separately — failure here doesn't affect the user
    resend.emails.send({
      from: "itspadel <no-reply@itspadel.co.uk>",
      to: process.env.RESPONSE_FORWARD_EMAIL!,
      subject: `New subscriber – ${email}`,
      html: adminHtml,
      attachments: [
        ...(newsletterBase64 ? [{ filename: "newsletter.xlsx", content: newsletterBase64 }] : []),
        ...(enquiriesBase64 ? [{ filename: "enquiries.xlsx", content: enquiriesBase64 }] : []),
      ],
    }).catch((err) => console.error("Admin notification error:", err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
