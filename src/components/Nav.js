import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faListAlt,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDailymotion } from "@fortawesome/free-brands-svg-icons";
const Nav = ({ handleFilterClick }) => {
  return (
    <div className="nav">
      <div className="nav-content all" onClick={() => handleFilterClick("All")}>
        <FontAwesomeIcon icon={faListAlt} /> All
      </div>
      <div
        className="nav-content otherFa"
        onClick={() => handleFilterClick("daily")}
      >
        <FontAwesomeIcon icon={faDailymotion} />
        Daily
      </div>
      <div
        className="nav-content otherFa"
        onClick={() => handleFilterClick("weekly")}
      >
        <FontAwesomeIcon icon={faCalendarWeek} />
        Weekly
      </div>
      <div
        className="nav-content otherFa"
        onClick={() => handleFilterClick("monthly")}
      >
        <FontAwesomeIcon icon={faCalendarWeek} />
        Monthly
      </div>
      <div
        className="nav-content otherFa"
        onClick={() => handleFilterClick("yearly")}
      >
        <FontAwesomeIcon icon={faCalendarWeek} />
        Yearly
      </div>
    </div>
  );
};

export default Nav;
