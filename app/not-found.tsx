import Link from "next/link";
import { T } from "@/components/LanguageContext";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span className="eyebrow">404</span>
      <T as="h1" en="Page not found." th="ไม่พบหน้าที่ต้องการ" />
      <T as="p" en="The page you requested does not exist or has moved." th="หน้าที่คุณต้องการอาจไม่มีอยู่หรือถูกย้ายแล้ว" />
      <T as="span" en={<Link className="btn btn-primary" href="/">Back to home</Link>} th={<Link className="btn btn-primary" href="/">กลับหน้าหลัก</Link>} />
    </main>
  );
}
