import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import MenuItem from '../atoms/menuitem'


const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',


  }
})

const menuItems = [{name: 'flight', title: 'Flight', icon: 'flight', profider: 'material'},
{name: 'event', title: 'Movie', icon: 'movie', profider: 'material'},
{name: 'car', title: 'Car', icon: 'directions-car', profider: 'material'},
{name: 'train', title: 'Train', icon: 'train', profider: 'material'},
{name: 'hotel', title: 'Hotel', icon: 'local-hotel', profider: 'material'},
]

const Menus = ({style, navigation}) => {
  const handeMenuClick = (item) => () => {
    console.log(item)
    navigation.navigate('Promo', {name: item.title})
  }
  return (
    <View style={[styles.container,style]}>
        {menuItems.map((itm, idx) => <MenuItem onPress={handeMenuClick(itm)}  {...itm} key={'item-'+ idx}style={{}} />)}
    </View>
  )
}

export default Menus