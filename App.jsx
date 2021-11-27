import React, { Component } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { globalStyles } from './styles/Globals';
import io from 'socket.io-client';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: []
    }
  }

  componentDidMount() {
    this.socket = io("http://192.168.43.58:3000");
    this.socket.on("chat message", msg => this.setState({chatMessages: [...this.state.chatMessages, msg]}))
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({chatMessage: ""})
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text>hello</Text>
          <TextInput
            style={{height: 40, borderWidth: 2}}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={text => this.setState({chatMessage: text})}
          />
          <FlatList
            data={this.state.chatMessages}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
      </View>
    )
  }
}
