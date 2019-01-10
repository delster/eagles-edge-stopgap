import React from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const HomeBlurb = ({ title, imgsrc, content, buttonText, buttonLink }) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
    </CardBody>
    <img src={imgsrc} />
    <CardBody>
      <CardText>{content}</CardText>
      <Button href={buttonLink}>{buttonText}</Button>
    </CardBody>
  </Card>
)

export default HomeBlurb