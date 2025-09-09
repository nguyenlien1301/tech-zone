import { WebhookEvent } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser } from "@/modules/user/actions";

export async function POST(request: NextRequest) {
  const svixId = request.headers.get("svix-id") ?? "";
  const svixTimestamp = request.headers.get("svix-timestamp") ?? "";
  const svixSignature = request.headers.get("svix-signature") ?? "";
  //   nếu ko có WEBHOOK_SECRET thì bắn ra lỗi
  if (!process.env.WEBHOOK_SECRET) {
    throw new Error("WEBHOOK_SECRET is not set");
  }
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Bad Request", { status: 400 });
  }
  //   Đang là json
  const payload = await request.json();
  //   convert nó thành stringify()
  const body = JSON.stringify(payload);
  //  nếu có WEBHOOK_SECRET thì chạy xuống đây
  const sivx = new Webhook(process.env.WEBHOOK_SECRET);

  let message: WebhookEvent;

  try {
    message = sivx.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (error) {
    console.log(error);

    return new Response("Bad Request", { status: 400 });
  }
  //   Khi gọi lên trang web âcdemy nó sẽ trả về một eventType
  const evenType = message.type;

  if (evenType === "user.created") {
    // create user to data
    const {
      email_addresses: emailAddress,
      id,
      image_url: imageURL,
      username,
    } = message.data;
    const user = await createUser({
      username: username!,
      name: username!,
      clerkId: id,
      email: emailAddress[0].email_address,
      avatar: imageURL,
    });

    return NextResponse.json({
      message: "OK",
      user,
    });
  }

  return new Response("OK", { status: 200 });
}
