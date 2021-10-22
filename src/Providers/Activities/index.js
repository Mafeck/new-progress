import { createContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState("");

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        activityId,
        setActivityId,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
