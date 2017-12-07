import React, { Component } from 'react';
import { StyleSheet, Text, View , ImageBackground, StatusBar, ScrollView, Image } from 'react-native';
import Dimensions from 'Dimensions';
import LoginButton from './src/components/LoginButton';

//This code will give the width and height of the currrent screen
const windowSize = Dimensions.get('window');


// Size definition here
const standardComponentWidth = (0.82 * windowSize.width);

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMedialButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state={

    }
  }

   buttonTapped = () => {
     console.log('Button Tapped');

   }

  loginScreenComponent = () => {
    return(
      <ImageBackground style={viewStyles.container}
      resizeMode = {'cover'}
      source={require('./src/images/insta-bg2.jpg')}
      >

      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <ScrollView style={viewStyles.scrollViewStyle}>
          <Image
            style={viewStyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />

          <LoginButton
          buttonViewStyle={viewStyles.instagramLoginButtonView}
          buttonTextStyle={textStyles.instagramButtonTextStyle}
          buttonTapped={this.buttonTapped}
          touchableHilightStyle={viewStyles.instagramTouchableHighlightStyles}
          activeOpacity={0.75}
          >
              Log In (via instagram)
          </LoginButton>

      </ScrollView>

      </ImageBackground>
    );
  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instagramLogo:{
    width: (0.45 * windowSize.width),
    height:(0.15 * windowSize.height),
    marginBottom: 25,
    alignSelf: 'center'
  },

  instagramLoginButtonView:{
    backgroundColor: 'transparent',
    borderColor: colors.socialMedialButtonBorderColor,
    borderWidth: sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  scrollViewStyle:{
    paddingTop: '35%'
  },
  instagramTouchableHighlightStyles:{
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop: 5
  }

});

const textStyles ={

  instagramButtonTextStyle:{
    color: colors.text,
    fontWeight: '500'
  }
}
