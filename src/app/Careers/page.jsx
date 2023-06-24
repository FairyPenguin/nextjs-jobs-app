"use client"

import styles from "./careers.module.css"
import Link from "next/link"
import { useState, useEffect } from 'react';
// import { Jobs } from "../../../lib/localdata"



const page = () => {

    // State //

    const [select, setSelect] = useState("All")

    const [remoteJobsOnly, setremoteJobsOnly] = useState(false)

    // Mock Api Response // 


    const jobs = [
        {
            id: 1,
            type: "Freelance",
            position: "Free lancer legal translator",
            location: "Remote Job",
            category: "Legal",
        },
        {
            id: 2,
            type: "Full-time",
            position: "Software Developer",
            location: "San Francisco, CA",
            category: "Software",
        },
        {
            id: 3,
            type: "Part-time",
            position: "Marketing Specialist",
            location: "New York City, NY",
            category: "Marketing",
        },
        {
            id: 4,
            type: "Full-time",
            position: "Sales Representative",
            location: "Los Angeles, CA",
            category: "Sales",
        },
        {
            id: 5,
            type: "Part-time",
            position: "HR Coordinator",
            location: "Chicago, IL",
            category: "Hr",
        },
        {
            id: 6,
            type: "Freelance",
            position: "Free lancer legal translator",
            location: "Remote Job",
            category: "Legal",
        },
        {
            id: 7,
            type: "Full-time",
            position: "Software Developer",
            location: "San Francisco, CA",
            category: "Software",
        },
        {
            id: 8,
            type: "Part-time",
            position: "Marketing Specialist",
            location: "New York City, NY",
            category: "Marketing",
        },
        {
            id: 9,
            type: "Full-time",
            position: "Sales Representative",
            location: "Los Angeles, CA",
            category: "Sales",
        },
        {
            id: 10,
            type: "Part-time",
            position: "HR Coordinator",
            location: "Chicago, IL",
            category: "Hr",
        },
        {
            id: 11,
            type: "Freelance",
            position: "Free lancer legal translator",
            location: "Remote Job",
            category: "Legal",
        },
        {
            id: 12,
            type: "Full-time",
            position: "Software Developer",
            location: "San Francisco, CA",
            category: "Software",
        },
        {
            id: 13,
            type: "Part-time",
            position: "Marketing Specialist",
            location: "New York City, NY",
            category: "Marketing",
        },
        {
            id: 14,
            type: "Full-time",
            position: "Sales Representative",
            location: "Los Angeles, CA",
            category: "Sales",
        },
        {
            id: 15,
            type: "Part-time",
            position: "HR Coordinator",
            location: "Chicago, IL",
            category: "Hr",
        },
    ];

    function selection(event) {
        setSelect(event.target.value);

    }

    let filteredJobs = select === "All" ? jobs :
        jobs.filter((job) => job.category === select)

    if (remoteJobsOnly) {
        filteredJobs = filteredJobs.filter(job => job.location === "Remote Job");
    }

    function remoteJobHandler(event) {
        setremoteJobsOnly(event.target.checked)
        console.log(event)

    }


    return (
        <>
            {/* --------------------Hero Section-------------------- */}
            <section className={styles.hero}>
                <div className={styles.img_overlay}></div>

                {/* Hero Inner-Wrapper */}

                <div className={styles.inner_wrapper}>

                    {/* Hero Headings */}

                    <div className={styles.hero_headings}>

                        <h2>Find the career of your dreams</h2>


                        <h3>We're more than just a workplace. We're a family.</h3>


                        <p>We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.</p>

                        <a className={styles.view_jobs_btn} href="#jobs">View Openings</a>

                    </div>
                </div>

            </section>

            {/* --------------------Jobs Section-------------------- */}

            <div className="container">

                {/* Jobs Section */}

                <section id="jobs" className={styles.jobs_section}>

                    <div className={styles.jobs_wrapper}>

                        {/*Jobs-header */}

                        <div className={styles.jobs_header}>
                            <h2>Join us</h2>
                            <h3>Current Openings</h3>
                        </div>

                        {/*Jobs Filter & Selection */}

                        <div className={styles.selection_filter}>

                            {/* Jobs location-filter */}

                            <div className={styles.checkbox}>
                                <label htmlFor="remote">
                                    <input
                                        onClick={remoteJobHandler} id="remote" type="checkbox" />
                                    Remote Jobs
                                </label>
                            </div>

                            {/* Jobs  Select Menu Filter */}

                            <div className={styles.filter}>
                                <label htmlFor="">Filter by</label>
                                <div className={styles.custom_select}>
                                    <select value={select} onChange={selection} name="" id="">
                                        <option value="All">All</option>
                                        <option value="Legal">Legal</option>
                                        <option value="Software">Software</option>
                                        <option value="UI-UX">UI-UX</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Hr">Hr</option>
                                        <option value="Operations">Operations</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/*Jobs  tags */}

                        <div className={styles.jobs_category}>
                            <h4>Legal</h4>
                            <span className={styles.job_count}>1 JOB</span>
                        </div>

                        {/*Jobs GRID */}
                        {/* <h3>API Response</h3> */}

                        <div className={styles.jobs_grid_wrapper}>

                            {/*Jobs List */}

                            <ul className={styles.jobs_list}>

                                {filteredJobs.map((job) => (
                                    <li key={job.id} className={styles.job}>
                                        <Link href={`/Careers/${job.id}`}>
                                            <h2 className={styles.job_type}>{job.type}</h2>
                                            <h3 className={styles.job_position}>{job.position}</h3>
                                            <p className={styles.job_location}>{job.location}</p>
                                            <span className={styles.category}></span>
                                        </Link>
                                    </li>
                                ))}

                                {/*Jobs Item */}

                                {/* <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                        <span className={styles.category}></span>
                                    </a>
                                </li>
                                <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                    </a>
                                </li>
                                <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                    </a>
                                </li>
                                <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                    </a>
                                </li>
                                <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                    </a>
                                </li>
                                <li className={styles.job}>
                                    <a href="###">
                                        <h2 className={styles.job_type} >Freelance</h2>

                                        <h3 className={styles.job_position}>Free lancer legal translator</h3>

                                        <p className={styles.job_location}>Remote Job</p>
                                    </a>
                                </li> */}

                            </ul>
                        </div>



                    </div >
                </section >

            </div >


        </>
    )
}

export default page