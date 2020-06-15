import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import colors from '../constants/Colors'



import { MonoText } from '../components/StyledText';

export default function Promo(props) {
  return (
    <>
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>{props.route.params ? props.route.params.name : 'Promo'}</Text>
    </SafeAreaView>
    <View style={styles.container}>
      <Text>Promo</Text>

    </View>
    </>
  );
}




const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor: '#fff',

  },

  headerText:{
    fontSize: 32,
    color: colors.yellow,
    fontWeight:'bold',

  },
  header: {
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

});
