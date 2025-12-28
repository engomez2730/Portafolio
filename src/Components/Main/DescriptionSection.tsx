import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ParagraphStyles = {
  fontSize: "1.4rem",
  color: "#FFF", // Dark gray color
  fontWeight: "100",
  textAlign: "left" as const,
  fontFamily: "'Story Script', cursive",
};

const DescriptionSection = () => (
  <div className="main-description">
    <Title
      style={{
        fontSize: "3.0rem",
        color: "#FFF", // Dark gray color
        fontWeight: "600",
        fontFamily: "'Story Script', cursive",
      }}
    >
      Enderson Gómez
    </Title>
    <Title
      ellipsis
      level={2}
      style={{
        color: "#FFF", // Dark gray color
        fontWeight: "400",
        fontFamily: "'Story Script', cursive",
      }}
    >
      Web Developer and Data Analyst
    </Title>
    <Paragraph style={ParagraphStyles}>
      I’m a Web Developer and Data Analyst passionate about building modern, responsive applications and uncovering insights from data. I have experience in frontend development with React.js, TypeScript, and JavaScript, and backend development with Node.js, Express.js, and databases like MongoDB, SQL Server, and PostgreSQL. As a data analyst, I use Power BI and Python (pandas, matplotlib) to analyze data and create impactful visualizations. I enjoy combining technical skills with business understanding to deliver full-stack solutions that make a difference.
    </Paragraph>
  </div>
);
export default DescriptionSection;
