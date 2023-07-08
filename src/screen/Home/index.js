import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, RefreshControl } from "react-native";
import styles from "./styles";
import { Header } from "../../component/Header";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { userListLoading } from "../../redux/userList/action";
import { strings } from "../../utils/strings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { screenName } from "../../utils/screenName";

let page = 1
export const Home = () => {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false)
    const [footerLoading, setFooterLoading] = useState(false)
    const userObj = useSelector(state => state?.userListReducer?.userList);
    const navigation = useNavigation()

    const userListApiCall = (pa) => {
        dispatch(userListLoading(pa))
    }
    useEffect(() => {
        userListApiCall(page)
    }, [])

    const switchToDetailsScreen = (item) => {
        navigation.navigate(screenName.DETAILS,{
            item:item
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.contact_cell}
                onPress={() => switchToDetailsScreen(item)}
            >
                <View style={styles.contactImgCell}>
                    <Image source={{ uri: item?.picture?.thumbnail }}
                        style={{ width: undefined, height: undefined, flex: 1 }}
                    />
                </View>
                <View style={styles.contact_cell_info}>
                    <Text style={styles.contact_name}>{`${item?.name?.first} ${item?.name?.last}`}</Text>
                    <Text style={styles.contact_email}>{`${item?.email}`}</Text>
                    <Text style={styles.contact_email}>{`${item?.location?.country} | ${item?.location?.city}`}</Text>
                </View>
                <MaterialCommunityIcons
                    name='chevron-right'
                    size={20}
                />
            </TouchableOpacity>
        )
    }

    const endReached = () => {
        setFooterLoading(true)
        setTimeout(() => {
            page += 1
            userListApiCall(page)
            setFooterLoading(false)
        }, 2000);
    }

    return (
        <View style={styles.container}>
            <Header
                title={strings.user_list}
            />
            <View style={ styles.home_child}>
                <View style={styles.home_flat_container}>
                    <FlatList
                        style={{ width: '100%' }}
                        keyExtractor={(item, index) => index}
                        data={userObj?.data}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: colors.lightGray }} />}
                        onEndReached={() => endReached()}
                        onEndReachedThreshold={0.1}
                        refreshControl={
                            <RefreshControl refreshing={refresh} onRefresh={() => {
                                page = 1
                                userListApiCall(page)
                            }} />
                        }
                        refreshing={refresh}
                        ListFooterComponent={() => {
                            return footerLoading && <ActivityIndicator size='large' />
                        }}
                    />
                </View>

            </View>
        </View>
    )
}