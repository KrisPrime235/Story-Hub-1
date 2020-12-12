import * as React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';
import AppHeader from './AppHeader'



export default class WriteStory extends React.Component{
  constructor(){
   super();
   this.state={title:'',author:'',story:''}
  }
  render(){ 
    return (
      <View >
          <AppHeader/>
           <View style ={{justifyContent:'center'}}>
              <TextInput placeholder="Story Title" style={styles.inputText}/>
              <TextInput placeholder="Author" style={styles.inputText}/>
              <TextInput placeholder="Write your story here"  style={{width: '60%',height:300,  borderWidth:2, alignSelf: "center", marginTop:10}}/>
           </View>
          <TouchableOpacity style={styles.submitButton} onPress = {this.handleTransaction}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  submitButton: {
    alignSelf: "center",
    backgroundColor: "yellow",
    height: 30,
    width: 100,
    borderRadius:10,
    marginTop: 10,
    
  },
  inputText: {
    width: '60%',
    height:35,
    marginTop:10,
    borderWidth:2,

    alignSelf: "center",  
  },
  text: {
    textAlign: 'center',
    marginTop:5,
    fontWeight: 'bold',
    alignSelf:'center',
},
});