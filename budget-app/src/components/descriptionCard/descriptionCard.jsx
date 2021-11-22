import React from "react";
import {Card} from "react-bootstrap"

const DescriptionCard = (props) => {
    return (
        <div className="description-card">
        <Card>
             <Card.Body className="text-description-card">{props.text}</Card.Body>
        </Card>
        </div>
    )
}

export default DescriptionCard
