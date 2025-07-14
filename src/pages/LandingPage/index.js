import React, { useState } from "react";
import bgShape from "../../assets/bg-shape-1.svg";
import assetDesign from "../../assets/asset-design.png";
import HorizontalTimeline from "../../components/Timeline";

import {
  FiDatabase,
  FiChevronsRight,
  FiBriefcase,
  FiCodepen,
  FiRefreshCcw,
} from "react-icons/fi";

import "./index.css";

const steps = [
  {
    id: 1,
    icon: <FiDatabase />,
    title: "Multi-source data",
    description:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
    isCompleted: true,
  },
  {
    id: 2,
    icon: <FiChevronsRight />,
    title: "Stakeholder alignment",
    description:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
    isCompleted: false,
  },
  {
    id: 3,
    icon: <FiBriefcase />,
    title: "Ready to Go Algos",
    description:
      "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
    isCompleted: false,
  },
  {
    id: 4,
    icon: <FiCodepen />,
    title: "Internal capability building",
    description:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
    isCompleted: false,
  },
  {
    id: 5,
    icon: <FiRefreshCcw />,
    title: "Continuous engagement",
    description:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
    isCompleted: false,
  },
];

const parseHeadingWithSpan = (text) => {
  // Replace text between ***...*** with a span
  return text.split(/(\*\*\*[^*]+\*\*\*)/g).map((part, index) => {
    if (part.startsWith("***") && part.endsWith("***")) {
      const content = part.slice(3, -3);
      return (
        <span key={index} style={{ color: "#FFBD59" }}>
          {content}
        </span>
      );
    }
    return part;
  });
};

const LandingPage = () => {
  const [heading, setHeading] = useState(
    "Hyper boost your ***Revenue Management, Marketing*** and Commercial Functions with Business Ready AI"
  );
  const [inputValue, setInputValue] = useState(heading);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setHeading(inputValue);
    setIsEditing(false);
  };

  return (
    <main>
      <section className="top-section-bg">
        <img
          src={bgShape}
          alt="decorative background"
          className="bg-shape-1-img"
        />
        <div className="main-info-container">
          <h1 className="main-heading">{parseHeadingWithSpan(heading)}</h1>
          <p className="main-description">
            Powerful AI solutions that go beyond mere data sorting and
            exploration. Use our array of AI enabled solutions that understand
            your business and recommend the optimal way forward. 
          </p>
          <button type="button" className="get-started-btn">
            Get Started
          </button>
          <button
            type="button"
            className="edit-btn"
            style={{ marginTop: "10px", padding: "8px 12px" }}
            onClick={() => setIsEditing(true)}
          >
            Edit Heading
          </button>
        </div>
        <img
          src={assetDesign}
          alt="decorative background"
          className="asset-design-img"
        />
      </section>

      <section className="bottom-section-bg">
        <HorizontalTimeline steps={steps} />
      </section>

      {isEditing && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h3 className="popup-title">Heading</h3>
            <p className="popup-note">
              Add <strong>***</strong> before and after any word to apply color.
            </p>
            <textarea
              className="popup-input"
              rows="4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="popup-save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
