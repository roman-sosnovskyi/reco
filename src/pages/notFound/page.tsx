import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="container">
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
