import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
function NumberContainer ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: 'center',
    margin: 24,
    padding: 24
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  }
})

export default NumberContainer
