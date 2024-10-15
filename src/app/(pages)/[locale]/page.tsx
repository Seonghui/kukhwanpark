import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import PageHeader from "@/src/components/PageHeader";
import { projects } from "@/src/constants";

export default function HomePage() {
  const menuT = useTranslations("menu");
  const workT = useTranslations("Work_01");
  return (
    <div>
      <PageHeader
        workId={projects[0].id}
        title={menuT(projects[0].id)}
        year="2017"
      />
      <img src="https://dummyimage.com/2000x1500/000/fff" alt="dummy" />
      <div>{workT("about")}</div>
      <div>{workT("myContribution")}</div>
    </div>
  );
}
