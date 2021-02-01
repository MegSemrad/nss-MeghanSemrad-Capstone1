import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { AlertContext } from "./PatientDetailProvider"
import { AlertCard } from "./AlertCard"


export const AlertList = () => {
  const { alerts, getAlerts } = useContext(AlertContext)
//   const history = useHistory()


  useEffect(() => {
    getAlerts()
    }, [])


  return (
    <div className="alerts">
        <h2 className="titleWord">Alerts</h2>
		    {/* <button onClick={() => {history.push("/alerts/create")}}>
                Add Alert
            </button> */}
        {alerts.map(alert => {
        
            return <AlertCard key={alert.id} //argument
                        alert={alert} /> //argument
        })
        }
    </div>
  )
};