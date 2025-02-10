import "./App.css";
import MainLayout from "@/core/layout/MainLayout";
import Advantages from "./libs/components/Adventages/Advantages";
import MainPage from "./pages/Product/MainPage";

function App() {
  return (
    <>
      <MainLayout>
        <Advantages />
        <MainPage />
      </MainLayout>
    </>
  );
}

export default App;
