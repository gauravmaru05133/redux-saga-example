import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, RefreshControl } from "react-native";
import styles from "./styles";
import { Header } from "../../component/Header";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { userListLoading } from "../../redux/userList/action";
import moment from "moment";
import { strings } from "../../utils/strings";

export const Details = ({ route }) => {
    const [userObj, setUserObj] = useState('')
    useEffect(() => {
        setUserObj(route?.params?.item)
    }, [])

    const Divider = ({ style }) => {
        return <View style={[{
            width: '100%', height: 1,
            backgroundColor: colors.black, marginVertical: 10
        }, style]} />
    }

    return (
        <View style={styles.container}>
            <Header
                isBack={true}
                title={`${userObj?.name?.first} ${userObj?.name?.last}`}
            />
            <View style={styles.home_child}>
                <View style={styles.details_profile_pic}>
                    <Image
                        style={{ flex: 1 }}
                        source={{ uri: userObj?.picture?.large }}
                        resizeMode="cover"
                    />
                    <View style={styles.age_container}/>
                    <Text style={styles.age_txt}>
                        {userObj?.dob?.age}</Text>    
                    
                </View>
                <View style={styles.divider_container}>
                    <Divider style={{ marginTop: 30 }} />
                    <View>
                        <Text style={styles.info_txt_style}>{`Email:- ${userObj?.email}`}</Text>
                        <Text style={styles.info_txt_style}>{`DOB:- ${moment(userObj?.dob?.date).format('DD MMM YYYY')}`}</Text>
                    </View>
                    <Text style={styles.info_location_title}>{strings.location}</Text>
                    <Divider />
                    <View>
                        <Text style={styles.info_txt_style}>{`City:- ${userObj?.location?.city}`}</Text>
                        <Text style={styles.info_txt_style}>{`State:- ${userObj?.location?.state}`}</Text>
                        <Text style={styles.info_txt_style}>{`Country:- ${userObj?.location?.country}`}</Text>
                        <Text style={styles.info_txt_style}>{`Postcode:- ${userObj?.location?.postcode}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}