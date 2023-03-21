import React from "react";
//img
import Fisioterapia from '../../img/reabilitacao.jpg';
//Layout
import QuemSomos from "../../Layout/QuemSomos";
import Especialidades from "../../Layout/Especialidades";
import Perguntas from "../../Layout/Perguntas";
//css
import styles from './Home.module.css';
//icons
import {BiWalk} from 'react-icons/bi';
import {FaHospitalUser} from 'react-icons/Fa';
//Uteis
import ButtonAgendar from "../../Uteis/ButtonAgendar";


export default function Home(){
    return (
        <main>
            <article className={styles.home}>
                <div className={styles.titleInicial}>
                    {/* <h5>Clinica Fisioterapeuta</h5> */}
                    <div className={styles.walkBox}>
                        <span><FaHospitalUser className={styles.iconWalk}/></span>
                        <div className={styles.fisioName}>
                            <h5>Fisio-Li</h5>
                            <h6>Clinica Fisioterapeuta</h6>
                        </div>
                        
                    </div>
                    <h2>Proporcinando mais qualidade de vida através do movimento</h2>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos eaque suscipit saepe iure neque temporibus ad</p>
                    
                    <div>
                        <ButtonAgendar text="Quero Agendar Minha consulta" />
                    </div>
                </div>
                <div className={styles.divImgI}>
                    <img src={Fisioterapia} alt="Fisioterapia" className={styles.imgInicial} />
                </div>

            </article>
            <article className={styles.articleHome}>
                <QuemSomos />
            </article>
            <article className={styles.articleHome}>
                <Especialidades />
            </article>
            <article className={styles.articleHome}>
                <Perguntas />
            </article>
        </main>
        
    )    
}