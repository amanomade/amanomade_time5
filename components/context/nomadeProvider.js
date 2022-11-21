import PropTypes from "prop-types";
import NomadeContext from "./nomadeContext.js";
import Amadeus from "amadeus"
import { NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_CLIENT_SECRET } from "../../config";
import { useEffect, useState } from "react";

import MOCKES_SAFETY  from "../mockes/safetyRatedLocations"

const NomadeProvider = ({ children }) => {
  // const amadeus = new Amadeus({
  //   clientId: NEXT_PUBLIC_CLIENT_ID,
  //   clientSecret: NEXT_PUBLIC_CLIENT_SECRET
  // });
  console.log('MOCKES_SAFETY', MOCKES_SAFETY)
  const [info, setInfo] = useState(MOCKES_SAFETY)
  const [indexInfor, setIndexInfor] = useState(0)
  const [progress, setProgress] = useState(36)
  

  const getInfo = async () => {
    const response = await amadeus.safety.safetyRatedLocations.bySquare.get({
      north: 41.397158,
      west: 2.160873,
      south: 41.394582,
      east: 2.177181
    })
    const data = JSON.parse(response.body).data[0]
    setInfo(data)
  }

  useEffect(() => {
    // TODO::ATUALMENTE USANDO MOCKS
    // getInfo()
  }, [])

  const data = {
    info,
    indexInfor,
    setIndexInfor,
    setProgress,
    progress,
  }
  return (
    <NomadeContext.Provider value={data}>{children}</NomadeContext.Provider>
  );
}

NomadeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NomadeProvider;