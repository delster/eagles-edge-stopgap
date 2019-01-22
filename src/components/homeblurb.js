import React from 'react'
import { Link } from 'gatsby'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const HomeBlurb = ({ color, title, imgsrc, content, buttonText, buttonLink, isReactLink = false }) => (
  <Card
    style={{
      border: `3px solid #e1e1e1`,
      borderWidth: `6px 3px`,
      borderRadius: `0`,
      height: `100%`
    }}
  >
    <CardTitle style={{ backgroundColor: color, marginBottom: `0` }}>
      <h3 style={{ color: `white`, marginBottom: `0`, padding: `1.25rem .38rem` }}>{title}</h3>
    </CardTitle>
    <div className="card-image" style={{ flex: `1 1 20%` }}>
      <img src={imgsrc} alt="kids at camp" style={{ height: `100%`, width: `100%` }} />
    </div>
    <CardBody style={{ display: `flex`, flexFlow: `column`, padding: `0` }}>
      <CardText style={{ flex: `1 1 100%`, padding: `1.5em` }}>
        {content}
      </CardText>
      <div style={{ backgroundColor: color, padding: `1em 2em` }}>
        <LinkOrButton isLink={isReactLink} url={buttonLink} content={buttonText} />
      </div>
    </CardBody>
  </Card>
)

const LinkOrButton = ({ isLink, url, content }) => {
  if (isLink) {
    return (
      <Link
        to={url}
        style={{
          display: `inline-block`,
          color: `black`,
          backgroundColor: `white`,
          fontWeight: `700`,
          letterSpacing: `1px`,
          textTransform: `uppercase`,
          padding: `.5em 2em`,
          border: `none`,
          borderRadius: `0`
        }}
      >
        {content}
      </Link>
    )
  } else {
    return (
      <Button
        href={url}
        style={{
          color: `black`,
          backgroundColor: `white`,
          fontWeight: `700`,
          letterSpacing: `1px`,
          textTransform: `uppercase`,
          padding: `.5em 2em`,
          border: `none`,
          borderRadius: `0`
        }}
      >
        {content}
      </Button>
    )
  }
}

export default HomeBlurb