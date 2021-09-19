import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  const myFunc = async () => {
    const url = `http://10.0.2.2:8080/api/products`;
    const response = await fetch(url);   // fetch page
    const responseJson = await response.json();  // get response text

    console.log(responseJson);
  }

  return (
    <View style={styles.container}>
      <Button title="Click" onPress={myFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
