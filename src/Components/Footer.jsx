import React from "react";
//Logo
import Logo from '../img/logo-nova.jpg';
//css
import styles from './Footer.module.css';
//icons
import {FaInstagram,FaWhatsapp,FaFacebookSquare} from 'react-icons/Fa'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <img src={Logo} alt="" width="100"/>
            </div>
            <div className={styles.containerFooter}>
                <div>
                    <h4>Atendimento</h4>
                    <ul className={styles.infoFooter}>
                        <li>
                            <p>Segunda a Sexta: 08:00 ás 17:00h</p>
                        </li>
                        <li>
                            <p>WhatsApp: (19)9 95559-9999</p>
                        </li>
                        <li>
                            <p>Localização: Rua São Jorge, 46</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Siga-nos nas redes sociais</h4>
                    <ul className={styles.redesFooter}>
                        <li>
                            <a href="#"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="#"><FaWhatsapp /></a>
                        </li>
                        <li>
                            <a href="#"><FaFacebookSquare /></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Onde Estamos</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.254312019511!2d-46.495200085385896!3d-23.487347764747476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6043763f5bc1%3A0x4804ca12e1f0c18!2sR.%20S%C3%A3o%20Jorge%2C%2043%20-%20Jardim%20Nova%20Tereza%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003823-210!5e0!3m2!1spt-BR!2sbr!4v1678740385964!5m2!1spt-BR!2sbr"   
                        loading="lazy" 
                        className={styles.mapaFooter}
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className={styles.copy}>
                <p>Marcelo Ribeiro &copy; - 2023 Todos os direitos reservados</p>    
            </div>
        </footer>
    )
}