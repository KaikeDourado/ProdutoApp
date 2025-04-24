import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      name: 'Banana',
      preco: '9,99',
      foto: require('./assets/Banana.jpg'),
    },
    {
      name: 'Maçã',
      preco: '5,99',
      foto: require('./assets/Maca.jpg'),
    },
    {
      name: 'Uva',
      preco: '4,99',
      foto: require('./assets/Uva.jpeg'),
    },
    {
      name: 'Pera',
      preco: '2,00',
      foto: require('./assets/Pera.jpeg'),
    },
    {
      name: 'Abacate',
      preco: '6,99',
      foto: require('./assets/Abacate.jpeg'),
    },
    {
      name: 'Melancia',
      preco: '18,50',
      foto: require('./assets/Melancia.jpeg'),
    },
    {
      name: 'Mimosa',
      preco: '3,45',
      foto: require('./assets/Mimosa.jpeg'),
    },
    {
      name: 'Ameixa',
      preco: '7,77',
      foto: require('./assets/Ameixa.jpeg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Lista de Produtos</Text>
        {produtos.map((produtos, index) => (
          <ProductCard
            key={index}
            name={produtos.name}
            preco={produtos.preco}
            foto={produtos.foto}
          />
        ))}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
    marginTop: 50,
    color:  '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#243269',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
