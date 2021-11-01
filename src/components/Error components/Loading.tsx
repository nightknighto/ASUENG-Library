import { Row } from "react-bootstrap";

export default function Loading() {

    return (
        <Row>
        <div className="col-10 ms-2 mt-3">
            <span className="fa fa-spinner fa-pulse fa-5x fa-fw text-primary"></span>
            <p className="fs-5 ">Loading . . .</p>
        </div>
        </Row>
    )
}