import styles from "./SummaryPage.module.scss";
import HighlightText from "@/components/HighLightText/HighLightText";
import "@/styles/index.scss";

export default function SummaryPage() {
  return (
    <main className="container">
      <div className={styles.summaryPage}>
        <h1>
          <HighlightText>SUMMARY</HighlightText>
        </h1>
        <div className={styles.summaryContainer}></div>
      </div>
    </main>
  );
}
