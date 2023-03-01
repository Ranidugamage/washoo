
export default function BranchService({ services }) {
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return (
        <div>
            {services.map((service, index) => {
                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', padding: "20px", fontSize: "25px" }}>
                        <input
                            style={{ marginRight: '20px' }}
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={index}
                            id="defaultCheck1"
                            onChange={(e) => handleChange(e)}
                        />
                        <label style={{ display: 'flex', alignItems: 'center' }} className="form-check-label" htmlFor="defaultCheck1">
                            <span style={{ marginRight: '10px' }}>{service.name} </span>
                            <span>{service.price}</span>
                        </label>
                    </div>
                )
            })}

        </div>

    )
}
