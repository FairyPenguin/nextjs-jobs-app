"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./JobPageDescription.module.css"

import {
    FaEarthAmericas
} from 'react-icons/fa6';



function JobPageDescription() {
    return (
        <>
            <section className={styles.job_details_section}>

                {/* left-section */}


                <div className={styles.left}>
                    <article className={styles.content}>
                        <h3>Job Description</h3>

                        <p>
                            This is a remote position.

                            Apex is excited to announce an opportunity for talented and experienced legal translators to join our team. If you possess an intricate understanding of legal terminology, exceptional language skills, and a keen eye for detail, we invite you to explore this freelance opportunity.


                            Responsibilities:

                            Translate legal documents with high accuracy and consistency.
                            Ensure the correct use of legal terminology and language in all translations.
                            Handle multiple projects concurrently and adhere to specified deadlines.
                            Maintain strict confidentiality of all legal documents handled.
                        </p>

                        <h3>Requirements</h3>

                        <p>

                            Qualifications:

                            Proven experience in legal translation is essential.
                            Proficiency in both the source and target languages (please specify the languages you are fluent in).
                            In-depth knowledge of legal terminology and documentation.
                            Excellent attention to detail, with an ability to deliver accurate translations.
                            Strong time management skills with the ability to handle multiple projects and meet deadlines.
                            Payment:

                            Please include your competitive rates per 250 in your application.

                            Please note that only shortlisted candidates will be contacted for further evaluation. This role represents an excellent opportunity to work on exciting legal translation projects with Apex.
                        </p>
                    </article>

                    <div className={styles.btn_wrapper}>
                        <Link className={styles.intrested_btn_lg} href="#jobs">I'm intrested</Link>
                    </div>

                </div>



                {/* right-section */}

                <div className={styles.right}>
                    <div className={styles.right_inner_wrapper}>
                        <h3>Job Information</h3>

                        <div className={styles.industry}>
                            <span>Industry</span>
                            <span>Legal</span>
                        </div>

                        <div className={styles.work_experience}>
                            <h4>Work Experience</h4>
                            <span>1-3 years</span>
                        </div>
                        <div className={styles.location}>
                            <FaEarthAmericas size={18} color='grey' />
                            <p>Remote Job</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default JobPageDescription