import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    if (!email) {
      // Hiển thị thông báo nếu người dùng chưa nhập email
      Alert.alert("Thông báo", "Vui lòng nhập địa chỉ email của bạn.");
      return;
    }

    // Hiển thị thông báo khi đã thực hiện thay đổi mật khẩu thành công
    Alert.alert("Thông báo", "Bạn đã thay đổi mật khẩu thành công!");

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Thêm hình ảnh */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvR5kmJL_HCFLiK5k2bQ2e205M09EN8JGHHxAY7GeIoq9twaWee9IlpCUx3dZ1Coxsoo8&usqp=CAU",
        }}
        style={styles.logo}
      />
      {/* Ô nhập liệu cho Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {/* Nút để xác nhận quên mật khẩu */}
      <Button title="Forgot Password" onPress={handleForgotPassword} />
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
});

export default ForgotPasswordScreen;
