import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Image source={require('../../assets/Ellipse5.png')} style={styles.icon} />
        <Image source={require('../../assets/Ellipse6.png')} style={styles.icon} />
        <Image source={require('../../assets/Ellipse7.png')} style={styles.icon} />
        <Image source={require('../../assets/Ellipse8.png')} style={styles.icon} />
        <Image source={require('../../assets/Ellipse9.png')} style={styles.icon} />
        <Image source={require('../../assets/Ellipse10.png')} style={styles.icon} />
      </View>
      <View style={styles.header}>
        <Text style={styles.appName}>Liny</Text>
        <Text style={styles.subtitle}>View, create and edit your Linear issues on the go</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SomeScreen')}>
          <Text style={styles.buttonText}>Log in with Linear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        By getting started you agree with <Text style={styles.linkText}>Privacy</Text> and <Text style={styles.linkText}>Terms</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 20,
  },
  linkText: {
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default Login;
