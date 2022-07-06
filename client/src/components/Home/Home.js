import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest invoicing for freelancers and small businesses</h1>
                <div className={styles.paragraph}>
                   
                    <p>Invoicing application made with MongoDB, Express, React & Nodejs</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://i.postimg.cc/qqXG6w4g/Laptop.png" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
