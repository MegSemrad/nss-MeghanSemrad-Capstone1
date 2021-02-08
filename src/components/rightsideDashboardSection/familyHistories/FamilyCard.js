import React from "react";
import { Link } from "react-router-dom";


export const FamilyHistoryCard = ({ familyMemberHistory }) => {
  return (
    <section className="relation">
      <h3 className="relation__name">
        <Link to={`/familyHistory/detail/${ familyMemberHistory.id }`}> 
          { familyMemberHistory.relation?.relation }
        </Link>
      </h3>
  </section>
)};