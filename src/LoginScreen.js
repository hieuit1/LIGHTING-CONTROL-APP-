import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name || !password) {
      // If either name or password is empty, show a notification
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin vào các trường");
      return;
    }
    Alert.alert("Thông báo", "Bạn đã đăng nhập thành công!");
    navigation.navigate("Home");
    // Xử lý đăng nhập ở đây
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIcDZJajfVmleMLFTNUKkQE55ktXPRaZXFg&s",
        }}
        style={styles.logo}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.forgotPasswordText}>
        If you forgot{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("forgotPassword")}
        >
          password
        </Text>
      </Text>
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
  },
  signupLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    width: 340,
    marginTop: 10,
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
  },
});

export default LoginScreen;
