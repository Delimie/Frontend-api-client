import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  name: string().min(3, "Name ต้องมากกว่า 3 ตัวอักษร"),
  password: string().min(6, "Password ต้องมากกว่า 6 ตัวอักษร"),
  confirmPassword: string().oneOf(
    [ref("password")],
    "Confirm Password ไม่ตรงกัน"
  ),
});

export const loginSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  password: string().required("Password is required")
});