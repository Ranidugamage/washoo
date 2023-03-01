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
                    <img style={{ borderRadius: "50px" }} width={200} height={200} src='https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/36222523_202227767164672_3195153349771001856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V_N-XCvfyjcAX_FagyO&_nc_ht=scontent-sin6-4.xx&oh=00_AfA4Hpd-dc8KLo83ZU7_1SjreezOR0u1T39puzhqLFPlKw&oe=64257BDC' />
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
