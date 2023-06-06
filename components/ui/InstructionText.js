import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
function InstructionText ({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24
  }
})
export default InstructionText
