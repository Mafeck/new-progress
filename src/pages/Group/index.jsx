import Header from "../../components/Header";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../services/api";
import { Container, ActivitiesTitle, ActivitiesContent, GoalsTitle, GoalsContent } from './style';
import { useParams } from "react-router";

const Group = () => {
  const [group, setGroup] = useState([]);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const { token } = useContext(UserContext);
  const { id } = useParams();
 
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
  


  return (
    <Container>
      <Header /> 
      <div className='header'>
        <div className='title'>
          <h1>{group.name}</h1>   
          <p>{group.description}</p>
        </div>
        <button>Editar</button>
      </div>
      <div>
        <ActivitiesTitle>
          <h4>Atividades do grupo</h4>
        </ActivitiesTitle>
        <ActivitiesContent>
          {activities.map((item) => {
          return <p key={item.id}>{item.title}</p>
          })}
        </ActivitiesContent>
      </div>
      <div>
        <GoalsTitle>
          <h4>Metas do Grupo</h4>
        </GoalsTitle>
        <GoalsContent>
          {goals.map((item) => {
          return <p key={item.id}>{item.title}</p>
          })}
        </GoalsContent>
      </div>
    </Container>
  );
};

export default Group;
