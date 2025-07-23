import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Replace with your Google Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDcWXRqIhwA04r3_Aoobv0PzUFIrEb7x1OVddqgZlZtxxnQ0uUz98A8yfhj_mjcgh-/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "error", error: "Something went wrong" }, { status: 500 });
  }
}
