import React from "react";
import { Link } from "react-router-dom";
//icons
import {FaWhatsapp} from 'react-icons/Fa';
//Css
import styles from './ButtonAgendar.module.css';

export default function ButtonAgendar({text}){
    return (
        <Link to="#" className={styles.btnAgendar}>
            <h6>{text}</h6>
        </Link>
    )
}