import React,{useState} from 'react'
import {View, Text, FlatList,
   Image,Dimensions, TouchableWithoutFeedback,StyleSheet } from 'react-native'


const images = [{uri:'https://static.tiket.photos/image/upload/v1591967610/banner/2020/06/12/841ba45b-88c6-47a4-acca-4a68c57d0d7a-1591967608066-0978ce505b23ff7bb7c3e3b0ec502428.jpg' , name:'promo dong', id: 1},
{uri:'https://static.tiket.photos/image/upload/v1592053496/banner/2020/06/13/bfdb26fc-3236-4146-a453-0a93b6bd4d22-1592053494075-905d79260ce5ecf9fbea285ac22de6fe.jpg' , name:'promo dong', id: 1},
{uri:'https://static.tiket.photos/image/upload/v1584340752/banner/2020/03/16/500b1023-b8a1-4ba7-9342-ee2a3694c512-1584340749858-1dd4a14eb5f5a8401812db8d18544699.jpg' , name:'promo dong', id: 1}]
const {width, height} = Dimensions.get('window')

const renderItem = (navigation) => ({item}) => {
  return(
    <TouchableWithoutFeedback>
        <Image  source={{uri:item.uri}} style={{width, height: 3/4 * width }}></Image>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  cursorContainer:{
    position:'absolute',
    bottom: 10,
    flexDirection: 'row',
    left:16
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


class Baner extends React.Component {
  state = {
    pos: 0
  }
   onActiveContentChange = (e) => {
    this.setState({pos:e.viewableItems[0].index })
    // setPos(viewableItems[0].index)
  }

   keyExtractor = (item, index) => {
    return item.id.toString() + index
  }

  handleitemClick = (item) => () => {
    this.props.navigation.navigate('Promo')
  }

   renderItem = ({item}) => {
    return(
      <TouchableWithoutFeedback onPress={this.handleitemClick()}>
          <Image  source={{uri:item.uri}} style={{width, height: 3/4 * width }}></Image>
      </TouchableWithoutFeedback>
    )
  }
  render(){
    const {pos} = this.state
    const {style} = this.props
    return (
      <View style={style}>
        <FlatList 
          horizontal data={images} 
          decelerationRate="fast"
          snapToAlignment="center"
          snapToInterval={width}
          keyExtractor={this.keyExtractor} 
          onViewableItemsChanged={this.onActiveContentChange}
          renderItem={this.renderItem}/>
          <View style={styles.cursorContainer}>
            
            { images.map((im,idx)  => {
              const cursorStyles = [styles.cursor]
              if(idx === pos){
                cursorStyles.push(styles.active)
              }
              return ( <View style={cursorStyles}></View>
                )
              })
            }
          </View>
      </View>
    )
  }
}



export default Baner