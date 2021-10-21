import AppBar from "../../components/AppBar";
import Header from "../../components/Header";

const Habits = () => {
  return (
    <div>
      <Header />
      <AppBar selectedHabits={true} />
    </div>
  );
};

export default Habits;
