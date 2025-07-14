import React from "react";
import "./index.css"; // We'll define styles here

const HorizontalTimeline = ({ steps }) => {
  return (
    <div className="timeline-container">
      <ul className="timeline-row">
        {steps.map((step) => {
          const contentPosition = step.id % 2 === 0 ? "up" : "down";

          return (
            <li className={`timeline-step`}>
              {step.isCompleted && <div className="completed"></div>}
              <div className={`timeline-text-card ${contentPosition}`}>
                <div className="timeline-icon">{step.icon}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HorizontalTimeline;
