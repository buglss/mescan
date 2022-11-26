import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import DATA from "./storage/db"

const Item = ({ name, photo, position }) => (
  <View style={styles.listItem}>
    <Image source={photo} style={{ width: 60, height: 60, borderRadius: 30 }} />
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text>{position}</Text>
    </View>
    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "green" }}>Call</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} photo={item.photo} position={item.position} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 0
  },
  listItem: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    padding: 5,
    backgroundColor: "#FFF",
    width: "96%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30
  }
});

export default App;