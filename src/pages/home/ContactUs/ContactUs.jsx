import React, { useState } from "react";

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  const handleMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
    setSent(true);
  };
  return (
    <div className=" bg-white">
      <div className="mx-auto hero-content flex-col lg:flex-row w-[90%]">
        <div className="text-center lg:text-left lg:w-[50%]">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6 text-lg text-[#545E6F]">
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, please don't hesitate to reach out to us. Our team is
            here to assist you. <br /> <br />
            For general inquiries or support, you can email us at
            turkishtaste@phero.com or fill out the contact form below. We strive
            to respond to all inquiries within 24 hours. <br /> <br />
            Follow us on social media to stay updated with the latest recipes,
            cooking tips, and more. You can find us on Facebook, Twitter, and
            Instagram. <br /> <br />
            We appreciate your interest in TasteTurkish and look forward to
            connecting with you. Happy cooking!
          </p>
        </div>
        <div className="lg:w-[50%] lg:flex justify-center">
          <div className="mockup-phone mx-auto">
            <div className="camera pb-10 flex justify-center items-baseline">
              <small
                className="text-white text-center text-xs mt-5"
                style={{ fontFamily: "Ysabeau" }}
              >
                TasteTurkish
              </small>
            </div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <h3 className="mb-5 text-xl font-semibold">
                  Send us your message
                </h3>
                <form onSubmit={handleMessage} className="p-4">
                  <label htmlFor="" className="">
                    Your Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered input-md w-full max-w-xs mb-4"
                    required
                  />
                  <label htmlFor="">Your Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                    required
                  ></textarea>
                  <div className="flex justify-center items-center mt-5">
                    <button
                      className="btn btn-custom normal-case"
                      disabled={sent ? true : false}
                    >
                      {sent ? "Message Sent" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
