import React, { useContext } from "react"
import { StyleSheet, SafeAreaView } from "react-native";
import GenericList from "../components/GenericList";
import DATA from "../../storage/db"
import { ActivitiesContext } from "../contexts/ActivitiesContext"

const Home = ({ navigation }) => {
    const { jobs, activitieDispatch } = useContext(ActivitiesContext)

    return (
        <SafeAreaView style={styles.container}>
            <GenericList data={jobs} navigation={navigation} dispatch={activitieDispatch} />
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