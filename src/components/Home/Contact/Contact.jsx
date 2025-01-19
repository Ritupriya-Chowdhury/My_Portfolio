import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import SendEmail from "./SendEmail";

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-orange-100 text-black"
      } ` } id="contact"
    >
      <p className="font-bold text-3xl  text-[#FC4319] text-center py-8">
        Get In Touch
      </p>
      <div className="pb-8 px-12">
        <ContactDetails />
      </div>
      <div className="pb-8 px-12">
      <SendEmail />
      </div>
    </div>
  );
};

export default Contact;
