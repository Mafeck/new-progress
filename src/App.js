import GlobalStyled from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyled />
      <Routes />
    </div>
  );
}

export default App;
