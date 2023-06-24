"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./JobPageHeader.module.css"

import {
    FaFacebook, FaTwitter, FaShareNodes,
    FaLinkedinIn, FaWhatsapp, FaTelegram,
    FaLink, FaEarthAmericas
} from 'react-icons/fa6';



function JobPageHeader() {
    return (
        <section className={styles.hero}>
            <div className={styles.img_overlay}></div>

            {/* Hero Inner-Wrapper */}

            <div className={styles.inner_wrapper}>

                {/* Hero Headings */}

                <div className={styles.hero_headings}>

                    <p className={styles.company_type}>Apex | Freelance</p>

                    <h1>Free lancer legal translator</h1>


                    <div className={styles.location_date_wrapper}>
                        <FaEarthAmericas size={18} color='grey' />
                        <p className={styles.location_date}>Remote Job | Posted on 06/02/2023</p>
                    </div>



                    <div className={styles.share_section_wrapper}>
                        <div className={styles.btns}>

                            <Link className={styles.intrested_btn} href="#jobs">I'm intrested</Link>

                            <Link className={styles.refer_btn} href="#jobs">Refer a friend</Link>

                        </div>

                        <div className={styles.share_icons}>
                            <ul className={styles.icons_list}>
                                <li>
                                    <Link href="">
                                        <FaShareNodes className={styles.icon} size={18} />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="">
                                        <FaFacebook className={styles.icon} size={30} />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="">
                                        <FaTwitter className={styles.icon} size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <FaLinkedinIn className={styles.icon} size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <FaWhatsapp className={styles.icon} size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <FaTelegram className={styles.icon} size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <FaLink className={styles.icon} size={30} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default JobPageHeader