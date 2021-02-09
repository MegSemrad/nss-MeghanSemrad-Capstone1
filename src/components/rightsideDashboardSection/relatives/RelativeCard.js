import React from "react";
import { Link } from "react-router-dom";


export const RelativeCard = ({ matchedRelative }) => {
  return (
    <section className="relative">
      <h3 className="relative__name">
        <Link to={`/relative/detail/${ matchedRelative.id }`}> 
          { matchedRelative.relative?.relative }
        </Link>
      </h3>
  </section>
)};