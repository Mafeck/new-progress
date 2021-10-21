import { Container, Modal, ChildModal, ChildModal2 } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/Button/index";
import Card from "../../components/Card/index";
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
  const [patchHabits, setPatchHabits] = useState(false);
  const [habitId, setHabitId] = useState("");
  const [achieved, setAchieved] = useState("20");

  const handleCreateModal = () => {
    if (createHabit === false) {
      setCreatHabit(true);
    }
  };

  const handlePatchModal = (evt) => {
    if (patchHabits === false) {
      setPatchHabits(true);
      setHabitId(evt.currentTarget.id);
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

  const handleSaveChanges = (data) => {
    data = {
      how_much_achieved: achieved,
      achieved: false,
    };

    api
      .patch(`/habits/${habitId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPatchHabits(false);
      })
      .catch((error) => console.log(error));
  };

  const handleConcluded = (data) => {
    data = {
      how_much_achieved: 100,
      achieved: true,
    };

    api
      .patch(`/habits/${habitId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPatchHabits(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //criar paginação para pegar os hábitos do usuário
    api
      .get("/habits/?page=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setHabits(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Header />
      {createHabit && (
        <Modal
          id="Modal"
          onClick={(evt) => evt.target.id === "Modal" && setCreatHabit(false)}
        >
          <ChildModal>
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
          </ChildModal>
        </Modal>
      )}
      {habits &&
        habits.map((value, index) => {
          return (
            <Card
              onClick={handlePatchModal}
              id={value.id}
              key={index}
              type={true}
              title={value.title}
              category={value.category}
            ></Card>
          );
        })}
      {patchHabits && (
        <Modal
          id="Modal"
          onClick={(evt) => {
            evt.target.id === "Modal" && setPatchHabits(false);
          }}
        >
          <ChildModal2>
            <header className="title">
              <h3>Detalhes do Hábito</h3>
              <AiOutlineClose
                className="close"
                onClick={() => setPatchHabits(false)}
              />
            </header>
            <main className="main">
              <div className="divButton--2">
                <select onChange={(evt) => setAchieved(evt.target.value)}>
                  <option>20</option>
                  <option>40</option>
                  <option>60</option>
                  <option>80</option>
                  <option>100</option>
                </select>
                <button onClick={handleConcluded}>concluído</button>
              </div>
              <Button onClick={handleSaveChanges}>Salvar alterações</Button>
            </main>
          </ChildModal2>
        </Modal>
      )}
      <PlusButton onClick={handleCreateModal} className="plusButton" />
    </Container>
  );
};

export default Habits;
