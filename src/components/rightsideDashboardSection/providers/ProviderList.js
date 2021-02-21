import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProviderContext } from "./ProviderDataProvider";
import { ProviderCard } from "./ProviderCard";

export const ProviderList = () => {
  const { providers,  getProviders } = useContext(ProviderContext);
  const userId = parseInt(localStorage.getItem("app_user"));
  const history = useHistory();
  
  
  useEffect(() => {
    getProviders()
  }, []);
  

  let providersArray = []
  const provider = providers.filter(p => {
    if(p.userId === userId) {
    providersArray.push(p)
  }
});

  return (
    <section className="providersByUserId">
        <h2 className="titleWord">Providers</h2>
          <button onClick={() => { history.push("/Provider/create") }}>
            Add
          </button>
          {
            providersArray.map(provider => { 
              return <ProviderCard key={provider.id} 
                  provider={provider} /> 
            })
          }
    </section>
  )
};