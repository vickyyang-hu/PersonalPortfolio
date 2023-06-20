import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7qmtzw9",
        "template_5szps7i",
        {
          from_name: form.name,
          to_name: "Vicky",
          from_email: form.email,
          to_email: "vickyyang.hu@hotmail.com",
          message: form.message,
        },
        "DzH9mP7JTc1eWr62T"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-8 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 xl:w-[400px] sm:w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-primary py-3 px-8 outline-none w-fit text-secondary font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <section
        className="text-secondary gap-5 flex mt-5 items-center justify-center"
      >
        <a className="contact-details" href="https://www.linkedin.com/in/vicky-yang-hu-cfa-cpa-ca-8287618">
          <i className="fab fa-linkedin text-xl"></i> LinkedIn
        </a>
        <a className="contact-details" href="https://github.com/vicky0h">
          <i className="fab fa-github text-xl"></i> GitHub
        </a>
        <a className="contact-details" href="mailto: vickyyang.hu@hotmail.com">
          <i className="fas fa-at text-xl"></i> Send me an email
        </a>
      </section>
    </>
  );
};

export default SectionWrapper(Contact, "contact");