import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin vào các trường");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Thông báo", "Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }
    try {
      await axios.post("http://localhost:3000/signup", {
        name,
        email,
        password,
      });
      Alert.alert("Thông báo", "Bạn đã đăng ký thành công!");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Đã có lỗi xảy ra, vui lòng thử lại sau");
    }
  };
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Thêm hình ảnh */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUOcdVI1E25EVojVzKsCnME8nL6nBn1cOQQ&s",
        }}
        style={styles.logo}
        resizeMode="cover"
      />
      {/* Các trường nhập liệu */}
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      {/* Nút Đăng ký */}
      <Button title="Sign up" onPress={handleSignup} />
      {/* Text chuyển hướng đến màn hình đăng nhập */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink} onPress={navigateToLogin}>
          Login
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
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
  },
  loginLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
