import { createContext, useState, useReducer } from "react"
import { activities as activitiesData, jobs as jobsData } from "../../storage/db"

console.log("jobs", jobsData)
const ActivitiesContext = createContext()

const ActivitiesContextProvider = ({ children }) => {
    // const [input, setInput] = useState("")
    const [jobs, jobDispatch] = useReducer((state, action) => {
        switch(action.type) {
            default:
                return state
        }
    }, jobsData)
    const orgState = activitiesData
    const [activities, activitieDispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "get":
                return orgState.filter(activitie => activitie.activitieId === action.activitieId)
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