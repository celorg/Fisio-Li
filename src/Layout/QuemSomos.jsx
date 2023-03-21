import React from "react";
//img
import img from '../img/img-quem-somos.jpg';
//css
import styles from './QuemSomos.module.css';
//icons
import {MdEmail, MdLocationOn} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { FaWhatsapp,FaInstagram, FaFacebookSquare } from "react-icons/Fa";
import {GoLocation} from 'react-icons/go'

export default function QuemSomos(){
    return (
        <div className={styles.containerQuemSomos}>
            <div className={styles.containerBox}>
                <div className={styles.boxContato}>
                    <h5>Contato</h5>
                    <ul className={styles.listaContatos}>
                        
                        <li>
                            <p><MdEmail/>  fiosioli@gmail.com</p>
                        </li>
                        <li>
                            <p><BsFillTelephoneFill/>  (19) 95555-5555</p>
                        </li>
                        <li>
                            <p><MdLocationOn/>  Rua sao bento - n45</p>
                        </li>
                    </ul>
                    <ul className={styles.listaIcons}>
                        <li>
                            <p><FaWhatsapp /></p>
                        </li>
                        <li>
                            <p><FaInstagram /></p>
                        </li>
                        <li>
                            <p><FaFacebookSquare /></p>
                        </li>
                    </ul>
                </div>
                <div className={styles.boxHorarios}>
                    <h5>Horarios</h5>
                    <ul className={styles.listaHorarios}>
                        <li>
                            <p>Segunda-Sexta</p>
                            <p>8:00 - 18:00h</p>
                        </li>
                        <li>
                            <p>Sabado</p>
                            <p>10:00 - 14:00h</p>
                        </li>
                        <li>
                            <p>Domingo</p>
                            <p>10:00 - 12:00h</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.textoSobre}>
                <h4>Sobre Nós</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel suscipit cumque illum reprehenderit, excepturi minus totam error eaque libero autem facere praesentium officiis enim! Tempore impedit animi dignissimos quod? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reiciendis quam id quaerat ad, a recusandae sint doloremque quidem maiores consequuntur nam officiis quia deleniti quisquam ullam, quasi dolores. Facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex expedita natus quis facere aliquid nisi cumque fuga qui delectus ratione, explicabo modi ab molestias voluptate ipsam impedit corrupti placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo officiis tempore nulla veritatis ipsam architecto reprehenderit, provident enim minus cumque debitis, repellat non expedita error sit facere dignissimos voluptatum!</p>
            </div>
        </div>
    )
}