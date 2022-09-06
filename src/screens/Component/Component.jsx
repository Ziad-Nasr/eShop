import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Components = () => {
  const friends = [
    {Name: 'friend#1', Age: 20},
    {Name: 'friend#2', Age: 34},
    {Name: 'friend#3', Age: 18},
    {Name: 'friend#4', Age: 33},
    {Name: 'friend#5', Age: 92},
    {Name: 'friend#6', Age: 43},
    {Name: 'friend#7', Age: 26},
    {Name: 'friend#8', Age: 28},
    {Name: 'friend#9', Age: 36},
  ];
  return (
    // <Text>Tester</Text>
    <View>
      {/* <TouchableOpacity style={styles.skip}>
        <Text>Skip Bgd</Text>
      </TouchableOpacity>
      <Button style={styles.skip} title="Skip" />
      <Text style={styles.SubHeader}>
        Ya3ni Ta3ala n7ot shwayt kalam keda bas 3shan el button ynzel taht
        shwaya w nshof hy7sal eh keda tyb ba2a
      </Text>
      <Button title="Ana Title" style={styles.Clickme} /> */}
      {/* <View> */}
      <Button title="Yalla Ha ?!" onPress={() => console.log('Tapped')} />
      <TouchableOpacity>
        <Text>Ha Yalla !?</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  Info: {
    flexDirection: 'row',
    marginVertical: 15,
    color: 'white',
    backgroundColor: 'gray',
  },
  friendsstyle: {
    color: 'white',
  },
  agestyle: {
    // display: inline,
    color: 'white',
  },
  skip: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  Header: {
    fontSize: 45,
  },
  SubHeader: {
    fontSize: 20,
    color: 'white',
  },
  Clickme: {
    width: 50,
  },
});

export default Components;

{
  /* <FlatList
        // alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        keyExtractor={friends => friends.Name}
        data={friends}
        renderItem={({item}) => {
          return (
            <View style={styles.Info}>
              <Text>{item.Name}</Text>
              <Text> - </Text>
              <Text>Age: {item.Age}</Text>
            </View>
          );
        }}
      /> */
}
