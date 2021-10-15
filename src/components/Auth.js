import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loginform from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        {isLogin ? (
          <Loginform changeForm={changeForm} />
        ) : (
          <RegisterForm changeForm={changeForm} />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 240,
    marginTop: 50,
    marginBottom: 50,
  },
});
