import React from "react";
import PropTypes from "prop-types";

import "./GoalList.css";

const GoalList = props => {
    return (
       <ul className="goal-list">
       {
          props.goals.map(goal => {
            return <li key={goal.id}>{goal.text}</li>;
          })
       }
      </ul>
    );
};

GoalList.propTypes = {
  goals: PropTypes.array.isRequired
};

export default GoalList;