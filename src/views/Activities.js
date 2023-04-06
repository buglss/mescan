import React, { useContext } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { ActivitiesContext } from "../contexts/ActivitiesContext"
import GenericList from "../components/GenericList";
import ContainerStyle from "../styles/ContainerStyle";

const Activities = ({ navigation }) => {
    const { activities, activitieDispatch } = useContext(ActivitiesContext)

    return (
        <SafeAreaView style={styles.container}>
            <GenericList data={activities} navigation={navigation} dispatch={activitieDispatch} borderColor={"#0EA293"} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.flatten([ContainerStyle]);

export default Activities