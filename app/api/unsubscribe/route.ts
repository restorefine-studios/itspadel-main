import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

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

    const EXCEL_PATH = "/tmp/newsletter.xlsx";

    let workbook: XLSX.WorkBook;
    try {
      const fileBuffer = fs.readFileSync(EXCEL_PATH);
      workbook = XLSX.read(fileBuffer, { type: "buffer" });
    } catch {
      return NextResponse.json({ success: false, error: "Not subscribed." }, { status: 404 });
    }

    const ws = workbook.Sheets["Subscribers"];
    const rows: string[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });

    const header = rows[0];
    const filtered = rows.filter((row, i) => i === 0 || row[0] !== email);

    if (filtered.length === rows.length) {
      return NextResponse.json({ success: false, error: "Email not found." }, { status: 404 });
    }

    const newWs = XLSX.utils.aoa_to_sheet(filtered);
    workbook.Sheets["Subscribers"] = newWs;

    const excelBuffer: Buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    fs.writeFileSync(EXCEL_PATH, excelBuffer);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
