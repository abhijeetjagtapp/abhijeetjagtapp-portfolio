import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live }: { live?: string }) => {
  if (!live || live === "#") return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "churn-analytics",
    category: "Data Analytics",
    title: "Customer Churn Prediction & Retention Analytics",
    src: `${BASE_PATH}/churn-analytics/churn-analytics.svg`,
    screenshots: ["thumbnail.svg"],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            End-to-end analytics pipeline investigating customer attrition
            across subscription, demographic, revenue, and support data.
            Engineered churn flags, tenure, and revenue-at-risk features,
            then visualized results in a Power BI executive dashboard —
            uncovering 28% overall churn and high-value segments needing
            retention action.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/churn-analytics/churn-analytics.svg`]} />
        </div>
      );
    },
  },
  {
    id: "loan-analytics-dashboard",
    category: "Data Analytics",
    title: "End-to-End Power BI Loan Analytics Dashboard",
    src: `${BASE_PATH}/loan-analytics-dashboard/thumbnail.svg`,
    screenshots: ["thumbnail.svg"],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Lending &amp; financial analytics dashboard built on a Power BI
            Dataflow (Azure) with scheduled and incremental refresh. Ingested
            raw loan data from SQL Server into an Azure Dataflow pipeline,
            profiling and restructuring it in Power Query so the downstream
            model was clean enough to trust before any analysis began.
          </TypographyP>
          <TypographyP className="font-mono">
            Built DAX measures answering specific business questions —
            default rates by employment type, year-over-year loan volume
            shifts, and how credit score interacts with repayment behaviour
            across age groups. Designed an interactive multi-page report
            with dynamic segmentation so a credit manager could slice by
            borrower profile without waiting on the analyst team for every
            new cut of data. Configured incremental and scheduled Dataflow
            refresh so the dashboard stayed current automatically — turning
            a one-time analysis into a persistent decision-making tool.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/loan-analytics-dashboard/thumbnail.svg`]} />
        </div>
      );
    },
  },
  {
    id: "autonomous-navigation",
    category: "Robotics",
    title: "Autonomous Navigation & Path Planning",
    src: `${BASE_PATH}/autonomous-navigation/thumbnail.svg`,
    screenshots: ["thumbnail.svg"],
    live: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Developed A* path planning algorithms in Python with obstacle
            avoidance using ROS2 and Gazebo, demonstrating expert-level
            algorithmic design and problem-solving. Evaluated algorithm
            performance and decision correctness in simulated environments,
            applying rigorous test case design and logic validation.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/autonomous-navigation/thumbnail.svg`]} />
        </div>
      );
    },
  },
  {
    id: "computer-vision-robotics",
    category: "Robotics",
    title: "Computer Vision for Intelligent Mobile Robotics",
    src: `${BASE_PATH}/computer-vision-robotics/thumbnail.svg`,
    screenshots: ["thumbnail.svg"],
    live: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Implemented object detection and tracking logic achieving
            90%+ ball detection accuracy, validating model inference with
            detailed false-positive/negative analysis. Documented
            performance tradeoffs and system architecture decisions,
            reinforcing clear technical communication practices.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/computer-vision-robotics/thumbnail.svg`]} />
        </div>
      );
    },
  },
];

export default projects;
