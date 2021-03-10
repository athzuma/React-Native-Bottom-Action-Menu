# React Native Bottom Action Menu
 Animated bottom action menu for react native

 ## Install

 `npm i react-native-bottom-action-menu`

 ## Usage

 Example of use

 ```jsx
 import React from 'react';
 import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

 import BottomActionMenu from 'react-native-bottom-action-menu';

 export default class App extends React.Component {
   constructor(props){
     super(props);
   }

   showMenu() {
     this.bottomActionMenu.show();
   }

   action() {
     console.log('Any action here');
     this.bottomActionMenu.close();
   }

   render() {
     return (
       <View style={styles.container}>
         <TouchableOpacity onPress={() => { this.showMenu() }}>
           <Text>Open menu</Text>
         </TouchableOpacity>

         <BottomActionMenu
           ref={bottomActionMenu => {this.bottomActionMenu = bottomActionMenu}}
           onClose={() => { console.log("Some action to take during closing") }}
         >
           <Text style={styles.title}>An example of a title!</Text>
           <Text style={styles.text}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </Text>
           <TouchableOpacity style={styles.btn} onPress={() => { this.action() }}>
             <Text>OK</Text>
           </TouchableOpacity>
         </BottomActionMenu>

       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   title: {
     textAlign: 'center',
     fontSize: 17,
   },
   text: {
     textAlign: 'justify',
     marginTop: 20,
   },
   btn: {
     backgroundColor: '#CCC',
     height: 40,
     borderRadius: 10,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 40
   }
 });
 ```
