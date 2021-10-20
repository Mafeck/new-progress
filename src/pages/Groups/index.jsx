import Header from "../../components/Header";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups";
import Card from '../../components/Card';
import { useEffect } from "react";
import api from '../../services/api';
import { UserContext } from '../../Providers/User';
import { Link } from "react-router-dom";
import { PlusButton } from "../../components/PlusButton";
import { ContainerGroup } from "./style";

const Groups = () => {
  const { groups, setGroups } = useContext(GroupsContext);
  const { token } = useContext(UserContext);

 
  useEffect(() => {
    api
      .get('/groups/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data.results)
        console.log(res)})
      .catch((err) => console.log(err));
  }, [])

  return (
    <section>
      <Header />
      <ContainerGroup>
        <div>
          <button>atividade</button>
          <button>meta</button>
        </div>
        <div>
          {groups.map((item, index) => <Link to={location => ({ ...location, pathname: `/groups/group/${item.id}`})} key={index}><Card type={false} title={item.name} category={item.category} /></Link>)}
        </div>
        <PlusButton greenSchema={true} />
      </ContainerGroup>
    </section>
    );
};

export default Groups;
