import React, {Component} from 'react';
import { ImageBackground, Image, Text, View, StatusBar, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';
//import custom Component
import LoginButton from './src/components/LoginButton';

const windowSize = Dimensions.get('window');

//size definistions HERE
const standardComponentWidth = (0.82 * windowSize.width)

const colors= {
  facebook:'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {

  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}
export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  buttonTapped = () =>{
    console.log ('Button succesfully tapped');
  }

  loginScreenComponent = () =>{
    return(
      <ImageBackground
        style={viewStyles.container}
        resizeMode={'cover'}
        source={require('./src/images/Instabackground.jpg')}
        >
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <ScrollView  style ={viewStyles.scrollViewStyle}>
          <Image
            style={viewStyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />

          <LoginButton
            buttonViewStyle={viewStyles.instagramLoginButtonView}
            buttonTextStyle={textStyle.instagramLoginButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={viewStyles.instagramLoginButtonTouchableHighlightStyle}
            activeOpacity={0.75}
          >
            Log In (Via instagram)
          </LoginButton>

          <LoginButton
            buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
            buttonTextStyle={textStyle.instagramLoginButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={[viewStyles.instagramLoginButtonTextStyle, viewStyles.facebookHighlightView]}
            activeOpacity={0.75}
            iconSource={require('./src/images/facebook-white-logo.png')}
          >
            Facebook
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

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instagramLogo:{
      width: (0.50 * windowSize.width),
      height: (0.15 * windowSize.width),
      marginBottom: 25,
      alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  },
  instagramLoginButtonView:{
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth:sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  instagramLoginButtonTouchableHighlightStyle:{
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  facebookLoginButtonView:{
    backgroundColor: colors.facebook
  },
  facebookHighlightView:{
    marginTop: 20,
    marginBottom:10
  }
};
const textStyle = {
  instagramLoginButtonTextStyle:{
    color: colors.text,
    fontWeight: '500'
  },
}
