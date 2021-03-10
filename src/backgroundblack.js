import React from 'react';
import {
  StyleSheet,
  Animated
} from 'react-native';

export class AnimatedBackgroundBlack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      show: false,
    };
  }

  fadeIn() {
    this.setState({
      show: true
    });
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      }
    ).start();
  }

  fadeOut(){
    this.setState({ fadeAnim: new Animated.Value(1) },
    () => {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }
      ).start(() => {
        this.setState({
          show: false
        });
      });
    })
  }

  render() {
    let { fadeAnim, show } = this.state;
    return (
      <>
        {show &&
          <Animated.View style={[styles.bkg, { opacity: fadeAnim } ]} />
        }
      </>
    );
  }
}



const styles = StyleSheet.create({
  bkg: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 9995,
  },
});
