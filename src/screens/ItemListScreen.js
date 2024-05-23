import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function ItemListScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setItems(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Hubo un error obteniendo los items", error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        {item.image && (
          <Image
            style={styles.image}
            source={{ uri: item.image }}
          />
        )}
        <Text style={styles.description}>Especie: {item.species}</Text>
        <Text style={styles.description}>Género: {item.gender}</Text>
        <Text style={styles.description}>Estado: {item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  list: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 5,
    width: '90%',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  loading: {
    marginTop: 20,
  },
});
