import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap";

export const ProviderCard = ({ provider }) => {
  const history = useHistory()
  return (
      <Button variant="primary" size="lg" block className="rightSideChildCSS"
        onClick={() => { history.push(`/Provider/detail/${provider.id}`) }}>
        {provider.speciality} ({provider.providerName})
      </Button>
  )
};
