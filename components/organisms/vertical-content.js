import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import MenuItem from '../atoms/menuitem'
import ImageCard from '../molecules/image-card.js'


const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',


  },
  title:{
    color:'#101010',
    fontSize:22,
    marginTop: 16,
    marginHorizontal: 8,
    fontWeight: "600",
  },
  subtitle:{
    marginTop: 8,
    marginHorizontal: 16,
    color:'#666',
    fontSize:14,
    // marginTop: 8,
  },

})



const renderContent = (type, itm,idx, handleMenuClick) => {
    switch (type) {
      case 'image':
        
        return(
          <ImageCard onPress={handleMenuClick(itm)}  {...itm} key={'item-'+ idx} style={{}} />
        )
    
      default:
        return null
    }
}

const VerticalContent = ({style, navigation ,type, data, title, subtitle }) => {
  const handleMenuClick = (item) => () => {
    navigation.navigate('Promo', {name: item.title})
  }
  return (
    <View style={[styles.container,style]}>
        <View style={{}}>
          {title &&   <Text style={[styles.title]}>{title}</Text>}
          {subtitle &&   <Text>{subtitle}</Text>}

        </View>
        {data.map((itm, idx) => renderContent(type,itm, idx, handleMenuClick))}
    </View>
  )
}

export default VerticalContent