import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class FilmItem extends Component {
  render() {
    return (
      <View style={styles.main_container}>
         <Text style={styles.title_text}>Movie Title</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {

  }

})
