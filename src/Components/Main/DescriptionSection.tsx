import { Typography } from "antd";
import { useLanguage } from '../../contexts/LanguageContext';

const { Title, Paragraph } = Typography;

const DescriptionSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="main-description">
      <Title
        className="main-title"
      >
        {t('hero.name')}
      </Title>
      <Title
        ellipsis
        level={2}
        className="main-subtitle"
      >
        {t('hero.title')}
      </Title>
      <Paragraph className="main-paragraph">
        {t('hero.description')}
      </Paragraph>
    </div>
  );
};
export default DescriptionSection;
