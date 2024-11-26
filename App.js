import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [text, setText] = useState(''); // State to store input field value

  const handleButtonPress = () => {
    Alert.alert('Input Received', `You entered: ${text}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RMIT Health App 1.0!</Text>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        value={text}
        onChangeText={setText}
      />

      {/* Button */}
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
