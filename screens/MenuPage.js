import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text>Promo</Text>

    </View>
  );
}




const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor: '#fff',

  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },

});
