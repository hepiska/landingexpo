import React from 'react'
import {View, Text} from 'react-native'
import HorizontalLayout from './horizontal-content'
import VerticalLayout from './vertical-content'



const contentdata = [
  {
  layout: 'horizontal',
  title: "Ini berita penting ",
  subtitle: "Ini berita penting yang bisa menyelamatkan hidup kamu",
  type: 'news',
  data:[
    {id: 1, title: "Beli Tiket", subtitle: 'Beli tiken harus rapid test' ,image: 'https://static.tiket.photos/image/upload/v1591750099/home/2020/06/10/5924081f-807d-429a-b712-a2df6c5eb33c-1591750097596-d2481397435819daa6ef3b3b15eade4b.jpg', title: "Beli Tiket"}, 
    {id:2, title: "Nonton di netflix ada", subtitle: 'Beli tiken harus rapid test' ,image: 'https://static.tiket.photos/image/upload/v1591750099/home/2020/06/10/5924081f-807d-429a-b712-a2df6c5eb33c-1591750097596-d2481397435819daa6ef3b3b15eade4b.jpg', title: "Beli Tiket"},
    {id:3, title: "Beli Tiket", subtitle: 'mau ntnt bioskop udah ngak bisa netflix aja' ,image: 'https://static.tiket.photos/image/upload/v1591750099/home/2020/06/10/5924081f-807d-429a-b712-a2df6c5eb33c-1591750097596-d2481397435819daa6ef3b3b15eade4b.jpg', title: "Beli Tiket"}
  ]
},
{
  layout: 'vertical',
  type: 'image',
  title: "Persiapann liburan harus siap sakit ",
  data:[
    {image: 'https://static.tiket.photos/image/upload/v1592215663/home/2020/06/15/fc0d167a-9dc7-45fc-8026-bafd5bd536d3-1592215656915-ee311635b3731423d6d5d5741633cfb6.jpg', title: "Beli Tiket"}, 
    {image: 'https://static.tiket.photos/image/upload/v1592215663/home/2020/06/15/fc0d167a-9dc7-45fc-8026-bafd5bd536d3-1592215656915-ee311635b3731423d6d5d5741633cfb6.jpg', title: "Beli Tiket"},
    { image: 'https://static.tiket.photos/image/upload/v1592215663/home/2020/06/15/fc0d167a-9dc7-45fc-8026-bafd5bd536d3-1592215656915-ee311635b3731423d6d5d5741633cfb6.jpg', title: "Beli Tiket"}
  ]
},
{
  layout: 'horizontal',
  title: "promo ",
  subtitle: "promo menarik selama dirumah aja",
  type: 'promo',
  data:[
    {id: 1, title: "Beli Tiket", subtitle: 'Beli tiken harus rapid test' ,image: 'https://static.tiket.photos/image/upload/v1592186709/home/2020/06/15/2f9bb7ce-33bb-46b4-908b-18469ad75c1d-1592186707515-e0c8b291e111a7e2fb94b553be50b899.jpg', title: "Beli Tiket"}, 
    {id:2, title: "Nonton di netflix ada", subtitle: 'Beli tiken harus rapid test' ,image: 'https://static.tiket.photos/image/upload/v1592186709/home/2020/06/15/2f9bb7ce-33bb-46b4-908b-18469ad75c1d-1592186707515-e0c8b291e111a7e2fb94b553be50b899.jpg', title: "Beli Tiket"},
    {id:3, title: "Beli Tiket", subtitle: 'mau ntnt bioskop udah ngak bisa netflix aja' ,image: 'https://static.tiket.photos/image/upload/v1592186709/home/2020/06/15/2f9bb7ce-33bb-46b4-908b-18469ad75c1d-1592186707515-e0c8b291e111a7e2fb94b553be50b899.jpg', title: "Beli Tiket"}
  ]
},

]



const DinamicContent = ({style, navigation}) => {
  return (
    <View style={{marginHorizontal:12}}>
      {contentdata.map(dat => {
        if(dat.layout === 'horizontal'){
          return <HorizontalLayout navigation={navigation} {...dat} style={{marginVertical: 8}}></HorizontalLayout>
        }
        if(dat.layout === 'vertical'){
          return <VerticalLayout navigation={navigation}  {...dat} style={{marginVertical: 8}}></VerticalLayout>
        }
        return null
      })}
    </View>
  )
}

export default DinamicContent