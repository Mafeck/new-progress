import { Container, Perfil, ContainerPerfil, Modal } from "./style";
import { IoPersonCircle } from "react-icons/io5";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../../Providers/User";
import { Button } from "../../components/Button/index";
import api from "../../services/api";

const Header = () => {
  const { user } = useContext(UserContext);
  const [render, setRender] = useState(false);
  const [renderEditModal, setRenderEditModal] = useState(false);
  const [username, setUsername] = useState(user.username);
  const data = { username: username };
  const history = useHistory();

  const handlePerfil = () => {
    if (render === false) {
      setRender(true);
    } else {
      setRender(false);
    }
  };

  const handleEdit = () => {
    if (renderEditModal === false) {
      setRenderEditModal(true);
      setRender(false);
    } else {
      setRenderEditModal(false);
    }
  };

  // const handleSaveAlteration = () => {
  //   api.patch(`users/${}`, data).then().catch((error) => console.log(error));
  // };

  const handleLogout = () => {
    localStorage.clear();

    return history.push("/login");
  };

  return (
    <Container>
      <Perfil>
        <h5>{user.username}</h5>
        <div className="perfil" onClick={handlePerfil}>
          <IoPersonCircle />
        </div>
      </Perfil>
      {render && (
        <ContainerPerfil>
          <button style={{ background: "#d8f3dc" }} onClick={handleEdit}>
            <div className="divIcon">
              <FaRegEdit color="#25AB42" />
            </div>
            <div className="divText">
              <h3>Editar Perfil</h3>
              <p>Se deseja editar sua conta. clique aqui</p>
            </div>
          </button>

          <button style={{ background: "#fff0f3" }} onClick={handleLogout}>
            <div className="divIcon">
              <FiLogOut color="#ff758f" />
            </div>
            <div className="divText">
              <h3>Sair</h3>
              <p>Se deseja sair da sua conta. clique aqui</p>
            </div>
          </button>
        </ContainerPerfil>
      )}
      {renderEditModal && (
        <Modal
          id="modalContent"
          onClick={(evt) =>
            evt.target.id === "modalContent" && setRenderEditModal(false)
          }
        >
          <div className="modalContent">
            <header className="modalHeader">
              <h3>Editar Perfil</h3>
              <AiOutlineClose
                color="#FFFFFF"
                onClick={() => setRenderEditModal(false)}
              />
            </header>
            <main className="modalBody">
              <input
                type="text"
                value={`${username}`}
                onChange={(evt) => setUsername(evt.target.value)}
              />
              <Button>Salvar Alteração</Button>
            </main>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default Header;
