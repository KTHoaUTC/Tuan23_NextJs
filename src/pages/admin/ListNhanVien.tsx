 import TableNhanVien from "@/layouts/admin/TableNhanVien";
import AppAdmin from "@/layouts/admin/LayoutAdmin";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <TableNhanVien></TableNhanVien>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};
export default Page;
