import React from "react"

import Headline from "../components/Headline"
import { Grid, Row, Col } from 'react-bootstrap';


export default class Home extends React.Component{
  render() {
    return (
        <div className="home">
            <Grid>
                <Row className="show-grid">
                  <Col xs={6} md={4} xsOffset={1}>
                    <img src="djreact/static/media/react2.png" width="400px" height="400px" />
                    <img src="djreact/static/media/react1.png" width="400px" height="200px" />
                  </Col>
                  <Col xs={6} md={2}>
                    <img src="djreact/static/media/plus3.gif" className="home_img" width="100px" height="100px" />
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="djreact/static/media/python2.jpg" width="400px" height="400px" />
                    <img src="djreact/static/media/python.jpg" width="400px" height="200px" />
                  </Col>
                </Row>


            </Grid>

        </div>
    )
  }
};

