import SidebarComponent from "@components/Sidebar/Sidebar";
import { LayoutPageProps } from "../types/types.env";

const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <main className="flex relative h-[56.5rem] p-[2.4rem] overscroll-y-none">
      <SidebarComponent />
      {children}
    </main>
  );
};

export default LayoutPage;
