import { View, Text, TouchableOpacity } from "react-native";
import { screenWidth } from "../../utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../utils/colors";
import { strings } from "../../utils/strings";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Header = ({isBack,title}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {isBack ? <TouchableOpacity
            onPress={()=>navigation.goBack()}
            >
                <MaterialCommunityIcons
                    name='chevron-left'
                    size={30}
                    color={colors.black}
                />
            </TouchableOpacity> : 
            <View style={styles.dummyWidth} />
            }
            
            <View style={styles.containerTxt}>
                <Text style={styles.title_style}>{title}</Text>
            </View>
            <View style={styles.dummyWidth} />
        </View>
    )
}