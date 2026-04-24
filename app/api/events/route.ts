import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, club, date, guests, message } = body;

    if (!firstname || !lastname || !email || !phone || !club || !date || !guests) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const clubLabel = club === "eastkilbride" ? "East Kilbride" : club;

    // --- Excel: build enquiries sheet and attach ---
    const EXCEL_PATH = "/tmp/enquiries.xlsx";
    const NEWSLETTER_PATH = "/tmp/newsletter.xlsx";
    const HEADERS = ["First Name", "Last Name", "Email", "Phone"];

    let enquiriesBase64: string | null = null;
    let newsletterBase64: string | null = null;

    try {
      let workbook: XLSX.WorkBook;
      try {
        workbook = XLSX.read(fs.readFileSync(EXCEL_PATH), { type: "buffer" });
      } catch {
        workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([HEADERS]), "Enquiries");
      }

      XLSX.utils.sheet_add_aoa(workbook.Sheets["Enquiries"], [[firstname, lastname, email, phone]], { origin: -1 });

      const buf: Buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
      fs.writeFileSync(EXCEL_PATH, buf);
      enquiriesBase64 = buf.toString("base64");
    } catch (e) {
      console.error("Excel (enquiries) error:", e);
    }

    try {
      newsletterBase64 = fs.readFileSync(NEWSLETTER_PATH).toString("base64");
    } catch { /* newsletter file doesn't exist yet */ }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Event Enquiry – itspadel</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#009FF3;padding:32px 40px;text-align:left;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:4px;color:#ffffff;text-transform:uppercase;opacity:0.8;">itspadel</p>
              <h1 style="margin:8px 0 0;font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">New Event Enquiry</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#111111;padding:40px;">

              <p style="margin:0 0 32px;font-size:15px;color:#999999;line-height:1.6;">
                A new event enquiry has been submitted through <strong style="color:#ffffff;">itspadel.co.uk</strong>. Review the details below and follow up with the guest.
              </p>

              <!-- Guest Details -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:6px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#009FF3;">Guest Details</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1a1a;border-left:3px solid #009FF3;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:8px 16px 8px 0;border-bottom:1px solid #222222;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Name</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #222222;vertical-align:middle;">
                          <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${firstname} ${lastname}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 16px 8px 0;border-bottom:1px solid #222222;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Email</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #222222;vertical-align:middle;">
                          <p style="margin:0;font-size:15px;color:#009FF3;font-weight:600;">
                            <a href="mailto:${email}" style="color:#009FF3;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 16px 8px 0;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Phone</p>
                        </td>
                        <td style="padding:8px 0;">
                          <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">
                            <a href="tel:${phone}" style="color:#ffffff;text-decoration:none;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Event Details -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:6px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#009FF3;">Event Details</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1a1a;border-left:3px solid #009FF3;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:8px 16px 8px 0;border-bottom:1px solid #222222;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Club</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #222222;vertical-align:middle;">
                          <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${clubLabel}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 16px 8px 0;border-bottom:1px solid #222222;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Desired Date</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #222222;vertical-align:middle;">
                          <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${formattedDate}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 16px 8px 0;white-space:nowrap;vertical-align:middle;" width="40%">
                          <p style="margin:0;font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:1px;">Number of Guests</p>
                        </td>
                        <td style="padding:8px 0;">
                          <p style="margin:0;font-size:15px;color:#ffffff;font-weight:600;">${guests}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${message ? `
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:6px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#009FF3;">Message</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1a1a;border-left:3px solid #009FF3;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0;font-size:15px;color:#cccccc;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-top:8px;">
                    <a href="mailto:${email}?subject=Re: Your itspadel Event Enquiry"
                      style="display:inline-block;background-color:#009FF3;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 36px;">
                      Reply to ${firstname}
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
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: "itspadel Events <no-reply@itspadel.co.uk>",
      to: process.env.RESPONSE_FORWARD_EMAIL!,
      replyTo: email,
      subject: `Event Enquiry – ${firstname} ${lastname} · ${guests} guests · ${formattedDate}`,
      html,
      attachments: [
        { filename: "enquiries.xlsx", content: enquiriesBase64 },
        ...(newsletterBase64 ? [{ filename: "newsletter.xlsx", content: newsletterBase64 }] : []),
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Events form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
