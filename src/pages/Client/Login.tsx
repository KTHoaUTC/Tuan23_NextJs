import LoginClient from "@/components/Client/Login";
interface IProps {
  session: any;
}
export default function RootLayout({ session }: IProps) {
  return (
    <div>
      <LoginClient></LoginClient>
    </div>
  );
}
