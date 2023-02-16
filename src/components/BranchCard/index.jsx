import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export default function BranchCard({ data }) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        const path = `/customer-dashboard/${data.id}`
        navigate(path, { state: data });
    }
    return (
        <Card className="mt-4" onClick={handleCardClick}>
            <Card.Img height={200} variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.address}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
