import GlobalStyled from "./styles/global";
import { Input } from "./components/Input";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Input 
        label='E-mail' 
        placeholder='Seu melhor e-mail' 
        name='email'/>
    </div>
  );
}

export default App;
