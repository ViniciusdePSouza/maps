import { View, Image } from "react-native";
interface CarProps {
  heading: number;
}
import carTop from "../../../assets/top.png";


export function CarComponent({ heading }: CarProps) {
  return (
    <View style={{ flex: 1 }}>
      <Image source={carTop} />
    </View>
  );
}
