import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // TODO: Verify LINE signature here
    // const signature = req.headers.get("x-line-signature");
    
    console.log("Received LINE Webhook event:", body);

    // This is where you would handle incoming LINE messages,
    // or trigger a message to a user who just bought a product.
    
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
