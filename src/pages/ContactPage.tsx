import React from "react";
import { EnhancedContact } from "../components/blocks/EnhancedContact";
import { FaqSection } from "../components/blocks/FaqSection";
import { useMetaTags } from "../lib/hooks";
import contactContent from "../content/contact.json";

const ContactPage = () => {
  useMetaTags({
    title: "Contact BuildMeCV - Get Help & Support | Resume Builder",
    description:
      "Get in touch with BuildMeCV for support, feedback, or collaboration. Find answers to frequently asked questions about our AI resume builder.",
    keywords:
      "contact buildmecv, resume builder support, help, FAQ, customer service, feedback",
  });

  return (
    <div className="space-y-24 sm:space-y-32 my-12">
      {/* Enhanced Contact Section */}
      <EnhancedContact content={contactContent.contactForm} />

      {/* FAQ Section */}
      <FaqSection content={contactContent.faqSection} />
    </div>
  );
};

export default ContactPage;
