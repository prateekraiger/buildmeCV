import React from "react";
import { Contact2 } from "@/components/ui/contact-2";

const ContactPage = () => {
  return (
    <Contact2
      title="Contact Us"
      description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
      phone="(123) 34567890"
      email="support@buildmecv.com"
      web={{ label: "buildmecv.com", url: "https://buildmecv.com" }}
    />
  );
};

export default ContactPage;