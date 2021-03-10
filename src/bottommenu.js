import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

let ScreenHeight = Dimensions.get("window").height;

export class BottomMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bounceValue: new Animated.Value(ScreenHeight),
    };
  }

  _subir() {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0,
        velocity: 1,
        tension: 2,
        friction: 8,
      }
    ).start();
  }

  _baixar() {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: ScreenHeight,
        velocity: 1,
        tension: 2,
        friction: 8,
      }
    ).start();
  }



  render() {
    const { onClose, children } = this.props;
    return (
      <Animated.View
        style={[styles.bkg,
        {transform: [{translateY: this.state.bounceValue}]}]}
      >
        <TouchableOpacity onPress={onClose} style={{ flex: 1 }}/>

        <View style={styles.container}>

          <View style={{ position: 'absolute', right: 15, top: 15, zIndex: 1000}}>
            <TouchableOpacity onPress={onClose} style={{ height: 35, width: 35, flexDirection: 'row-reverse' }}>
              <Ionicons name="md-close" size={20} color="#333" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 40 }}/>
          {children}
        </View>
      </Animated.View>
    );
  }
}



const styles = StyleSheet.create({
  bkg: {
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 9999,
  },
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 15,
  },
});
