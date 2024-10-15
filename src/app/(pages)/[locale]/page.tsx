import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import PageHeader from "@/src/components/PageHeader";
import { projects } from "@/src/constants";
import Paragraph from "@/src/components/Paragraph";
import Info from "@/src/components/Info";
import DotList from "@/src/components/DotList";
import ImageParagraph from "@/src/components/ImageParagraph";
import AnimatedComponent from "@/src/components/AnimatedComponent";

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
      {/* section 1 */}
      <AnimatedComponent>
        <section>
          <img src="/work_01/Slide-4_3---3.png" alt="dummy" />
          <div className="md:flex pt-5 gap-8">
            <div className="md:w-3/4">
              <Paragraph title="About">{workT("about")}</Paragraph>
              <div className="pt-5" />
              <Paragraph title="My Contribution">
                {workT("myContribution")}
              </Paragraph>
            </div>
            <div className="md:w-1/4 mt-5 md:mt-0">
              <Info
                timeline={workT("timeline")}
                teamSize={workT("teamSize")}
                targetUser={workT("targetUser")}
                myRole={workT("myRole")}
              />
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 2 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---10.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Design Challenges">
                {workT("design_challenges")}
              </Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 3 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---6.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="So What’s the Problem?">
                {workT("problem")}
              </Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 4 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---14.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Identifying Users">
                {workT("identifying_users")}
              </Paragraph>
              <div className="pt-5" />
              <Paragraph title="Primary Users">
                {workT("primary_users")}
              </Paragraph>
              <div className="pt-5" />
              <DotList
                list={[
                  { title: "Goal", content: workT("primary_users_goal") },
                  { title: "Needs", content: workT("primary_users_needs") },
                  { title: "Must", content: workT("primary_users_must") },
                ]}
              ></DotList>
              <div className="pt-5" />
              <Paragraph title="Secondary Users">
                {workT("secondary_users")}
              </Paragraph>
              <div className="pt-5" />
              <DotList
                list={[
                  {
                    title: "Goal",
                    content: workT("secondary_users_goal"),
                  },
                  {
                    title: "Needs",
                    content: workT("secondary_users_needs"),
                  },
                  {
                    title: "Must",
                    content: workT("secondary_users_must"),
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 5 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---15.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Market Oppertunites">
                {workT("Market_Oppertunites")}
              </Paragraph>
              <div className="pt-5" />
              <DotList
                list={[
                  {
                    title: "Legacy Software",
                    content: workT("Market_Oppertunites_01"),
                  },
                  {
                    title: "Value Leakage",
                    content: workT("Market_Oppertunites_02"),
                  },
                  {
                    title: "Rising Competition",
                    content: workT("Market_Oppertunites_03"),
                  },
                ]}
              />

              <div className="pt-5" />
              <Paragraph title="High-Level Goals">
                {workT("High_Level_Goals")}
              </Paragraph>
              <div className="pt-5" />
              <DotList
                list={[
                  {
                    title: "쉬운 데이터 분석",
                    content: workT("High_Level_Goals_01"),
                  },
                  {
                    title: "빠른 데이터 분석",
                    content: workT("High_Level_Goals_02"),
                  },
                  {
                    title: "정확한 데이터 분석",
                    content: workT("High_Level_Goals_03"),
                  },
                ]}
              ></DotList>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 6 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---12.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Interactions">
                {workT("Interactions")}
              </Paragraph>
              <DotList
                list={[
                  {
                    content: workT("Interactions_01"),
                  },
                  {
                    content: workT("Interactions_02"),
                  },
                  {
                    content: workT("Interactions_03"),
                  },
                ]}
              />

              <div className="pt-5" />
              <Paragraph>{workT("Interactions_result")}</Paragraph>
              <div className="pt-5" />
              <DotList
                list={[
                  {
                    content: workT("Interactions_result_01"),
                  },
                  {
                    content: workT("Interactions_result_02"),
                  },
                  {
                    content: workT("Interactions_result_03"),
                  },
                ]}
              ></DotList>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 7 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---1.png" alt="dummy" />
          <img src="/work_01/Slide-4_3---1.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Execution">{workT("Execution")}</Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 8 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---16.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Color Theme">{workT("Color_Theme")}</Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 9 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---17.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="UI Framework">
                {workT("UI_Framework")}
              </Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 10 */}
      <AnimatedComponent>
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---18.png" alt="dummy" />
          <img src="/work_01/Slide-4_3---4.png" alt="dummy" />
          <img src="/work_01/Slide-4_3---2.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Anatomy of UI">
                {workT("Anatomy_of_UI")}
              </Paragraph>
              <div className="flex pt-5" />
              <ImageParagraph
                imageSrc="/work_01/Slide-4_3---19.png"
                title="Global Navigation + Titled Section"
                paragraph={workT("Anatomy_of_UI_01")}
              />
              <div className="flex pt-10" />
              <ImageParagraph
                imageSrc="/work_01/Slide-4_3---20.png"
                title="Card View"
                paragraph={workT("Anatomy_of_UI_01")}
              />
              <div className="flex pt-10" />
              <ImageParagraph
                imageSrc="/work_01/Slide-4_3---21.png"
                title="DAG (Directred Acyclic Graph)"
                paragraph={workT("Anatomy_of_UI_01")}
              />
              <div className="flex pt-10" />
              <ImageParagraph
                imageSrc="/work_01/Slide-4_3---22.png"
                title="Data Visualization"
                paragraph={workT("Anatomy_of_UI_01")}
              />
            </div>
          </div>
        </section>
      </AnimatedComponent>

      {/* section 11 */}
      <AnimatedComponent>
        {/* section 11 */}
        <section className="pt-24">
          <img src="/work_01/Slide-4_3---23.png" alt="dummy" />
          <div className="flex pt-5">
            <div>
              <Paragraph title="Outcomes">{workT("Outcomes")}</Paragraph>
            </div>
          </div>
        </section>
      </AnimatedComponent>
    </div>
  );
}
