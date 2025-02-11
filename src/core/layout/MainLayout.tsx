//layout->header->footer?hero section
import Header from "@/libs/components/Header/Header";
import Footer from "@/libs/components/Footer/Footer";
import { MainLayoutProps } from "@/core/types/MainLayoutProps";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.main_ly}>
      <Header />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
