// COMPONENTS
import React, { Component } from 'react';
import Header from './Header';
import Roles from './Roles';
import Associated from './Associated';
// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// JSON
import RoleData from './user_roles.json'
// STYLING
import './../App.scss';

class App extends Component {

  state = {
    items: RoleData,
    filteredList: [],
    searchTerm: '',
    activeStatus: ''
  } 

  componentDidMount() {
      this.setState({
        filteredList: this.state.items
      }); 
  }

  searchQuery = (feedback) => {
    this.setState( () => ({
      searchTerm: feedback
    }));
    let updatedList = this.state.items;
    updatedList = updatedList.filter( item => {
      return item.name.toLowerCase().search(feedback.toLowerCase()) !== -1;
    });
    this.setState({filteredList: updatedList});  
  }

  filterQuery = (selection) => {
    this.setState( () => ({
      activeStatus: selection
    }));
    let sortedList = this.state.items;
    sortedList = sortedList.filter( status => {
      return status.active.search(selection) !== -1;
    });
    this.setState({filteredList: sortedList});  
  }


  render() {
     
     return (
        <Container>
          <Header filterQuery={this.filterQuery} searchQuery={this.searchQuery} />
          <Row>
              {this.state.filteredList.map( (item) => {
                  return (
                    <Col xs={12} md={6} lg={4} key={item.id}>
                      <div className="role_card">
                        <Roles 
                              name={item.name}
                              type={item.type}
                              description={item.description}
                          />
                            <Row>
                              {item.users.map((userData, i) => (
                                <div key={userData.id}>
                                  <Associated 
                                    photo_url={userData.photo_url}
                                    first_name={userData.first_name}
                                  />
                                </div>
                              ))}
                            </Row>
                            <Row className="postdate">
                              <Col>
                                <p>{new Date(item.modified_on).toLocaleString()}</p>
                              </Col>
                            </Row>
                        </div>
                    </Col>
                  ) 
                })
              }
          </Row>
        </Container>
      );
  }
}

export default App;
