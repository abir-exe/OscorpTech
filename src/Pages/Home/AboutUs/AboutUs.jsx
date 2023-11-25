const AboutUs = () => {
  return (
    <div>
      <h2 className="text-5xl text-center mb-10 border-x-2 py-5">About Us</h2>
      <div className="py-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/ZXcQJs0/japan.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">What is OSCORP TECH?</h1>
            <p className="py-6">
              Welcome to OSCORP TECH ASSET MANAGEMENT, where innovation meets
              efficiency in the realm of asset tracking and management. At
              Oscorp Tech, we understand the pivotal role assets play in the
              daily operations of businesses. Our mission is to empower
              organizations by providing a cutting-edge web application designed
              to streamline asset management processes and enhance overall
              productivity.
            </p>
            <button className="btn btn-outline">Read More...</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-base-200 p-5 rounded-xl">
          <div>
            {/* chat bubbles  */}
            <div className="chat chat-start">
              <div className="chat-bubble">Who We Are?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">
                Oscorp Tech Asset Management is a forward-thinking company
                specializing in developing comprehensive solutions for
                businesses seeking to optimize the utilization of their assets.
                With a foundation rooted in the MERN (MongoDB, Express.js,
                React, Node.js) stack, our team of skilled web developers brings
                a wealth of experience and expertise to deliver a robust and
                user-friendly asset management platform.
              </div>
            </div>
          </div>
          <div>
            {/* chat bubbles  */}

            <div className="chat chat-start">
              <div className="chat-bubble">What Sets Us Apart?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">
                Innovation: Oscorp Tech is committed to staying at the forefront
                of technological advancements. We embrace innovation to
                continually enhance our platform and provide our clients with
                state-of-the-art features. <br />
                User-Centric Design: Understanding the diverse needs of our
                users, we prioritize an intuitive and user-friendly design. Our
                web application is crafted with a focus on simplicity, ensuring
                a smooth experience for both HR/Admins and employees. <br />
                Customizable Solutions: Recognizing that every business is
                unique, our asset management system is highly customizable.
                Tailor the platform to align with your specific requirements and
                workflows, allowing for seamless integration into your
                organization.
              </div>
            </div>
          </div>
          <div>
            {/* chat bubbles  */}

            <div className="chat chat-start">
              <div className="chat-bubble">Our Vision...</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">
                Our vision is to revolutionize the way businesses manage their
                assets. We envision a future where HR/Admins can effortlessly
                monitor and analyze the utilization of company resources,
                ensuring a seamless workflow and maximizing the value of every
                asset.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
