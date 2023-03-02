export default function PaymentForm() {
    return (
        <div className="row g-5 mb-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Product name</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (Rs)</span>
                        <strong>20</strong>
                    </li>
                </ul>
            </div>
            <div className="col-md-7 col-lg-8">
                <form className="needs-validation" noValidate="">
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name" className="form-label">
                                Name on card
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cc-name"
                                placeholder=""
                                required=""
                            />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">Name on card is required</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cc-number" className="form-label">
                                Credit card number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="cc-number"
                                placeholder=""
                                required=""
                            />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cc-expiration" className="form-label">
                                Expiration
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="cc-expiration"
                                placeholder=""
                                required=""
                            />
                            <div className="invalid-feedback">Expiration date required</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cc-cvv" className="form-label">
                                CVV
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="cc-cvv"
                                placeholder=""
                                required=""
                            />
                            <div className="invalid-feedback">Security code required</div>
                        </div>
                    </div>
                    <button className="w-100 btn btn-primary btn-lg my-4" type="submit">
                        Continue to checkout
                    </button>
                </form>
            </div>
        </div>
    )
}
