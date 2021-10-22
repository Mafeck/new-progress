import Header from "../../components/Header";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Providers/User";
import Modal from "../../components/Modal";
import { TextField } from "@material-ui/core";
import api from "../../services/api";
import {
  Container,
  ActivitiesTitle,
  ActivitiesContent,
  GoalsTitle,
  GoalsContent,
  EditDivButton,
} from "./style";
import { useParams } from "react-router";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";

const Group = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [group, setGroup] = useState([]);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const { token } = useContext(UserContext);
  const { id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [isAtvModalVisible, setIsAtvModalVisible] = useState(false);
  const [isGoalModalVisible, setIsGoalModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [atvId, setAtvId] = useState("");

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSubscriptions(res.data);
      })
      .catch((err) => console.log(err));
  }, [subscriptions]);

  useEffect(() => {
    api
      .get(`/groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroup(res.data);
        setActivities(res.data.activities);
        setGoals(res.data.goals);
      })
      .catch((err) => console.log(err));
  }, []);

  const subscribeGroup = () => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Inscrição feita com sucesso!"))
      .catch((err) => console.log(err));
  };

  const updateGroup = (data) => {
    data = {
      category: category,
    };
    console.log(data);
    api
      .patch(`/groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Grupo editado com sucesso!");
        setIsModalVisible(false);
      })
      .catch((err) => console.log(err));
  };

  const updateActivity = (data) => {
    data = { title: title };
    api
      .patch(`/activities/${atvId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atualização feita com sucesso!");
        setIsAtvModalVisible(false);
      })
      .catch((error) => console.log(error));
  };
  const deleteActivity = () => {
    api
      .delete(`/activities/${atvId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atividade excluida com sucesso!");
        setIsAtvModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const updateGoals = (data) => {
    data = {
      achieved: true,
    };
    api
      .patch(`/goals/${atvId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atualização feita com sucesso!");
        setIsGoalModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const deleteGoal = () => {
    api
      .delete(`/goals/${atvId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Meta excluida com sucesso!");
        setIsGoalModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const exitGroup = () => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Você saiu do grupo!");
      })
      .catch((err) => console.log(err));
  };
  const getEditAtvModal = (isTrue, id) => {
    setIsAtvModalVisible(isTrue);
    setAtvId(id);
  };

  const getEditGoalModal = (isTrue, id) => {
    setIsGoalModalVisible(isTrue);
    setAtvId(id);
  };
  return (
    <Container>
      <Header />
      <div className="header">
        <div className="title">
          <h1>{group.name}</h1>
          <p>Descrição: {group.description}</p>
          <p>Categoria: {group.category}</p>
        </div>
        <div className="buttonBox">
          {subscriptions.some((item) => item.id == group.id) ? (
            <>
              <Button
                onClick={() => setIsModalVisible(true)}
                whiteSchema={true}
              >
                Editar
              </Button>

              <Button onClick={exitGroup}>Sair</Button>
            </>
          ) : (
            <Button onClick={subscribeGroup}>Participar</Button>
          )}
        </div>
      </div>
      <div>
        <ActivitiesTitle>
          <h4>Atividades do grupo</h4>
        </ActivitiesTitle>
        <ActivitiesContent>
          {activities.map((item) => {
            return (
              <div
                onClick={() => {
                  getEditAtvModal(true, item.id);
                }}
                key={item.id}
              >
                <p>{item.title}</p>
              </div>
            );
          })}
        </ActivitiesContent>
      </div>
      <div>
        <GoalsTitle>
          <h4>Metas do Grupo</h4>
        </GoalsTitle>
        <GoalsContent>
          {goals.map((item) => {
            return (
              <div
                onClick={() => {
                  getEditGoalModal(true, item.id);
                }}
                key={item.id}
              >
                <p>{item.title}</p>
              </div>
            );
          })}
        </GoalsContent>
        {isModalVisible && (
          <Modal
            onClose={() => setIsModalVisible(false)}
            modalTitle={"Editar Grupo"}
            className="group"
          >
            <div>
              <TextField
                type="text"
                value={category}
                id="outlined-username"
                variant="outlined"
                margin="normal"
                size="medium"
                fullWidth
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoria"
              />

              <Button
                onClick={updateGroup}
                style={{
                  backgroundColor: "var(--gray-2)",
                  border: "none",
                  marginTop: "20px",
                  color: "var(--color-text)",
                }}
              >
                Salvar
              </Button>
            </div>
          </Modal>
        )}
        {isAtvModalVisible && (
          <Modal
            onClose={() => setIsAtvModalVisible(false)}
            modalTitle={"Editar Atividade"}
            className="atividade"
          >
            <div>
              <TextField
                type="text"
                value={title}
                id="outlined-username"
                variant="outlined"
                margin="normal"
                size="medium"
                fullWidth
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />

              <EditDivButton>
                <Button
                  onClick={updateActivity}
                  style={{
                    backgroundColor: "var(--gray-2)",
                    border: "none",
                    marginTop: "20px",
                    color: "var(--color-text)",
                    width: "42%",
                  }}
                >
                  Salvar
                </Button>
                <Button
                  onClick={deleteActivity}
                  style={{
                    backgroundColor: "var(--gray-2)",
                    border: "none",
                    marginTop: "20px",
                    color: "var(--color-text)",
                    width: "42%",
                  }}
                >
                  Excluir
                </Button>
              </EditDivButton>
            </div>
          </Modal>
        )}
        {isGoalModalVisible && (
          <Modal
            onClose={() => setIsGoalModalVisible(false)}
            modalTitle={"Editar Meta"}
            className="meta"
          >
            <div>
              <h3>A meta foi alcançada?</h3>

              <EditDivButton>
                <Button
                  onClick={updateGoals}
                  style={{
                    backgroundColor: "var(--gray-2)",
                    border: "none",
                    marginTop: "20px",
                    color: "var(--color-text)",
                    width: "42%",
                  }}
                >
                  Concluir
                </Button>
                <Button
                  onClick={deleteGoal}
                  style={{
                    backgroundColor: "var(--gray-2)",
                    border: "none",
                    marginTop: "20px",
                    color: "var(--color-text)",
                    width: "42%",
                  }}
                >
                  Excluir
                </Button>
              </EditDivButton>
            </div>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default Group;
