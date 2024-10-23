import { Fragment } from "react"
import { Button, Alert, ButtonGroup } from "react-bootstrap"

const LandingPage = () => {

    const users_info = [
        {"id": 1, "name": "John Doe", "age": 30, "location": "New York", "qualifications": ["B.Sc. Computer Science", "M.Sc. Data Science"]},
        {"id": 2, "name": "Jane Smith", "age": 25, "location": "Los Angeles", "qualifications": ["B.A. English", "M.A. Creative Writing"]},
        {"id": 3, "name": "Michael Johnson", "age": 40, "location": "Chicago", "qualifications": ["MBA", "B.Sc. Economics"]},
        {"id": 4, "name": "Emily Davis", "age": 28, "location": "Houston", "qualifications": ["B.Sc. Chemistry", "Ph.D. Biochemistry"]},
        {"id": 5, "name": "David Martinez", "age": 35, "location": "Phoenix", "qualifications": ["B.Eng. Mechanical Engineering"]},
        {"id": 6, "name": "Sophia Brown", "age": 22, "location": "Philadelphia", "qualifications": ["B.Sc. Psychology"]},
        {"id": 7, "name": "James Wilson", "age": 33, "location": "San Antonio", "qualifications": ["B.Sc. Computer Science"]},
        {"id": 8, "name": "Olivia Garcia", "age": 27, "location": "San Diego", "qualifications": ["B.Sc. Nursing"]},
        {"id": 9, "name": "William Lee", "age": 45, "location": "Dallas", "qualifications": ["Ph.D. Physics"]},
        {"id": 10, "name": "Isabella White", "age": 29, "location": "San Jose", "qualifications": ["B.A. Sociology", "M.S.W. Social Work"]}
    ]    

    return <Fragment>
        {/* <Header />
        <LearnMore />
        <Hero />
        <AllModels /> */}
        {/* <button className="">Hello</button> */}
        {/* <Button variant="dark" size="">Hello</Button>
        <Alert className="w-25" variant="dark">Hello</Alert>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
        </ButtonGroup> */}

        <div className="d-flex justify-content-center gap-3 flex-wrap">
            {/* {
                arr.map((number, index) => {
                    return <div key={index}>{number}</div> 
                    // key => unique identifier => delete, create, update
                })
            } */}
            {
                users_info.map((user) => {
                    return <div key={user.id} className="bg-light p-3">
                        <h4>{user.name} ({user.age})</h4>
                        <p>{user.location}</p>
                        {
                            user.qualifications.map((qualification, index) => {
                                return <div key={index}>
                                    <p>{qualification}</p>
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
        
    </Fragment>
}

export default LandingPage