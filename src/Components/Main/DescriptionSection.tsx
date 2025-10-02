import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ParagraphStyles = {
  fontSize: "1.2rem",
  color: "#FFF", // Dark gray color
  fontWeight: "100",
  textAlign: "left" as const,
};

const DescriptionSection = () => (
  <div className="main-description">
    <Title
      style={{
        fontSize: "3.0rem",
        color: "#FFF", // Dark gray color
        fontWeight: "600",
      }}
    >
      Enderson Gómez
    </Title>
    <Title
      ellipsis
      level={3}
      style={{
        color: "#FFF", // Dark gray color
        fontWeight: "400",
      }}
    >
      Web Developer and Data Analyst
    </Title>
    <Paragraph style={ParagraphStyles}>
      Hi! I’m a passionate Web Developer and Data Analyst. I enjoy building
      modern, responsive web applications and uncovering insights from data to
      drive impactful decisions. I thrive at the intersection of development and
      analytics, combining technical skills with business understanding to
      deliver full-stack solutions. I have hands-on experience in frontend
      development using React.js, TypeScript, and modern JavaScript. On the
      backend, I work with Node.js and Express.js. I’ve also built applications
      that integrate with databases like MongoDB, SQL Server, and PostgreSQL. As
      a data analyst, I use Power BI and Python (with libraries like pandas and
      matplotlib) to explore data, generate reports, and present meaningful
      visualizations. I'm passionate about turning data into knowledge and
      building applications that make an impact. Whether it’s crafting intuitive
      user interfaces or transforming raw data into insights, I’m always eager
      to learn and take on new challenges.
    </Paragraph>
  </div>
);
export default DescriptionSection;
