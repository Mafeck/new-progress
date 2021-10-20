import { Container, Modal, CreateHabit } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/Button/index";
import Header from "../../components/Header/index";
import { PlusButton } from "../../components/PlusButton";
import { useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../../Providers/User";
import { HabitsContext } from "../../Providers/Habits/index";
import jwtDecode from "jwt-decode";

const Habits = () => {
  const { habits, setHabits } = useContext(HabitsContext);
  const { token } = useContext(UserContext);
  const [tokenDecode] = useState(jwtDecode(token));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [frequency, setFrequency] = useState("");
  const [createHabit, setCreatHabit] = useState(false);

  const handleCreateModal = () => {
    if (createHabit == false) {
      setCreatHabit(true);
    }
  };

  const handleCreateHabit = (data) => {
    data = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: tokenDecode.user_id,
    };

    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    api
      .get("/habits/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setHabits(res.data.results));
  }, []);

  return (
    <Container>
      <Header />
      {createHabit && (
        <Modal
          id="Modal"
          onClick={(evt) => evt.target.id === "Modal" && setCreatHabit(false)}
        >
          <CreateHabit>
            <header className="title">
              <h3>Criar Hábito</h3>
              <AiOutlineClose
                className="close"
                onClick={() => setCreatHabit(false)}
              />
            </header>
            <main className="main">
              <input
                onChange={(evt) => setTitle(evt.target.value)}
                placeholder="Título"
                type="text"
              />
              <input
                onChange={(evt) => setCategory(evt.target.value)}
                placeholder="Categoria"
                type="text"
              />
              <h5 className="subTitle">Dificuldade</h5>
              <div className="divButton">
                <button onClick={() => setDifficulty("fácil")}>Fácil</button>
                <button onClick={() => setDifficulty("médio")}>Médio</button>
                <button onClick={() => setDifficulty("difícil")}>
                  Difícil
                </button>
              </div>
              <h5 className="subTitle">Frequência</h5>
              <div className="divButton">
                <button onClick={() => setFrequency("diário")}>Diário</button>
                <button onClick={() => setFrequency("semanal")}>Semanal</button>
                <button onClick={() => setFrequency("mensal")}>Mensal</button>
              </div>
              <Button onClick={handleCreateHabit} whiteSchema={false}>
                Criar
              </Button>
            </main>
          </CreateHabit>
        </Modal>
      )}
      <PlusButton onClick={handleCreateModal} className="plusButton" />
    </Container>
  );
};

export default Habits;
