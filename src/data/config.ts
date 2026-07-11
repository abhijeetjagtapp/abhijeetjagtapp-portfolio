const config = {
  title: "Abhijeet Jagtap | Data Analyst",
  description: {
    long: "Explore the portfolio of Abhijeet Jagtap — a data analyst specializing in transforming raw data into actionable insights using Python, SQL, Power BI, and modern cloud platforms like AWS and Azure.",
    short: "Portfolio of Abhijeet Jagtap — Data Analyst & Full-Stack Developer.",
  },
  keywords: [
    "Abhijeet Jagtap",
    "portfolio",
    "Data Analyst",
    "Data Analytics",
    "full-stack developer",
    "Python",
    "SQL",
    "Power BI",
    "DAX",
    "Power Query",
    "Snowflake",
    "AWS",
    "Azure",
    "Java",
    "React",
    "Next.js",
    "TypeScript",
    "Data Visualization",
    "ETL",
    "Business Intelligence",
  ],
  author: "Abhijeet Jagtap",
  email: "abhijeetjagtap.aj5@gmail.com",
  site: "https://abhijeetjagtap.com",

  // for github stars button
  githubUsername: "abhijeetjagtapp",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/abhijeetjagtapp/",
    instagram: "",
    facebook: "",
    github: "https://github.com/abhijeetjagtapp",
  },
};
export { config };