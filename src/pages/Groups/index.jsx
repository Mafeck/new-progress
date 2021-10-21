import Header from "../../components/Header";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import Card from "../../components/Card";
import { useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../../Providers/User";
import { Link } from "react-router-dom";
import { PlusButton } from "../../components/PlusButton";
import { ContainerGroup } from "./style";
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { GroupItensButton } from "./style";
import AppBar from "../../components/AppBar";

const Groups = () => {
  const { groups, setGroups } = useContext(GroupsContext);
  const { token } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isAtvModalVisible, setIsAtvModalVisible] = useState(false);
  const [isMetaModalVisible, setIsMetaModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectGroup, setSelectGroup] = useState("");

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
  }, []);

  const handleClick = (data) => {
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
        console.log(res);
      })

      .catch((error) => console.log(error));
  };

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
                  value={title}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
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
                  value={title}
                  id="outlined-username"
                  variant="outlined"
                  margin="normal"
                  size="medium"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Titulo"
                />
                <div>
                  <h5>Dificuldade</h5>
                  <Button
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
                onClick={handleClick}
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
