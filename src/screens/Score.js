import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

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
        <View style={styles.score}></View>
        <View style={styles.scoreFeatures}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Ranking
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingBottom: 50,
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
