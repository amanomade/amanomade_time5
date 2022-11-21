import React, { useContext, useEffect } from 'react'
import NomadeContext from '../../components/context/nomadeContext'
import styles from './styles.module.scss'
import Favorite from '../../public/favorite.svg'
import Bell from '../../public/bell.svg'
import InfoIcon from '../../public/infoIcon.svg'
import CardB from '../../public/cardBairro.png'
import Evaluation from '../../public/evaluation.png'
import Image from 'next/image'
import Button from '../../components/Button'
import Card, { Content, Group, Paragraph, Title } from '../../components/Card'
import ProgressBar from '../../components/ProgressBar'

const States = () => {
  const { info, indexInfor, setIndexInfor,setProgress, progress } = useContext(NomadeContext);

  const calcMedia = (id) => {
    const keys = Object.keys(info[id].safetyScores)
    const media = (keys.reduce((acc, curr) => {
      return acc += info[id].safetyScores[curr]
    }, 0)) / keys.length

    setProgress(Math.round(media));
  }
  const handleChange = ({ target }) => {
    console.log("Fruit Selected!!", target.value);
    calcMedia(target.value)
    setIndexInfor(target.value)
  }
// useEffect(() => {
//   calcMedia(0)
// }, [info])

  const safetyScoresKeys = Object.keys(info[indexInfor].safetyScores)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.hero}>
          {/* <Input
            type="text"
            placeholder="Search"
            name="typeText"
          /> */}
          <select value={indexInfor} onChange={handleChange} className={styles.select}>

            {/* {
              Object.entries(info).forEach(([k,v]) => (
                <option value={k}>{v.name}</option>
              ))
            } */}

            {info.map((element, index) => (
              <option key={`${element.name}-key`} value={index}>{element.name}</option>
            ))}
          </select>
        </section>
        <section className={styles.location}>
          <div className={styles.infoCity}>

            <h1>{info[indexInfor]?.name}</h1>
            <div className={styles.options}>
              <div className={styles.rate}>

                <Favorite />
                5.0
                <span className={styles.rateTotal}>
                  /5.0
                </span>
              </div>
              <Bell />
            </div>
          </div>
          <div className={styles.subtitle}>
            <p>Cidade</p>
            <p>Região Sudeste</p>
            <p>0 km</p>
          </div>
        </section>
        <section className={styles.safe}>
          <Card>
            <Title>
              Níveis de perigo no local
            </Title>
            <Content>
              <Group variant='spaceBetween'>
                <Paragraph>Assalto</Paragraph>
                <ProgressBar progress={info[indexInfor].safetyScores.theft} height={30} fixWidth={100} />
              </Group>
              <Group variant='spaceBetween'>
                <Paragraph>Preconceito</Paragraph>
                <ProgressBar progress={(info[indexInfor].safetyScores.women + info[indexInfor].safetyScores.lgbtq) / 2} height={30} fixWidth={100} />
              </Group>
            </Content>
              <Button>Ver mais níveis</Button>
          </Card>
          <Card variant='alert_green' style={{backgroundColor: progress < 33.33 ? 'green' : progress >= 33.33 && progress <= 66.66 ? 'yellow' : 'red'}} Icon={InfoIcon}>
            <Title>Nivel de segurança</Title>
            <Content>
              {progress}
            </Content>
          </Card>
        </section>
        <section className={styles.bairros} >
          <h1>
            Bairros
          </h1>
          <div className={styles.cards}>
            <Image alt='desc' src={CardB} />
            <Image alt='desc' src={CardB} />
          </div>
        </section>
        <section className={styles.rates}>
          <h1>Avaliações</h1>
          <span className={styles.btns}>
            <Button variant='secondary'>{safetyScoresKeys[2]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[0]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[6]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[5]}</Button>
          </span>
          <Button variant='third'>Fazer uma avaliação</Button>
        </section>
        <section className={styles.evaluation}>
          <Image alt='desc' src={Evaluation} />
        </section>
      </div>
    </div>
  )
}

export default States