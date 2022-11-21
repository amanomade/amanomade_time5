import React, { useContext } from 'react'
import NomadeContext from '../../components/context/nomadeContext'

const Home = () => {
  const { info} = useContext(NomadeContext);
  
  return (
    <div>
      <ul>
        <li>Estado: {info[0].name}</li>
        <li>{`nivel de segurança para lgbt: ${info[0].safetyScores?.lgbtq}`}</li>
        <li>{`nivel de segurança mulheres: ${info[0].safetyScores?.women}`}</li>
      </ul>
    </div>
  )
}

export default Home