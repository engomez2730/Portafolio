import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const DescriptionSection = () => (
  <div className="main-description">
    <Title
      className="main-title"
    >
      Enderson Gómez
    </Title>
    <Title
      ellipsis
      level={2}
      className="main-subtitle"
    >
      Web Developer and SQL Programmer
    </Title>
    <Paragraph className="main-paragraph">
      I’m a Web Developer and SQL Programmer passionate about building modern, responsive applications and uncovering insights from data. I have experience in frontend development with React.js, TypeScript, and JavaScript, and backend development with Node.js, Express.js, and databases like MongoDB, SQL Server, and PostgreSQL. .
    </Paragraph>
  </div>
);
export default DescriptionSection;
