import styles from "./page.module.css"
import { JobForm } from "../../../components/index"


const page = () => {
    return (
        <div>
            <h1>Form Page</h1>

            <div className="container">
                <JobForm />
            </div>
        </div>
    );
}

export default page;