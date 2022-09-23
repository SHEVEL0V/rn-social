/** @format */
import MapView from "react-native-maps";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Text,
  View,
  TextInput,
} from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});
