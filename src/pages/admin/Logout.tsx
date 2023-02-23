 import LogoutAdmin from "@/layouts/admin/Logout";
import AppAdmin from "@/layouts/admin/LayoutAdmin";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <LogoutAdmin></LogoutAdmin>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};
export default Page;
