import AppAdmin from "@/layouts/admin/LayoutAdmin";
import TableCategory from "@/layouts/admin/TableCategory";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <TableCategory></TableCategory>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};
export default Page;
