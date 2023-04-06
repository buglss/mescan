import React from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ user, circle, name, photo, count, date, navigation, dispatch, activitieId, borderColor, route = "Mescan" }) => (
    <View style={styles.listItem({ borderColor })}>
        <Image source={photo} style={{ width: 60, height: 60, borderRadius: 30, marginEnd: 10 }} />
        <View style={{ alignItems: "stretch", flex: 1, justifyContent: "center" }}>
            <TouchableOpacity style={styles.touchItemBase} onPress={(e) => (dispatch({ type: "get", activitieId }), navigation.navigate(route))}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text style={styles.touchItem}>{name ?? user}</Text>
                        <View style={styles.subItemBase}>
                            <Text style={styles.subItem}>{count ?? circle}</Text>
                            {date ? <Text style={styles.subItem}>|</Text> : ""}
                            <Text style={styles.subItem}>{date}</Text>
                        </View>
                    </View>
                    <View style={styles.iconItemBase}>
                        <Icon style={styles.iconItem} name="touch-app" size={30} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

const renderItem = ({ item }, navigation, dispatch, borderColor, route) => (
    <Item {...item} navigation={navigation} dispatch={dispatch} borderColor={borderColor} route={route} />
);

const GenericList = ({ data, navigation, dispatch, borderColor, route }) => {
    return (
        <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={(item) => renderItem(item, navigation, dispatch, borderColor, route)}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    listItem({ borderColor = "#210062" }) {
        return {
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            padding: 5,
            backgroundColor: "#FFF",
            width: "98%",
            flex: 1,
            alignSelf: "flex-end",
            flexDirection: "row",
            borderTopStartRadius: 30,
            borderBottomStartRadius: 30,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderColor: borderColor
        }
    },
    touchItemBase: {
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 1
    },
    touchItem: {
        fontWeight: "bold",
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5
    },
    subItemBase: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    subItem: {
        marginLeft: 5,
        marginRight: 5
    },
    iconItemBase: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    iconItem: {
        marginLeft: 5,
        marginRight: 5
    }
});

export default GenericList;