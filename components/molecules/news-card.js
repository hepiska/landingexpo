import React from 'react'
import {View, Text, Dimensions, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const {width} = Dimensions.get('window')

const itemWidth =  260

const styles = StyleSheet.create({
  itemContainer:{
    width: itemWidth,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical:8,
    borderRadius:8,
    overflow: 'hidden',
  },
  title:{
    color:'#101010',
    fontSize:16,
    marginTop: 16,
    marginHorizontal: 16,
    fontWeight: "600",
  },
  subtitle:{
    marginTop: 8,
    marginHorizontal: 16,
    color:'#666',
    fontSize:14,
    // marginTop: 8,
  },
  image:{
    width:itemWidth-2,
    height: 5/9 * itemWidth
  }
})


const NewsCard = ({image,title,subtitle,onPress}) => {
  return (
    <View style={styles.itemContainer} onPress={onPress}>
    <TouchableOpacity onPress={onPress}>
    <Image source={{uri: image}} style={styles.image} ></Image>

    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
  )
}

export default NewsCard