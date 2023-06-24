import styles from "./page.module.css"
import { JobForm } from "../../../components/index"


const page = () => {
    return (
        <div>
            <h1>Form Page</h1>

            <div className={styles.container}>
                <JobForm />
            </div>
        </div>
    );
}

export default page;