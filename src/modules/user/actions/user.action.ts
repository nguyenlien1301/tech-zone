"use server";

import { connectToDatabase } from "@/shared/lib";
import { UserModel } from "@/shared/schemas";
import { CreateUserParams } from "@/shared/types";

export async function createUser(params: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await UserModel.create(params);
    console.log("🚀newUser---->", newUser);
    return {
      success: true,
      data: newUser,
    };
  } catch (error) {
    console.log("🚀error createUser---->", error);
  }
}
