import React,{useState} from 'react'
import {View, Text, FlatList,
   Image,Dimensions, TouchableWithoutFeedback,StyleSheet } from 'react-native'
import NewsCard from '../molecules/news-card'
import PromoCart from '../molecules/promo-card'





const {width, height} = Dimensions.get('window')




const styles = StyleSheet.create({
  cursorContainer:{
    position:'absolute',
    bottom: 10,
    flexDirection: 'row',
    left:16
  },
  title:{
    color:'#101010',
    fontSize:22,
    marginTop: 16,
    marginHorizontal: 8,
    fontWeight: "600",
  },
  subtitle:{
    color:'#888',
    fontSize:16,
    marginHorizontal: 8,
    marginBottom: 8,
    fontWeight: "600",
  },
  
  cursor:{
    width:24,
    height:4,
    backgroundColor:'#fff',
    marginRight: 8
  },
  active:{
    backgroundColor:"#fedd00"
  }

})


class Hcontent extends React.Component {
  state = {
    pos: 0
  }
   onActiveContentChange = (e) => {
    this.setState({pos:e.viewableItems[0].index })
    // setPos(viewableItems[0].index)
  }

   keyExtractor = (item, index) => {
    const {type,data} = this.props

    return "" + type + index
  }

  handlePress = (item) => () => {

    const { type } = this.props
    if(type === 'promo'){
      this.props.navigation.navigate('Promo')
    }
    if(type === 'news'){
     //  return null              
     this.props.navigation.navigate('News')
    }  
  }

   renderItem = ({item}) => {
     const { type } = this.props
     if(type === 'promo'){
      return(
        <PromoCart onPress={this.handlePress(item)} {...item}> </PromoCart>
      )
     }
     if(type === 'news'){
      //  return null              
      return (<NewsCard onPress={this.handlePress(item)}  {...item}> </NewsCard>)
     }
     return null
 
  }
  render(){
    const {pos} = this.state
    const {style,data,type, title,subtitle} = this.props
    return (
      <View style={style}>
       <View style={{}}>
          {title &&   <Text style={[styles.title]}>{title}</Text>}
          {subtitle &&   <Text style={[styles.subtitle]}>{subtitle}</Text>}

        </View>
        <FlatList 
          horizontal data={data} 
          decelerationRate="fast"
          snapToAlignment="center"
          snapToInterval={width}
          keyExtractor={this.keyExtractor} 
          onViewableItemsChanged={this.onActiveContentChange}
          renderItem={this.renderItem}/>
      </View>
    )
  }
}



export default Hcontent