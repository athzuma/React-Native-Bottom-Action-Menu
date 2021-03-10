# React Native Bottom Action Menu
 Animated bottom action menu for react native

 ## Install

 `npm i react-native-bottom-action-menu`

 ## Usage

 Example of use

 ```jsx
 import { BottomActionMenu } from 'react-native-bottom-action-menu';

 //...

 //To open
 this.bottomActionMenu.show();

 //To close
 this.bottomActionMenu.close();

 //...

 <BottomActionMenu
   ref={bottomActionMenu => {this.bottomActionMenu = bottomActionMenu}}
   onClose={() => {
     console.log('Closed');
     }}
 >
  {...}
 </BottomActionMenu>
 ```
