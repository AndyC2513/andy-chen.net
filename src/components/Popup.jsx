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
      text="Throughout my journey, I have picked up many skills from personal interests as well as academic studies."
      link="/about"
      buttonText="Learn More"
    />
  ),
  2: (
    <TextCard
      text="I have built multiple successful projects over the years, feel free to check them out!"
      link="/projects"
      buttonText="View Projects"
    />
  ),
  3: (
    <TextCard
      text="Looking for my resume?"
      link="/resume"
      buttonText="Download"
    />
  ),
  4: (
    <TextCard
      text="Want to get in touch? Feel free to contact me through email or social media."
      link="/contact"
      buttonText="Contact Me"
    />
  ),
};

const Popup = ({ currentStage, userViewing }) => {
  if (!userViewing) {
    return stageContent[currentStage] || null;
  }
};

export default Popup;
