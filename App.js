import React, { useEffect } from "react";
import HomeStack from "./src/routes/HomeStack";
import { ActivitiesContextProvider } from "./src/contexts/ActivitiesContext"
import localStorage from "./src/data_providers/LocalStorage";

const App = () => {
    useEffect(() => {
        // localStorage.purge()
        localStorage.init()
    }, []);

    return (
        <ActivitiesContextProvider>
            <HomeStack />
        </ActivitiesContextProvider>
    )
}
export default App;