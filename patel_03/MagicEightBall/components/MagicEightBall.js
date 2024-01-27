// components/MagicEightBall.js
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Text } from 'react-native';

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const MagicEightBall = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (text) => {
    setQuestion(text);
  };

  const handleSubmit = () => {
    // Randomly choose a response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setResponse(randomResponse);

    // Open the modal
    setModalVisible(true);
  };

  const closeModal = () => {
    // Close the modal and reset state
    setModalVisible(false);
    setQuestion('');
    setResponse('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ask a question..."
        value={question}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View>
          <Text>Question: {question}</Text>
          <Text>Response: {response}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

export default MagicEightBall;
