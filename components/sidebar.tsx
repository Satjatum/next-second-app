import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-green-800 text-white p-6">
      <nav className="flex flex-col space-y-4">
        <Link href="/major" className="hover:text-gray-300">
          หน้าหลักสาขาวิชา
        </Link>
        <hr />
        <Link href="/major/account" className="hover:text-gray-300">
          Account
        </Link>

        <hr />
        <Link href="/major/dm" className="hover:text-gray-300">
          DM
        </Link>
        <hr />
        <Link href="/major/dti" className="hover:text-gray-300">
          DTI
        </Link>
        <hr />
        <Link href="/major/marketing" className="hover:text-gray-300">
          Marketing
        </Link>
      </nav>
    </div>
  );
}
