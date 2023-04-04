import React from "react";
import HomeStack from "./src/routes/HomeStack";
import { ActivitiesContextProvider } from "./src/contexts/ActivitiesContext"

const App = () => {
    return (
        <ActivitiesContextProvider>
            <HomeStack />
        </ActivitiesContextProvider>
    )
}
export default App;