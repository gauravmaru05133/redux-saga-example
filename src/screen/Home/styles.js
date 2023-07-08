import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
    container: {
       flex: 1,
    },
    contact_cell:{
      width: '100%', flexDirection: 'row', paddingVertical: 10,alignContent:'center',alignItems:'center'
    },
    contactImgCell:{
      width: 55, height: 55
    },
    contact_cell_info:{
      flex: 1, paddingLeft: 10 
    },
    contact_name:{
      color: colors.black, fontSize: 14, fontWeight: '500' 
    },
    contact_email:{
      color: colors.black, fontSize: 12,
    },
    home_child:{
      flex: 1, backgroundColor: colors.white
    },
    home_flat_container:{
      flex: 1, width: '95%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', paddingVertical: 10
    }
    
 });