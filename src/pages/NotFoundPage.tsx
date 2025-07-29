import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn, smoothTransition } from "../lib/motion";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={smoothTransition}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-gray-400" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...smoothTransition, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ ...smoothTransition, delay: 0.8 }}
            className="pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/builder"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                Resume Builder
              </Link>
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
