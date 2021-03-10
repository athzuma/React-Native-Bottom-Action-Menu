import React from 'react';

import { BottomMenu } from './bottommenu';
import { AnimatedBackgroundBlack } from './backgroundblack';


export default class BottomActionMenu extends React.Component {
  constructor(props){
    super(props);

  }

  show() {
    this.bgBlack.fadeIn();
    this.bottomMenu._subir();
  }

  close() {
    this.bgBlack.fadeOut();
    this.bottomMenu._baixar();
    this.props.onClose();
  }

  render() {
    const { onClose, children } = this.props;
    return (
      <>
        <AnimatedBackgroundBlack ref={bgBlack => {this.bgBlack = bgBlack}}/>
        <BottomMenu ref={bottomMenu => {this.bottomMenu = bottomMenu}} onClose={() => { this.close(); }}>
          {children}
        </BottomMenu>
      </>
    );
  }
}
