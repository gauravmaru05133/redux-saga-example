import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
    container: {
       flex: 1,
    },
    home_child:{
      flex: 1, backgroundColor: colors.white,
    },
    details_profile_pic:{
      flex: 0.6, width: '70%', alignSelf: 'center', paddingTop: 10
    },
    divider_container:{
      flex: 1, width: '90%', alignSelf: 'center',
    },
    info_txt_style:{
      color:colors.black,fontSize:13,marginTop:3
    },
    info_location_title:{
      color: colors.black, fontWeight: '600', textTransform: 'uppercase', fontSize: 14, marginTop: 10
    },
    age_container:{
      width: 35, height: 35, backgroundColor: colors.shade,
      position: 'absolute', right: -4, bottom: -4,borderWidth:1,
      transform: [{ rotate: '220deg' }]
    },
    age_txt:{
      position:'absolute',right:0,bottom:4,right:5,fontSize:14,color:colors.black,fontWeight:'400'
    }
 });