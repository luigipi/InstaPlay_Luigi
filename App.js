import React, { Component } from 'react';
import { StyleSheet, Text, View , ImageBackground, StatusBar, ScrollView, Image, Linking } from 'react-native';
import Dimensions from 'Dimensions';
import LoginButton from './src/components/LoginButton';
import TappableText from './src/components/TappableText';

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

          <LoginButton
          buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
          buttonTextStyle={textStyles.instagramButtonTextStyle}
          buttonTapped={this.buttonTapped}
          touchableHighlightStyle={[viewStyles.instagramTouchableHighlightStyles, viewStyles.facebookButtonTouchableHighlightStyle]}
          activeOpacity={0.75}
          iconSource={require('./src/images/facebook-white-logo.png')}
          >
            Facebook
          </LoginButton>
          {this.forgotLoginDetailsComponent()}
      </ScrollView>

      </ImageBackground>
    );
  }

  forgotLoginDetailsComponent = () => {
    return(
      <View style={viewStyles.forgotLoginDetailsContainer}>
        <Text style={textStyles.forgotLoginText}>Forgot your login details?</Text>
        <TappableText
          textStyle={[textStyles.forgotLoginText, textStyles.forgotLoginDetailsBold]}
          textTapped={ () => Linking.openURL(urls.forgotInstagramLogin) }
          >Get help Signing In</TappableText>
      </View>
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

  facebookLoginButtonView : {
    backgroundColor: colors.facebook

  },

  scrollViewStyle:{
    paddingTop: '38%'
  },
  instagramTouchableHighlightStyles:{
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop: 5
  },

  facebookButtonTouchableHighlightStyle:{
    marginTop: 20,
    marginBottom: 5
  },

  forgotLoginDetailsContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10

  }

});

const textStyles ={

  instagramButtonTextStyle:{
    color: colors.text,
    fontWeight: '500'
  },
   forgotLoginText:{
     color: 'white',
     backgroundColor: 'transparent',
     fontSize: sizes.pageFontSize,
     marginRight: 3

   },
   forgotLoginDetailsBold:{
     fontWeight: 'bold'
   }
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};
