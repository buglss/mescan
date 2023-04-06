import React, { useContext } from "react"
import { StyleSheet, SafeAreaView } from "react-native";
import GenericList from "../components/GenericList";
import { ActivitiesContext } from "../contexts/ActivitiesContext"
import ContainerStyle from "../styles/ContainerStyle";

const Home = ({ navigation }) => {
    const { jobs, activitieDispatch } = useContext(ActivitiesContext)

    return (
        <SafeAreaView style={styles.container}>
            <GenericList data={jobs} navigation={navigation} dispatch={activitieDispatch} route={"Aktiviteler"} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.flatten([ContainerStyle]);

export default Home;