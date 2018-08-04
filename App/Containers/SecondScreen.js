import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class SecondScreen extends Component {
  render () {
    return (
      <View style={[styles.mainContainer, {backgroundColor: "purple"}]}>
        <Icon name="play" solid color="#fff" size={50} />
      </View>
    )
  }
}
