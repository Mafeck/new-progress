import Header from "../../components/Header";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../services/api";
import { Container, ActivitiesTitle, ActivitiesContent, GoalsTitle, GoalsContent } from './style';
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
        .then((_) => toast.success('Inscrição feita com sucesso!'))
        .catch((err) => console.log(err))
  }

  const exitGroup = () => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success('Você saiu do grupo!'))
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <Header /> 
      <div className='header'>
        <div className='title'>
          <h1>{group.name}</h1>   
          <p>{group.description}</p>
        </div>
        <div className='buttonBox'>
          {subscriptions.some(item => item.id == group.id) ? (
            <>
            <Button whiteSchema={true}>Editar</Button>
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
