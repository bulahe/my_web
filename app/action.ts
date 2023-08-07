"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function postEntry(formdata: FormData) {
  "use server";

  const data = await prisma.guestbook.create({
    data: {
      message: formdata.get("entry") as string,
      username: "Hello",
    },
  });

  revalidatePath("/guestbook");
}
