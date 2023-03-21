import React from "react";
//Css
import styles from './Navbar.module.css';
//Imagem
import Logo from '../img/logo-nova.jpg';
//Icons 
import {FaWhatsapp, FaAlignJustify} from 'react-icons/Fa';
//Link
import {NavLink, Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={Logo} alt="Fisio-Li" title="Fisio-Li" className={styles.logo} />
            </Link>
            <input type="checkbox" id="check" className={styles.check} />
            <label htmlFor="check" className={styles.checkbtn}>
                <FaAlignJustify />
            </label>
            <ul className={styles.listLinks}> 
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="#">Tratamentos</NavLink>
                </li>
                <li>
                    <NavLink href="#">Clinica</NavLink>
                </li>
                <li>
                    <NavLink href="#">Equipe</NavLink>
                </li>
                <li>
                    <NavLink to="/contato">Contato</NavLink>
                </li>
            </ul>
            <Link className={styles.btn_agendamento}> 
                <h4>Agendamento</h4>
                <FaWhatsapp className={styles.iconWhats} />
            </Link>
        </nav>
    )
}