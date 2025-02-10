//layout->header->footer?hero section
import Header from "@/libs/components/Header/Header";
import Footer from "@/libs/components/Footer/Footer";
import { MainLayoutProps } from "@/core/types/MainLayoutProps";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
