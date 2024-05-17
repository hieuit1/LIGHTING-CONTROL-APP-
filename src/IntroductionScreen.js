import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const IntroductionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpu4uMVO-V1g15Scx94stb68L-yFwVJDqvtA&s",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Chào mừng đến với ứng dụng "Bật Đèn Tắt Đèn"! Với ứng dụng này, bạn có
        thể dễ dàng điều chỉnh ánh sáng trong ngôi nhà của mình chỉ bằng một cú
        chạm vào điện thoại. Quên đi việc phải bước ra khỏi giường để tắt đèn
        hoặc lo lắng về việc đèn vẫn bật khi bạn rời nhà. "Bật Đèn Tắt Đèn" sẽ
        giải quyết tất cả những điều này cho bạn. Hãy trải nghiệm sự tiện lợi và
        linh hoạt của ứng dụng "Bật Đèn Tắt Đèn" ngay hôm nay!
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
});

export default IntroductionScreen;
