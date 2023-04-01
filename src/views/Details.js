import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Details = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>
                    DETAIL PAGE
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        margin: 5
    }
});

export default Details;