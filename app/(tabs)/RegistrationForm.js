
import React, { useState } from 'react';
import { Text, TextInput, Pressable, StyleSheet,ImageBackground } from 'react-native';

const RegistrationForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    setName(value);
    const namePattern = /^[A-Za-z\s]+$/;
    if (!value) {
      setErrors((prev) => ({ ...prev, name: 'Name is required.' }));
    } else if(!namePattern.test(value))  {
        setErrors((prev) => ({...prev, name: "Name should only contains letters."}))
    } else {
        setErrors((prev) => ({ ...prev, name: null }));
      }
  };

  const validateUsername = (value) => {
    setUsername(value);
    if (!value) {
      setErrors((prev) => ({ ...prev, username: 'Username is required.' }));
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setErrors((prev) => ({ ...prev, email: 'Email is required.' }));
    } else if (!emailPattern.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (!value) {
      setErrors((prev) => ({ ...prev, password: 'Password is required.' }));
    } else if (value.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters.' }));
    } else if (!/[!@#$%^&*]/.test(value)) {
      setErrors((prev) => ({ ...prev, password: 'Password must include a symbol (!@#$%^&*).' }));
    } else {
      setErrors((prev) => ({ ...prev, password: null }));
    }
  };

  const handleSubmit = () => {
    if (Object.values(errors).every((error) => error === null)) {
      alert('Registration Successful!');
        } else {
        alert('Please correct the errors before submitting.');
      }
      setName('');
      setUsername('');
      setEmail('');
      setPassword('')
  };

  return (
    <ImageBackground
     style={styles.container}
     source={require('./img2.jpg')}
     >
      <Text style={styles.title}>Registration Form</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor='white' 
        value={name}
        onChangeText={validateName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor='white'
        value={username}
        onChangeText={validateUsername}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor='white'
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor='white'
        value={password}
        onChangeText={validatePassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Pressable onPress={() => navigation.navigate('Welcome2')}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </ImageBackground
    >
  );
};

const styles =

 StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    
  }
  
});

export default RegistrationForm;

