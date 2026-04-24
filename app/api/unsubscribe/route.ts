import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { put, head } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
    }

    const email = Buffer.from(token, "base64url").toString("utf-8");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid token." }, { status: 400 });
    }

    let workbook: XLSX.WorkBook;
    try {
      const existing = await head("newsletter.xlsx");
      const res = await fetch(existing.url);
      workbook = XLSX.read(Buffer.from(await res.arrayBuffer()), { type: "buffer" });
    } catch {
      return NextResponse.json({ success: false, error: "Not subscribed." }, { status: 404 });
    }

    const ws = workbook.Sheets["Subscribers"];
    const rows: string[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });
    const filtered = rows.filter((row, i) => i === 0 || row[0] !== email);

    if (filtered.length === rows.length) {
      return NextResponse.json({ success: false, error: "Email not found." }, { status: 404 });
    }

    workbook.Sheets["Subscribers"] = XLSX.utils.aoa_to_sheet(filtered);
    const buf: Buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    await put("newsletter.xlsx", buf, { access: "public", addRandomSuffix: false });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
