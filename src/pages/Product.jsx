import React from "react";
import { useParams } from "react-router-dom";
function product() {
  const { id } = useParams();

  return <div>product # {id}</div>;
}

export default product;
