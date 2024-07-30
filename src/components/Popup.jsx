import { Link } from "react-router-dom";

const TextCard = ({ text, link, buttonText }) => {
  return (
    <div className="pop-box">
      <p className="font-medium sm:text-xl tent-center">{text}</p>
      <Link to={link} className="neo-brutalism-btn-card pop-btn">
        {buttonText}
      </Link>
    </div>
  );
};

const stageContent = {
  1: <TextCard text="Skills." link="/" buttonText="Lorem ipsum" />,
  2: <TextCard text="Projects." link="/" buttonText="Lorem ipsum" />,
  3: <TextCard text="Resume." link="/" buttonText="Lorem ipsum" />,
  4: <TextCard text="Contact." link="/" buttonText="Lorem ipsum" />,
};

const Popup = ({ currentStage, userViewing }) => {
  if (!userViewing) {
    return stageContent[currentStage] || null;
  }
};

export default Popup;
