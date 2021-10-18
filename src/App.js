import GlobalStyled from "./styles/global";
import { Button } from './components/Button';

function App() {
  return (
    <div>
      <GlobalStyled />
      <Button whiteSchema={false} >Adicionar</Button>
    </div>
  );
}

export default App;
