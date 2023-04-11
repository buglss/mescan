import { createContext, useState, useReducer } from "react"
import { activities as activitiesData, jobs as jobsData } from "../../storage/dummy_db"

console.log("jobs", jobsData)
const ActivitiesContext = createContext()

const ActivitiesContextProvider = ({ children }) => {
    const [jobs, jobDispatch] = useReducer((state, action) => {
        switch(action.type) {
            default:
                return state
        }
    }, jobsData)
    const _activities = activitiesData
    const [activities, activitieDispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "get":
                return _activities.filter(activitie => activitie.activitieId === action.activitieId)
            default:
                return state
        }
    }, activitiesData)

    return (
        <ActivitiesContext.Provider value={{ activities, activitieDispatch, jobs, jobDispatch }}>
            {children}
        </ActivitiesContext.Provider>
    )
}

export { ActivitiesContext, ActivitiesContextProvider }