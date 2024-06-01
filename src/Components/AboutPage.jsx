import React from "react";
import { Link } from "react-router-dom";
import AboutPageLogo from "../assets/AboutPage_1_Logo.png";
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
const AboutPage = () => {
  return (
    <div>
      <div className="bg-gray-900 dark:bg-gray-900">
        <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
                  About Our Mental Health Initiative
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  At our organization, we are deeply committed to promoting
                  mental health and well-being. Our mission is to create a
                  supportive and inclusive environment where individuals can
                  prioritize their mental health, find resources, and connect
                  with a community of care.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50">
                  Our Core Values
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <div className="flex items-start">
                      <CheckIcon className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400 mt-1" />
                      <span className="ml-3">
                        Compassion and empathy for all individuals
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <CheckIcon className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400 mt-1" />
                      <span className="ml-3">
                        Promoting a culture of openness and understanding
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <CheckIcon className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400 mt-1" />
                      <span className="ml-3">
                        Providing accessible resources and support
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={AboutPageLogo}
                alt="Mental Health"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
