import React from "react";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row w-[90%]">
        <div className="text-center lg:text-left lg:w-[50%]">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6 font-medium text-lg text-[#545E6F]">
            We would love to hear from you! If you have any questions, feedback,
            or inquiries, please don't hesitate to reach out to us. Our team is
            here to assist you. <br />
            <br /> For general inquiries or support, you can email us at
            tasteturkish@phero.com or fill out the contact form. We strive to
            respond to all inquiries within 24 hours. <br />
            <br /> If you have specific questions regarding a recipe or need
            cooking advice, we encourage you to leave a comment directly on the
            recipe page. This way, our community of food enthusiasts can also
            benefit from the discussion. <br />
            <br /> Follow us on social media to stay updated with the latest
            recipes, cooking tips, and more. You can find us on Facebook,
            Twitter, and Instagram. <br />
            <br /> We appreciate your interest in TasteTurkish and look forward
            to connecting with you. Happy cooking!
          </p>
        </div>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Message</span>
                    </label>
                    <textarea
                      placeholder="Your Message"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-custom">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
