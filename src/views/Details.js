import React, { useContext } from "react"
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native"
import { ActivitiesContext } from "../contexts/ActivitiesContext"

const Item = ({ user, photo, circle, navigation }) => (
    <View style={styles.listItem}>
        <Image source={photo} style={{ width: 60, height: 60, borderRadius: 30, marginEnd: 10 }} />
        <View style={{ alignItems: "stretch", flex: 1, justifyContent: "center" }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{user}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.subItem}>{circle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

const renderItem = ({ item }, navigation) => (
    <Item {...item} navigation={navigation} />
);

const Details = ({ navigation }) => {
    const { activities, activitieDispatch } = useContext(ActivitiesContext)

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={activities}
                renderItem={(item) => renderItem(item, navigation)}
                keyExtractor={item => item.id}
                dispatch={activitieDispatch}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        margin: 5
    },
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
})

export default Details