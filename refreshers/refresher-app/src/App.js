import React, { useState } from "react";

import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: "cg1", text: "Finish the course"},
    {id: "cg2", text: "Learn the course material"},
    {id: "cg3", text: "Apply the course material"}
  ]);

  const addNewGoalHandler = newGoal => {
    //not best approach - may have race conditions
    //setCourseGoals(courseGoals.concat(newGoal));
    //instead use this approach
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div>
      <h2 className="course-goals">Course Goals</h2>
        <GoalList goals={courseGoals} />
        <NewGoal onAddGoal={addNewGoalHandler}/>
    </div>
  );
};

export default App;