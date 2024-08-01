import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import useAlert from "../hooks/useAlert";
import { github, instagram, linkedin } from "../assets/icons";
import MagneticButton from "../components/MagneticButton";

const Contact = ({ setExplored }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const { showAlert, hideAlert, alert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {};

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andy",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        showAlert({
          show: true,
          text: "Failed to send message",
          type: "danger",
        });
      });
  };

  useEffect(() => {
    setExplored(true);
  }, []);

  return (
    <section className="relative flex lg:flex-row flex-col contact-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Contact Me
        </h1>

        <form
          className="w-full flex flex-col mt-14 gap-7"
          onSubmit={handleSubmit}
        >
          <label className="text-black font-semibold">
            Name
            <input
              className="input"
              placeholder="John"
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black font-semibold">
            Email
            <input
              className="input"
              placeholder="johndoe@gmail.com"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black font-semibold">
            Message
            <textarea
              className="textarea"
              placeholder="Your message goes here..."
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              className="btn mt-7"
              type="submit"
              onFocus={handleFocus}
              handleBlur={handleBlur}
              disabled={isLoading}
              onSubmit={handleSubmit}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </label>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] flex flex-col items-center">
        <h1 className="sm:text-3xl text-3xl font-semibold sm:leading-snug font-poppins mt-10">
          My Social Medias
        </h1>
        <div className="flex gap-10 mt-10 pb-10">
          <a
            href="https://github.com/AndyC2513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <img src={github} />
            </MagneticButton>
          </a>
          <a
            href="https://instagram.com/andyc2513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <img src={instagram} />
            </MagneticButton>
          </a>
          <a
            href="https://www.linkedin.com/in/andy-chen-9a90232b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <img src={linkedin} />
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
