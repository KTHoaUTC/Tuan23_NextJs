import LogoutAdmin from "@/layouts/Auth/Logout";
import Link from "next/link";
interface IProps {
  session: any;
}
export default function RootLayout({ session }: IProps) {
  return (
    // <SessionProvider session={session}>
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
    // </SessionProvider>
  );
}
