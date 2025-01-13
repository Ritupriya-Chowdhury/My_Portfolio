import { useForm } from "react-hook-form";
import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const SendEmail = () => {
  const theme = useSelector((state) => state.theme.theme);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const onSubmit = async (data) => {
    try {
      const serviceID = "service_ab4n79a";
      const templateID = "template_iympx8t";
      const userID = "_Xqgj_Kw32WM35leN";

      await emailjs.send(serviceID, templateID, data, userID);

      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Thank you for contacting us. We will get back to you soon!",
      });

      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } p-8 rounded-lg shadow-lg max-w-3xl mx-auto`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} ref={form} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-3 text-black border rounded-md shadow-sm focus:ring-[#FC4319] focus:border-[#FC4319] ${
                errors.name ? "border-red-500" : "border-gray-900"
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full p-3 text-black border rounded-md shadow-sm focus:ring-[#FC4319] focus:border-[#FC4319] ${
                errors.email ? "border-red-500" : "border-gray-900"
              }`}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="sub" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            id="sub"
            type="text"
            {...register("sub", { required: "Subject is required" })}
            className={`w-full p-3 text-black border rounded-md shadow-sm focus:ring-[#FC4319] focus:border-[#FC4319] ${
              errors.subject ? "border-red-500" : "border-gray-900"
            }`}
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className={`w-full p-3 text-black border rounded-md shadow-sm focus:ring-[#FC4319] focus:border-[#FC4319] ${
              errors.message ? "border-red-500" : "border-gray-900"
            }`}
            placeholder="Your Message"
            rows={5}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-3 border rounded-md font-bold hover:text-white  border-[#FC4319]
             hover:bg-[#FC4319] bg-white text-[#FC4319]
            `}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
