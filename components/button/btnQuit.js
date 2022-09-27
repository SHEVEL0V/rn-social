/** @format */
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { outUser } from "../../redux/auth/operations";

const BtnQuit = ({ style = {} }) => {
  const dispatch = useDispatch();
  const out = () => dispatch(outUser());
  return (
    <TouchableOpacity onPress={out} style={style}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default BtnQuit;
