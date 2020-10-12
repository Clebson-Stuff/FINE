import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'

import { List } from 'react-native-paper'

import colors from '/home/josinaldo/WorkStation/LedThink/FINTIC/src/styles/colors.js'

import styles from './styles'

export default function Task() {

  const [oneCrownColor, setOneCrownColor] = useState(colors.colorIconDefault)
  const [secondCrownColor, setSecondCrownColor] = useState(colors.colorIconDefault)
  const [thirdCrownColor, setThirdCrownColor] = useState(colors.colorIconDefault)

  const dataList = [
    {
      text: "Tarefa 1",
      level: 1,
      image: require('../../assets/images/image.jpg')
    },
    {
      text: "Tarefa 2",
      level: 2,
      image: require('../../assets/images/image.jpg')
    },
    {
      text: "Tarefa 3",
      level: 3,
      image: require('../../assets/images/image.jpg')
    },
    {
      text: "Tarefa 4",
      level: 1,
      image: require('../../assets/images/image.jpg')
    },
    {
      text: "Tarefa 5",
      level: 1,
      image: require('../../assets/images/image.jpg')
    },
    {
      text: "Tarefa 6",
      level: 2,
      image: require('../../assets/images/image.jpg')
    },
  ]

  const numColumns = 2
  const ITEM_WIDTH = Dimensions.get('window'
  ).width

  const formData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ text: "empty", empty: true })
    }
    return dataList
  }

  useEffect(() => {
    setOneCrownColor(colors.colorIconDefault),
      setSecondCrownColor(colors.colorIconDefault),
      setThirdCrownColor(colors.colorIconDefault)
  }, []);

  const _renderItem = ({ item, index }) => {
    if (item.level === 1) {
      setOneCrownColor(colors.colorIconLevel)
    }
    if (item.level === 2) {
      setSecondCrownColor(colors.colorIconLevel)
    }
    if (item.level === 3) {
      setThirdCrownColor(colors.colorIconLevel)
    }

    if (item.empty) {
      return <View style={styles.itemInvisible} />
    }

    return (
      <View style={styles.itemStyle}>
        <TouchableOpacity style={styles.button}>
          <Image style={{ width: ITEM_WIDTH / 3, height: 100 }} source={item.image} />
          <Text>{item.text}</Text>
          <View style={styles.contentIcon}>
            <List.Icon icon="crown" color={oneCrownColor} />
            <List.Icon icon="crown" color={secondCrownColor} />
            <List.Icon icon="crown" color={thirdCrownColor} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container} >
      <View style={styles.text}>
        <Text style={styles.textContent}>Tarefas</Text>
      </View>
      <FlatList
        data={formData(dataList, numColumns)}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}