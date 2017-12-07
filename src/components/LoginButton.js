import React, { Component } from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';




class LoginButton extends Component{

    constructor(props){
      super(props);
    }

getViewComponent = () => {
  if(this.props.iconSource){
      return(
        <View style={[this.props.buttonViewStyle, viewStyles.buttonViewStyle]}>
          <Image
            resizeMode={'contain'}
            style={[ {width: 25, height: 25}, this.props.iconStyle]}
            source={this.props.iconSource}

          />
            <Text style={[this.props.buttonViewStyle, { backgroundColor: 'transparent', marginLeft: 20}]}>{this.props.children}</Text>
        </View>

      );
  }
    // this block is excuted when the button doesn't have an icon
  else{
    return(
      <View style={[this.props.buttonViewStyle, viewStyles.buttonViewStyle]}>
          <Text style={[this.props.buttonViewStyle, { backgroundColor: 'transparent'}]}>{this.props.children}</Text>
      </View>

    );
  }
}


    render(){
      return(
        <TouchableHighlight
          underlayColor={'transparent'}
          activeOpacity={this.props.activeOpacity}
          style={[this.props.touchableHilightStyle, viewStyles.touchableHilightStyle]}
          onPress={this.props.buttonTapped}
        >
          {this.getViewComponent()}

        </TouchableHighlight>
      );
    }
}

const viewStyles = {
  touchableHilightStyle:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonViewStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

};

const textStyles = {

};


export default LoginButton;
