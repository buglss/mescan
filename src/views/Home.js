import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import GenericList from "../components/GenericList";
import DATA from "../../storage/db"

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <GenericList data={DATA} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        marginTop: 0
    }
});

export default Home;