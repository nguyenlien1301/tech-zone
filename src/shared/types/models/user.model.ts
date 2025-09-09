import { UserRole, UserStatus } from "@/shared/constants";
import { Document, Schema } from "mongoose";

export interface User extends Document {
  _id: string;
  clerkId: string; // Đây là id mặc định của clerk nên ko cần tạo
  name: string;
  username: string;
  email: string;
  products: Schema.Types.ObjectId[]; // Lưu các khoá học mà user đã mua
  avatar: string;
  status: UserStatus; // Trạng thái user
  role: UserRole; // Phân quyền
  created_at: Date; // Ngày tạo user
}
