//layout->header->footer?hero section

const MainLayout = ({ children }: any) => {
  return (
    <div className="main-layout">
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default MainLayout;
