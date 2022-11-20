import React from 'react'
import styles from './Home.module.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import conf from './particlesjs-config'

const Home = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <>        
        <div className={styles.pageContainer} >           
            <section className={styles.hero}>
                <h1>Easy invoicing for freelancers and small businesses</h1>
                <div className={styles.paragraph}>
                   
                    <p>Invoicing application made with MongoDB, Express, React & Nodejs</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://i.postimg.cc/7LX9LxLt/Main.png" alt="invoicing-app"/>
                </div>
            </section> 
            
        </div>
        
        <Particles params={conf} init={particlesInit} className={styles.particles} /> 
        </>
    )
}

export default Home
