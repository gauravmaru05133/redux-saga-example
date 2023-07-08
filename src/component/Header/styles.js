import { StyleSheet } from "react-native";
import { screenWidth } from "../../utils";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
   container: {
      width: screenWidth, height: 55,
      backgroundColor: colors.lightGray, flexDirection: 'row',
      justifyContent:'center',alignContent:'center',alignItems:'center'
   },
   dummyWidth:{
      width:25
   },
   containerTxt:{
      flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'
   },
   title_style:{
      color:colors.black,fontSize:16
   }

});