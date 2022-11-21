import InputText from '../components/InputText'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  handleChange(e) {
    console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.hero}>
          {/* <InputText
            type="text"
            placeholder="Search"
            name="typeText"
          /> */}
           <select value={this.state.fruit} onChange={this.handleChange} className={styles.select}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
        </section>
        <section className={styles.location}>
          <div className={styles.infoCity}>

            <h1>Home</h1>
            
          </div>
        </section>
      </div>
    </div>
  )
}
