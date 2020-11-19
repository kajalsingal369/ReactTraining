import logo from './logo.svg';
import React, {Component} from 'react';
import axios from 'axios'

 class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1,
      customerList:[]
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    
    this.getCustomerData();
  }

  //Function to get the Customer Data from REST API
  getCustomerData() {
    console.log("Inside get Customer data")
    axios.get('http://localhost:8080/api/employee').then(response => {
        console.log("RECORDS "+response.data[0].id)
        this.setState({customerList: response.data[0].name})
      })
  };

  render() {
  
    return (<div>TESt
      <h1>{this.state.customerList}</h1>
    </div>);
  }

}

export default App;


