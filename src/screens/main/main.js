import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Score from '../Score';
import Tasks from '../Tasks'

const DashboardRoute = () => <Text>oi</Text>;

const ScoreRoute = () => <Score />;

const TarefasRoute = () => <Tasks />;

const ContaRoute = () => <Text>oi</Text>;

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Dashboard', title: 'Dashboard', icon: 'view-dashboard'},
    {key: 'Score', title: 'Score', icon: 'cash-usd'},
    {key: 'Tarefas', title: 'Tarefas', icon: 'book'},
    {key: 'Conta', title: 'Conta', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Dashboard: DashboardRoute,
    Score: ScoreRoute,
    Tarefas: TarefasRoute,
    Conta: ContaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;
