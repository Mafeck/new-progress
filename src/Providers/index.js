import { UserProvider } from "./User/index";
import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <GroupsProvider>
          <GoalsProvider>
            <ActivitiesProvider>{children}</ActivitiesProvider>
          </GoalsProvider>
        </GroupsProvider>
      </HabitsProvider>
    </UserProvider>
  );
};

export default Providers;
