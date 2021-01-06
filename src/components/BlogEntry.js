import { Link } from 'gatsby';
import React from 'react';
import styles from './BlogEntry.module.css'

export default function BLogEntry({title, slug, date, excerpt}){
    return (
        <article className={styles.blog}>
            <h2><Link to={slug}>{title}</Link></h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </article>
    );
}