//layout->header->footer?hero section
import Header from "@/libs/components/Header/Header";
const MainLayout = ({ children }: any) => {
  return (
    <div className="main-layout">
      <Header>
        <h1>Header</h1>
      </Header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default MainLayout;
