import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class FilmDetail extends Component {
  render() {
    return (
      <View style={styles.main_container}>
         <Text>Movie Details</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

export default FilmDetail
