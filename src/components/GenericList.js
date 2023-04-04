import React from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Item = ({ name, photo, count, date, navigation, dispatch, activitieId }) => (
    <View style={styles.listItem}>
        <Image source={photo} style={{ width: 60, height: 60, borderRadius: 30, marginEnd: 10 }} />
        <View style={{ alignItems: "stretch", flex: 1, justifyContent: "center" }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }} onPress={(e) => (dispatch({ type: "get", activitieId }), navigation.navigate("Detay"))}>
                <Text style={{ fontWeight: "bold" }}>{name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.subItem}>{count}</Text>
                    <Text style={styles.subItem}>|</Text>
                    <Text style={styles.subItem}>{date}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

const renderItem = ({ item }, navigation, dispatch) => (
    <Item {...item} navigation={navigation} dispatch={dispatch} />
);

const GenericList = ({ data, navigation, dispatch }) => {
    return (
        <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={(item) => renderItem(item, navigation, dispatch)}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        padding: 5,
        backgroundColor: "#FFF",
        width: "96%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderTopStartRadius: 30,
        borderBottomStartRadius: 30
    },
    subItem: {
        marginLeft: 5,
        marginRight: 5
    }
});

export default GenericList;