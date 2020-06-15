import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Banner from '../components/organisms/baner'
import Menus from '../components/organisms/menu'
import Info from '../components/organisms/info'
import DinamicContent from '../components/organisms/dinamic-content'



import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.contentContainer}>
      <Banner navigation={navigation} ></Banner>
      <Menus navigation={navigation} style={styles.menus}></Menus>
      <DinamicContent navigation={navigation}></DinamicContent>
      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor: '#fff',

  },
  menus:{
    marginVertical: 32,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },

});
