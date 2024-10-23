import { BiChevronRight } from "react-icons/bi"
import "./AllModels.css"

const AllModels = () => {
    return <div className="models-container">
        <h3>All Models</h3>
        <div className="list-items">
            <div className="card">
                <div className="card-img">
                    <img src="https://www.electrichunter.com/sites/default/files/field/gallery/Volvo-C40-Recharge-Pure-Electric-SUV-iu08.jpg" alt="suv c40" />
                </div>
                <div className="card-body">
                    <div className="center">Learn <BiChevronRight /></div>
                    <div className="center">Order Online <BiChevronRight /></div>
                </div>
            </div>
        </div>
        <div className="compare">
            <button>Compare Models</button>
        </div>
    </div>
}

export default AllModels
