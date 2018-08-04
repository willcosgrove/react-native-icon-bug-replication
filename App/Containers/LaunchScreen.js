import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("SecondScreen")}>
          <Icon name="play" solid color="#fff" size={50} />
        </TouchableOpacity>
      </View>
    )
  }
}
