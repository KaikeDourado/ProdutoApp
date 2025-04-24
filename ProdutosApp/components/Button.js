import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onpress}>
        <Text style={styles.textobotao}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#48528d',
    padding: 15,
    margin: 10,
    width: 'auto',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000000',
  },
  textobotao: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Inter-Black'
  }
})