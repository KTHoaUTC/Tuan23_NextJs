import HeaderAdmin from "@/layouts/admin/header";
import LogoutAdmin from "@/layouts/Auth/Logout";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";

interface IProps {
  session: any;
}

export default function RootLayout({ session }: IProps) {
  return (
    <SessionProvider session={session}>
      <div
        style={{
          paddingTop: "5rem",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <h1>
          <Link href="/Client/">Home</Link>
        </h1>
        <h1> Login</h1>
        {/* <HeaderAdmin></HeaderAdmin> */}
        <LogoutAdmin></LogoutAdmin>
      </div>
    </SessionProvider>
  );
}
