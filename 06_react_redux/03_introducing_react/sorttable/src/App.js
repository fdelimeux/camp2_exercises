import React, { Component } from 'react';
import logo from './logo.svg';
import _ from "underscore";
import './App.css';

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]



class Tablesort extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datatabsort: "decathlon_id", order: "ASC" }
  }

  sortId = (sort) => {
    let sortorder = "ASC";
    if (this.state.order === "ASC") { sortorder = "DESC"; }
    this.setState({datatabsort: sort, order: sortorder});
  }

  render() {
    let datatab = _.sortBy(this.props.datatab, this.state.datatabsort);
    if (this.state.order !== "ASC") {
      datatab = datatab.reverse();
    }
    return <table className="table">
    <th onClick={() => this.sortId("decathlon_id")}>Decathlon_id</th>
    <th onClick={() => this.sortId("title")}>Title</th>
    <th onClick={() => this.sortId("price")}>Price</th>
    {datatab.map(value => <Addrow datarow={value}/>)}
    </table>;
  }
}

class Addrow extends React.Component {
  render() {
    return <tr><td>{this.props.datarow.decathlon_id}</td>
    <td>{this.props.datarow.title}</td>
    <td>{this.props.datarow.price}</td>
    </tr>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tablesort datatab={products} />
      </div>
    );
  }
}

export default App;
