import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontFamily: "open-sans-bold",
    fontSize: 24,
    maxWidth: "80%",
    padding: 12,
    textAlign: "center",
    width: 300,
  },
});
