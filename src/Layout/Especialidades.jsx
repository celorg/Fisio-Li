import React from "react";
import { Link } from "react-router-dom";
//css
import styles from './Especialidades.module.css';
//Iconst
import {TbMassage} from 'react-icons/tb';
import {FaUserMd} from 'react-icons/Fa';

export default function Especialidades(){
    return(
        <div className={styles.especialidades}>
            <h4 className={styles.titleEspecialidades}>Nossas Especialidades</h4>
            <p className={styles.paragrafoEspecialidades}>Qual o tipo de problema que está enfrentado? Para cada tipo de problema é preciso um tratamento especial e com os devidos cuidados e atenção necessários. Nossa equipe, está aqui para tratar cada caso com a máximo prioridade! Como podemos te ajudar!</p>
            <div className={styles.containerEspecialidades}>
                <div className={styles.boxEspecialidades}>
                    <TbMassage className={styles.iconsEspecialidades} />
                    <h6>Massagem</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed veritatis ipsa culpa  </p>
                    <Link to="#" >Saiba Mais</Link>
                </div>
                <div className={styles.boxEspecialidades}>
                    <FaUserMd className={styles.iconsEspecialidades} />
                    <h6>Fisioterapia</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed veritatis ipsa culpa  </p>
                    <Link to="#" >Saiba Mais</Link>
                </div>
                <div className={styles.boxEspecialidades}>
                    <TbMassage className={styles.iconsEspecialidades} />
                    <h6>Massagem</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed veritatis ipsa culpa  </p>
                    <Link to="#" >Saiba Mais</Link>
                </div>
                <div className={styles.boxEspecialidades}>
                    <TbMassage className={styles.iconsEspecialidades} />
                    <h6>Massagem</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed veritatis ipsa culpa  </p>
                    <Link to="#" >Saiba Mais</Link>
                </div>
            </div>
        </div>
    )
}