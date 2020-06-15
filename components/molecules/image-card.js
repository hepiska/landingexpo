import React from 'react'
import {View, Text, Dimensions, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const {width} = Dimensions.get('window')

const itemWidth =  width/2 - 32

const styles = StyleSheet.create({
  itemContainer:{
    width: itemWidth,
    height: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical:8,
    borderRadius:8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor:'rgba(125,125,125,0.3)'
  },

  image:{
    width:itemWidth-2,
    height:itemWidth,
    borderRadius:8,

  }

})

const ImageCard = ({image,title,subtitle,onPress}) => {
  return (
    <View style={styles.itemContainer} onPress={onPress}>
      <TouchableOpacity onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} ></Image>
      </TouchableOpacity>
    </View>
  )
}

export default ImageCard