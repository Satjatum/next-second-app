import Link from "next/link";

export default function Menubar() {
  return (
    <>
      <div className="flex justify-center gap-4 py-6 bg-green-800 text-white ">
        <Link href="/">หน้าหลัก</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/major">สาขาวิชา</Link>
      </div>
    </>
  );
}
