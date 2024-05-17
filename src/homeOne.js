import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import onImage from "../assets/ON.jpg"; //image On
import offImage from "../assets/OFF.jpg"; // image Off

const Home = () => {
  // click ON OFF
  const [isOn, setIsOn] = useState(false);
  //API gửi về ESP32 để click on off
  const toggleSwitch = async () => {
    const newState = !isOn;
    try {
      const response = await axios.post("http://192.168.170.223/toggle", {
        state: newState,
      });
      if (response.data && response.data.status === "success") {
        setIsOn(newState);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //Màng Hình
  return (
    <ImageBackground
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPDjRZabyLYW4B5IhYUmmhtH54ML8uurc6A&s",
      }}
      style={styles.container}
    >
      {/* Chữ "Bật/Tắt đèn" */}
      <Text style={[styles.switchText, !isOn && styles.switchTextOff]}>
        {isOn ? "Bật Đèn" : "Tắt Đèn"}
      </Text>
      {/*click on off */}
      <TouchableOpacity
        style={[styles.button, isOn ? styles.onButton : styles.offButton]}
        onPress={toggleSwitch}
      >
        {/*dòng dưới đổi hình khi click TouchableOpacity */}
        <Image source={isOn ? onImage : offImage} style={styles.buttonImage} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  onButton: {},
  offButton: {},
  buttonImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  switchText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  switchTextOff: {
    color: "black",
    fontSize: 20, // Adjust size as needed
    fontWeight: "bold",
  },
});

export default Home;
