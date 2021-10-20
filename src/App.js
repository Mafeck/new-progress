import GlobalStyled from "./styles/global";
import Routes from "./routes";
import Card from './components/Card';

function App() {
  return (
    <div>
      <GlobalStyled />
      <Routes />
      <Card />
    </div>
  );
}

export default App;
