import React, { Component } from 'react'
import {Hasil, NavbarComponent, ListCategories, Menus} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import {API_URL} from './utils/constants';
import axios from 'axios';


export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     menus: [],
  }
}

componentDidMount(){
  axios
  .get(API_URL+"products")
      .then(res => {
        console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
}

  render() {
    const { menus } = this.state
    return (
      <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Daftar Produk</strong></h4>
              <hr />
              <Row>
                {menus && menus.map((menu) =>
                  <Menus 
                    key={menu.id}
                    menu={menu}
                  />
                )}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}


