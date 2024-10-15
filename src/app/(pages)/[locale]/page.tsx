import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import PageHeader from "@/src/components/PageHeader";
import { projects } from "@/src/constants";
import Paragraph from "@/src/components/Paragraph";
import Info from "@/src/components/Info";

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
      <img src="/work_01/Slide-4_3---3.png" alt="dummy" />
      <div className="flex">
        <div>
          <Paragraph title="About">{workT("about")}</Paragraph>
          <Paragraph title="My Contribution">
            {workT("myContribution")}
          </Paragraph>
        </div>
        <div>
          <Info
            timeline={workT("timeline")}
            teamSize={workT("teamSize")}
            targetUser={workT("targetUser")}
            myRole={workT("myRole")}
          />
        </div>
      </div>
    </div>
  );
}
