import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions, feedback, or want to collaborate? Reach out to us!
      </p>
      <ul className="text-md text-gray-600 space-y-2">
        <li>
          Email:{" "}
          <a
            href="mailto:support@buildmecv.com"
            className="text-blue-600 underline"
          >
            support@buildmecv.com
          </a>
        </li>
        <li>
          Twitter:{" "}
          <a
            href="https://twitter.com/buildmecv"
            className="text-blue-600 underline"
          >
            @buildmecv
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/prateekraiger/buildmecvv"
            className="text-blue-600 underline"
          >
            buildmecvv
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
