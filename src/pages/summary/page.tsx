import styles from "./SummaryPage.module.scss";
import HighlightText from "@/components/HighLightText/HighLightText";
import SummarySection from "@/components/SummarySection/SummarySection";
import SummaryForm from "@/components/SummaryForm/SummaryForm";
import "@/styles/index.scss";

export default function SummaryPage() {
  return (
    <main className="container">
      <div className={styles.summaryPage}>
        <h1>
          <HighlightText>SUMMARY</HighlightText>
        </h1>
        <div className={styles.summaryContainer}>
          <SummaryForm />
          <SummarySection />
        </div>
      </div>
    </main>
  );
}
