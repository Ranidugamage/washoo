import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BranchService({ services }) {
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return (
        <div>
            <Row >
                <Col  >
                    <img style={{ borderRadius: "50px" }} width={200} height={200} src='https://images.unsplash.com/photo-1675779245403-f7f55cf97bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjYwMzY2NQ&ixlib=rb-4.0.3&q=80&w=1080' />
                    <h3>The Laundromat</h3>
                </Col>
                <Col >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue={index}
                                    id="defaultCheck1"
                                    onChange={(e) => handleChange(e)}
                                />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    <span>{service.name} </span> <span>{service.price}</span>
                                </label>
                            </div>
                        )
                    })}



                </Col>
            </Row>

        </div>

    )
}
