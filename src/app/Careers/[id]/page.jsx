import styles from "./page.module.css"
import { JobPageHeader } from "../../components/index"
import { JobPageDescription } from "../../components/index"


const page = () => {

    return <>

        {/* -------------------- Hero Section -------------------- */}

        <JobPageHeader />

        {/* -------------------- Job Description Section -------------------- */}


        <div className="container">

            <JobPageDescription />

        </div>



    </ >
}

export default page