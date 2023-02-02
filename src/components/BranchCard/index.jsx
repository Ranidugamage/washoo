import Card from 'react-bootstrap/Card';

export default function BranchCard({ name, img, address }) {
    return (
        <Card className="mt-4">
            <Card.Img height={200} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {address}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
