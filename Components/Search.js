import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

export default class Search extends Component {

  constructor(props) {
    super(props)
    searchedText: ''
    this.state = {
      films: [],
      isLoading: false
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _loadFilms() {

    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
        this.setState({
          films: data.results,
          isLoading: false
        })
      })
    }

  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
           <ActivityIndicator size='large' />
        </View>
     )
    }
  }

  render() {
    return (

      <View style={styles.main_container}>

        <TextInput
           style={styles.textInput}
           placeholder="Movie Title"
           onChangeText={(text) => this._searchTextInputChanged(text)}
           onSubmitEditing={() => this._loadFilms()}
        />
        <Button title="Search" onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}

      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
