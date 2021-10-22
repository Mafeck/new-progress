import Header from "../../components/Header";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { ActivitiesContext } from "../../Providers/Activities";
import Card from "../../components/Card";
import { useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../../Providers/User";
import { Link } from "react-router-dom";
import { PlusButton } from "../../components/PlusButton";
import { ContainerGroup, InputDate } from "./style";
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { GroupItensButton } from "./style";
import AppBar from "../../components/AppBar";
import Select from "react-select";
import { GoalsContext } from "../../Providers/Goals";

const Groups = () => {
  const { groups, setGroups } = useContext(GroupsContext);
  const { token } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isAtvModalVisible, setIsAtvModalVisible] = useState(false);
  const [isMetaModalVisible, setIsMetaModalVisible] = useState(false);
  const [atvTitle, setAtvTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectedGroup, setSelectedGroup] = useState({});
  const { activities, setActivities } = useContext(ActivitiesContext);
  const [goalsTitle, setGoalsTitle] = useState("");
  const [achieved, setAchieved] = useState("20");
  const [goalsDifficulty, setGoalsDifficulty] = useState("");
  const { goals, setGoals } = useContext(GoalsContext);
  const [updatePage, setUpdatePage] = useState("");

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
      })

      .catch((error) => console.log(error));
  };

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
                  value={atvTitle}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
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
                  value={goalsTitle}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
                  onChange={(e) => setGoalsTitle(e.target.value)}
                  placeholder="Titulo"
                />
                <div>
                  <h5>Dificuldade</h5>
                  <Button
                    onClick={() => setGoalsDifficulty("Fácil")}
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
                    onClick={() => setGoalsDifficulty("Médio")}
                    style={{
                      width: "30%",
                      backgroundColor: "var(--gray-2)",
                      color: "var(--color-text)",
                      border: "none",
                      margin: "2px 15px 0 ",
                    }}
                  >
                    Médio
                  </Button>
                  <Button
                    onClick={() => setGoalsDifficulty("Difícil")}
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
                onClick={createGroup}
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
        <AppBar selectedGroup={true} />
      </ContainerGroup>
    </section>
  );
};

export default Groups;
