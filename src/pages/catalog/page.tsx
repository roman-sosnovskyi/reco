import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from "./CatalogPage.module.scss";
import "@/styles/index.scss";
import { products } from "@/constants/products";

export default function CatalogPage() {
  return (
    <main className="container">
      <div className={styles.catalogPage}>
        <div className={styles.catalogTitleWrapper}>
          <h1 className={styles.catalogTitle}>НОВИНКИ</h1>
        </div>
        <ProductCard products={products} />
      </div>
    </main>
  );
}
