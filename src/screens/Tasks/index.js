import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Text
} from 'react-native'

import { Icon } from 'react-native-elements'

import { colors } from '../../styles/colors';

import styles from './styles'

export default function Task() {

  const [ oneCrownColor, setOneCrownColor ] = useState(colors.colorIconDefault)
  const [ secondCrownColor, setSecondCrownColor ] = useState(colors.colorIconDefault)
  const [ thirdCrownColor, setThirdCrownColor ] = useState(colors.colorIconDefault)

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
    }
  ]

  formData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length/numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns)

    while(totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({text: "empty", empty: true})
    }
    return dataList
  }

  const numColumns = 2
  const ITEM_WIDTH = Dimensions.get('window'
  ).width

  _renderItem = ({item, index}) => {
    useEffect(() => {
      if(item.level === 1) {
        setOneCrownColor(colors.colorIconLevel)
      }
      if(item.level === 2) {
        setSecondCrownColor(colors.colorIconLevel)
      }
      if(item.level === 3) {
        setThirdCrownColor(colors.colorIconLevel)
      }
    },[]);

    if(item.empty) {
      return <View style={[styles.itemStyle,styles.itemInvisible]}/>
    }

    return (
      <View style={styles.itemStyle}>
        <TouchableOpacity style={styles.button}>
          <View style={{width: 100, height: ITEM_WIDTH}}>
            <Image source={item.image}/>
            <Text>{item.text}</Text>
            <View style={styles.contentIcon}> 
              <Icon name='crown' color={oneCrownColor}/>
              <Icon name='crown' color={secondCrownColor}/>
              <Icon name='crown' color={thirdCrownColor}/>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return(
    <View style={styles.container} >
      <Text style={styles.text}>Tarefas</Text>
      <FlatList 
        data={this.formData(dataList, numColumns)}
        renderItem={this._renderItem}
        keyExtractor = {(item, index)=> index.toString()}
        numColumns = {numColumns}
      />
    </View>
  );
}