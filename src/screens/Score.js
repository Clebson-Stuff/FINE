/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {Button, Title, Card, List, ProgressBar, Colors} from 'react-native-paper';

const DATA = [
  {
    id: 1,
    title: 'Teste1',
    imgUrl: 'www',
  },
  {
    id: 2,
    title: 'Teste1',
    imgUrl: 'www',
  },
  {
    id: 3,
    title: 'Teste1',
    imgUrl: 'www',
  },
  {
    id: 4,
    title: 'Teste1',
    imgUrl: 'www',
  },
  {
    id: 5,
    title: 'Teste1',
    imgUrl: 'www',
  },
];

export default function Score() {
  return (
    <View style={styles.container}>
      <View style={styles.backward}>
        <View style={styles.headerBg}></View>
        <View style={styles.bodyBg}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.h1}>Score</Text>
        </View>
        <View style={styles.score}>
          <List.Icon color={'#E4101F'} icon="cash-usd" />
          <Text style={styles.scoreCont}>3000</Text>
          <View style={styles.textContent}>
            <View><Text style={styles.textInfo}>Meta:</Text></View>
            <View><Text style={styles.textInfo}>                                                          2000</Text></View> 
          </View>
          <View style={{width: '90%'}}>
            <ProgressBar
              style={styles.progress}
              progress={0.5}
              color={'#E4101F'}
            />
          </View>
        </View>
        <View style={styles.scoreFeatures}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Ranking
          </Button>
          <Text style={styles.beneficio}>Benefícios</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({item}) => renderItens(item)}
            ItemSeparatorComponent={() => {
              return (
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    height: '100%',
                    width: 20,
                  }}
                />
              );
            }}
            keyExtractor={(item, id) => id.toString()}
          />
        </View>
      </View>
    </View>
  );
}

const renderItens = ({item}) => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={{height: '80%'}}
        source={{uri: 'https://picsum.photos/700'}}
      />
      <Card.Content>
        <Title>Card title</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  beneficio: {
    fontSize: 24,
    margin: 10
  },
  card: {
    width: 150,
  },
  textContent: {
    alignContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  textInfo: {
    color: Colors.white,
  },
  progress: {
    width: '100%',
    height: 15,
    borderRadius: 8,
  },
  container: {
    flex: 1,
  },
  headerBg: {
    padding: 40,
    flex: 1, // Set your own custom Color
  },
  bodyBg: {
    backgroundColor: '#F5F5F5',
    flex: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  h1: {
    fontSize: 42,
    color: '#F5F5F5',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  score: {
    backgroundColor: '#212121',
    borderRadius: 12,
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  scoreCont: {
    fontSize: 42,
    color: '#E4101F',
  },
  backward: {
    zIndex: 0,
    elevation: 0,
    flex: 1,
    backgroundColor: '#E4101F',
  },
  content: {
    flex: 1,
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  scoreFeatures: {
    flex: 2,
    margin: 10,
  },
});
