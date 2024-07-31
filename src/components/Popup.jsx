import { Link } from "react-router-dom";

const TextCard = ({ text, link, buttonText }) => {
  return (
    <div className="pop-box flex flex-col justify-center">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-btn-card pop-btn">
        {buttonText}
      </Link>
    </div>
  );
};

const stageContent = {
  1: (
    <TextCard
      text="Skills Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit."
      link="/about"
      buttonText="Lorem ipsum"
    />
  ),
  2: (
    <TextCard
      text="Projects Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit."
      link="/projects"
      buttonText="Lorem ipsum"
    />
  ),
  3: (
    <TextCard
      text="Resume Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit."
      link="/resume"
      buttonText="Lorem ipsum"
    />
  ),
  4: (
    <TextCard
      text="Contact Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit."
      link="/contact"
      buttonText="Lorem ipsum"
    />
  ),
};

const Popup = ({ currentStage, userViewing }) => {
  if (!userViewing) {
    return stageContent[currentStage] || null;
  }
};

export default Popup;
