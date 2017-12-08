import React, { Component } from 'react';
import { StyleSheet, Text, View , ImageBackground, StatusBar, ScrollView, Image, Linking, WebView } from 'react-native';
import Dimensions from 'Dimensions';
import LoginButton from './src/components/LoginButton';
import TappableText from './src/components/TappableText';
import CellUserDataBar from './src/components/CellUserDataBar';

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

// This is the inital state of the app on start-up
    this.state={
      authURL: urls.instagramAuthLogin,
      accessToken: '',
      displayAuthenticationWebView: false,
      displayLoginScreen: true

    }
  }
onURLStateChange = (webViewState) => {

// the string to search for in order to get an access token
  const accessTokenSubString = 'access_token=';

  // this will store the current url being displayed in our custom browser
  const currentURL = webViewState.url;

  console.log("current URL ="  + currentURL)

}

authWebViewComponent = () => {
  return (
    <WebView
      source={{ uri: this.state.authURL }}
      startInLoadingState={true}
      onNavigationStateChange={this.onURLStateChange}
     />
  );
}


   buttonTapped = () => {

     // when the button is pressed set displayAuthenticationWebView to true
     this.setState({displayAuthenticationWebView: true, displayLoginScreen:false})

   }

  loginScreenComponent = () => {
    return(
      <ImageBackground style={viewStyles.container}
      resizeMode = {'cover'}
      source={require('./src/images/insta-bg.jpg')}
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
          {this.forgotLoginDetailsComponent('Forgot your log in details?', 'Get help signing in.', urls.forgotInstagramLogin)}

          {this.orSeparatorComponent()}

          {this.twitterLoginComponent()}
      </ScrollView>

          {this.signupFooterComponent()}
      </ImageBackground>
    );
  }

  forgotLoginDetailsComponent = (normalText, boldText, url) => {
    return(
      <View style={viewStyles.forgotLoginDetailsContainer}>
        <Text style={textStyles.forgotLoginText}>{normalText}</Text>
        <TappableText
          textStyle={[textStyles.forgotLoginText, textStyles.forgotLoginDetailsBold]}
          textTapped={ () => Linking.openURL(url) }>

          {boldText}

          </TappableText>
      </View>
    );
  }

  twitterLoginComponent = () => {
    return(
      <View style={viewStyles.twitterLoginContainer}>
        <Image
          style={[viewStyles.twitterLogo, {width: 30, height: 30}]}
          resizeMode={'contain'}
          source={require('./src/images/twitter_bird.png')}
        />
        <TappableText
          textStyle={[textStyles.twitterLoginText, textStyles.twitterLoginDetailsBold]}
          textTapped={ () => Linking.openURL(urls.twitterLogin) }
          >Log in with twitter</TappableText>
      </View>
    );
  }

  orSeparatorComponent = () => {
    return(
      <View style={viewStyles.orSeparatorContainer}>
        <View style={viewStyles.orSeparatorLine}  />
        <Text style={textStyles.orSeparatorTextStyle}>OR</Text>
        <View style={viewStyles.orSeparatorLine} />
      </View>
    );
  }
signupFooterComponent = () => {
  return (
    <View style={viewStyles.signupFooterContainer}>

      {this.forgotLoginDetailsComponent('Dont have an account?', 'Sign up.', urls.instagramSignUp)}

     </View>
  );
}
  render() {
    if(this.state.displayLoginScreen == true && this.state.displayAuthenticationWebView == false){
      return (
        this.loginScreenComponent()
      );
    }
    else if (this.state.displayLoginScreen == false && this.state.displayAuthenticationWebView){
      return(
        this.authWebViewComponent()
      );
    }

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

  },
  orSeparatorContainer:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '7%'
  },

  orSeparatorLine:{
    height: 1,
    flex:5,
    backgroundColor: colors.socialMedialButtonBorderColor,
    borderColor: colors.socialMedialButtonBorderColor,
    borderWidth: 0.5,
    marginHorizontal: 5
  },
  twitterLoginContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10

  },
  twitterLogo:{
    width: (0.45 * windowSize.width),
    height:(0.15 * windowSize.height),
    marginRight: 10,
    alignSelf: 'center'
  },
  signupFooterContainer:{
    flex: 0.7,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5.5},
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
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
   },
   orSeparatorTextStyle:{
     color: 'white',
     backgroundColor: 'transparent',
     fontWeight: 'bold',
     fontSize: 13
   },
   twitterLoginText:{
     color: 'white',
     backgroundColor: 'transparent',
     fontSize: sizes.pageFontSize,
     marginVertical: 3
   },
   twitterLoginDetailsBold:{
     fontWeight: 'bold'
   }
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=aa91b8b3acd74913bdbd3267a59282a2&redirect_uri=https://www.bhubng.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};
