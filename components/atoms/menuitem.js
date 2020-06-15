import React from 'react'
import {View, Text, Dimensions, StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const {width} = Dimensions.get('window')

const itemWidth = (width-64)/3

const styles = StyleSheet.create({
  itemContainer:{
    width: itemWidth,
    height: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical:8,
    borderRadius:8,
    borderWidth: 1,
    borderColor:'rgba(125,125,125,0.3)'
  },
  font:{
    color:'#0064d2',
    fontSize:16,
    marginTop: 8,
    fontWeight: "600",
  },
  icon:{

  }
})

const MenusItem = ({name,title,icon,onPress}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <MaterialIcons name={icon} size={64} color='#fedd00'></MaterialIcons>
  <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MenusItem