import Header from "../../components/Header";
<<<<<<< HEAD
<<<<<<< HEAD

const Groups = () => {
  return (
    <>
      <Header />
    </>
=======
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { ActivitiesContext } from "../../Providers/Activities";
=======
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
>>>>>>> feature/pageGroup
import Card from "../../components/Card";
import { useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../../Providers/User";
import { Link } from "react-router-dom";
import { PlusButton } from "../../components/PlusButton";
<<<<<<< HEAD
import { ContainerGroup, InputDate } from "./style";
=======
import { ContainerGroup } from "./style";
>>>>>>> feature/pageGroup
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { GroupItensButton } from "./style";
<<<<<<< HEAD
import AppBar from "../../components/AppBar";
import Select from "react-select";
import { GoalsContext } from "../../Providers/Goals";
=======
>>>>>>> feature/pageGroup

const Groups = () => {
  const { groups, setGroups } = useContext(GroupsContext);
  const { token } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isAtvModalVisible, setIsAtvModalVisible] = useState(false);
  const [isMetaModalVisible, setIsMetaModalVisible] = useState(false);
<<<<<<< HEAD
  const [atvTitle, setAtvTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectedGroup, setSelectedGroup] = useState({});
  const { activities, setActivities } = useContext(ActivitiesContext);
  const [goalsTitle, setGoalsTitle] = useState("");
  const [achieved, setAchieved] = useState("20");
  const [goalsDifficulty, setGoalsDifficulty] = useState("");
  const { goals, setGoals } = useContext(GoalsContext);
  const [updatePage, setUpdatePage] = useState("");
=======
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectGroup, setSelectGroup] = useState("");
>>>>>>> feature/pageGroup

  useEffect(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data.results);
      })
      .catch((err) => console.log(err));
<<<<<<< HEAD
  }, [updatePage]);

  const filterGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data);
        setUpdatePage("no update");
      })
      .catch((err) => console.log(err));
  };

  const createGroup = (data) => {
=======
  }, []);

  const handleClick = (data) => {
>>>>>>> feature/pageGroup
    data = {
      name: name,
      description: description,
      category: category,
    };
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups([...groups, res.data]);
        setIsModalVisible(false);
        toast.success("Grupo criado com sucesso!");
<<<<<<< HEAD
=======
        console.log(res);
>>>>>>> feature/pageGroup
      })

      .catch((error) => console.log(error));
  };

<<<<<<< HEAD
  const createActivity = (data) => {
    data = {
      title: atvTitle,
      realization_time: new Date(date),
      group: selectedGroup.id,
    };
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActivities([...activities, res.data]);
        setIsAtvModalVisible(false);
        toast.success("Atividade criada com sucesso!");
      })

      .catch((error) => console.log(error));
  };

  const createGoals = (data) => {
    data = {
      title: goalsTitle,
      difficulty: goalsDifficulty,
      how_much_achieved: achieved,
      group: selectedGroup.id,
    };
    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGoals([...goals, res.data]);
        setIsMetaModalVisible(false);
        toast.success("Meta criada com sucesso!");
      })

      .catch((error) => console.log(error));
  };

  const groupNames = groups.map((group) => {
    return { id: group.id, label: group.name };
  });

=======
>>>>>>> feature/pageGroup
  return (
    <section>
      <Header />
      <ContainerGroup>
        <div className="groupButtons">
          <GroupItensButton
            colorSchema={true}
            onClick={() => setIsAtvModalVisible(true)}
          >
            <h4>Criar atividade</h4>
            <p>Articule suas melhores práticas...</p>
          </GroupItensButton>
          {isAtvModalVisible && (
            <Modal
              onClose={() => setIsAtvModalVisible(false)}
              modalTitle={"Criar Atividade"}
              className="atividade"
            >
              <div>
                <TextField
                  type="text"
<<<<<<< HEAD
                  value={atvTitle}
=======
                  value={title}
>>>>>>> feature/pageGroup
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
<<<<<<< HEAD
                  onChange={(e) => setAtvTitle(e.target.value)}
                  placeholder="Título"
                />
                <InputDate
                  type="date"
                  onChange={(evt) => setDate(evt.target.value)}
                />
                <Select
                  options={groupNames}
                  value={selectedGroup}
                  onChange={(selectedGroup) => setSelectedGroup(selectedGroup)}
                />

                <Button
                  onClick={createActivity}
=======
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Título"
                />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="inputData"
                />
                <TextField
                  type="text"
                  value={selectGroup}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Selecionar Grupo"
                />
                <Button
                  onClick={handleClick}
>>>>>>> feature/pageGroup
                  style={{
                    backgroundColor: "var(--color-tertiary)",
                    border: "none",
                    marginTop: "20px",
                  }}
                >
                  Criar atividade
                </Button>
              </div>
            </Modal>
          )}
          <GroupItensButton onClick={() => setIsMetaModalVisible(true)}>
            <h4>Criar meta</h4>
            <p>Desenvolva o melhor em você...</p>
          </GroupItensButton>
          {isMetaModalVisible && (
            <Modal
              onClose={() => setIsMetaModalVisible(false)}
              modalTitle={"Criar Meta"}
              className="meta"
            >
              <div>
                <TextField
                  type="text"
<<<<<<< HEAD
                  value={goalsTitle}
=======
                  value={title}
>>>>>>> feature/pageGroup
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
<<<<<<< HEAD
                  onChange={(e) => setGoalsTitle(e.target.value)}
=======
                  onChange={(e) => setName(e.target.value)}
>>>>>>> feature/pageGroup
                  placeholder="Titulo"
                />
                <div>
                  <h5>Dificuldade</h5>
                  <Button
<<<<<<< HEAD
                    onClick={() => setGoalsDifficulty("Fácil")}
=======
>>>>>>> feature/pageGroup
                    style={{
                      width: "30%",
                      backgroundColor: "var(--gray-2)",
                      color: "var(--color-text)",
                      border: "none",
                    }}
                  >
                    Fácil
                  </Button>
                  <Button
<<<<<<< HEAD
                    onClick={() => setGoalsDifficulty("Médio")}
=======
>>>>>>> feature/pageGroup
                    style={{
                      width: "30%",
                      backgroundColor: "var(--gray-2)",
                      color: "var(--color-text)",
                      border: "none",
<<<<<<< HEAD
                      margin: "2px 15px 0 ",
=======
                      margin: "0 15px",
>>>>>>> feature/pageGroup
                    }}
                  >
                    Médio
                  </Button>
                  <Button
<<<<<<< HEAD
                    onClick={() => setGoalsDifficulty("Difícil")}
=======
>>>>>>> feature/pageGroup
                    style={{
                      width: "30%",
                      backgroundColor: "var(--gray-2)",
                      color: "var(--color-text)",
                      border: "none",
                    }}
                  >
                    Difícil
                  </Button>
                </div>
<<<<<<< HEAD
                <select
                  id="select"
                  onChange={(evt) => setAchieved(evt.target.value)}
                >
                  <option>20</option>
                  <option>40</option>
                  <option>60</option>
                  <option>80</option>
                  <option>100</option>
                </select>
                <Select
                  options={groupNames}
                  value={selectedGroup}
                  onChange={(selectedGroup) => setSelectedGroup(selectedGroup)}
                />
                <Button
                  onClick={createGoals}
=======
                <TextField
                  type="text"
                  value={selectGroup}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Evolução"
                />
                <TextField
                  type="text"
                  value={selectGroup}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Selecionar grupo"
                />
                <Button
                  onClick={handleClick}
>>>>>>> feature/pageGroup
                  style={{
                    backgroundColor: "var(--color-quaternary)",
                    border: "none",
                    marginTop: "20px",
                  }}
                >
                  Criar meta
                </Button>
              </div>
            </Modal>
          )}
        </div>
<<<<<<< HEAD
        <div className="filterGroups">
          <Button
            onClick={() => setUpdatePage("update")}
            style={{
              width: "42%",
              height: "40px",
              padding: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--color-secondary)",
              border: "none",
            }}
          >
            <p>Todos os Grupos</p>
          </Button>
          <Button
            style={{
              width: "42%",
              height: "40px",
              padding: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--color-secondary)",
              border: "none",
            }}
            onClick={filterGroups}
          >
            <p>Meus Grupos</p>
          </Button>
        </div>
=======
>>>>>>> feature/pageGroup
        <div>
          {groups.map((item, index) => (
            <Link
              to={(location) => ({
                ...location,
                pathname: `/groups/group/${item.id}`,
              })}
              key={index}
            >
              <Card type={false} title={item.name} category={item.category} />
            </Link>
          ))}
        </div>
        <PlusButton
          greenSchema={true}
          onClick={() => setIsModalVisible(true)}
        />
        {isModalVisible && (
          <Modal
            onClose={() => setIsModalVisible(false)}
            modalTitle={"Criar Grupo"}
            className="group"
          >
            <div>
              <TextField
                type="text"
                value={name}
                id="outlined-username"
                variant="outlined"
                margin="normal"
                size="medium"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                placeholder="nome do grupo"
              />
              <TextField
                type="text"
                value={description}
                id="outlined-username"
                variant="outlined"
                margin="normal"
                size="medium"
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
                placeholder="descrição"
              />
              <TextField
                type="text"
                value={category}
                id="outlined-username"
                variant="outlined"
                margin="normal"
                size="medium"
                fullWidth
                onChange={(e) => setCategory(e.target.value)}
                placeholder="categoria"
              />
              <Button
<<<<<<< HEAD
                onClick={createGroup}
=======
                onClick={handleClick}
>>>>>>> feature/pageGroup
                style={{
                  backgroundColor: "var(--color-secondary)",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                Criar
              </Button>
            </div>
          </Modal>
        )}
<<<<<<< HEAD
        <AppBar selectedGroup={true} />
      </ContainerGroup>
    </section>
>>>>>>> feature/groups
=======
      </ContainerGroup>
    </section>
>>>>>>> feature/pageGroup
  );
};

export default Groups;
