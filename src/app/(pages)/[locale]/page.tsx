import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <div>
      <img src="https://dummyimage.com/2000x1500/000/fff" alt="dummy" />
      <div>{t("about")}</div>
      <div>{t("myContribution")}</div>
    </div>
  );
}
