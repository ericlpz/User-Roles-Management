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
// STYLING / IMAGES
import './../App.scss';
import Lock from './../img/lock.png';

class App extends Component {

  state = {
    items: RoleData,
    filteredList: [],
    searchTerm: '',
    activeStatus: '',
    showForm: false
  } 

  prevRoleId = 6;

  componentDidMount() {
      this.setState({
        filteredList: this.state.items
      }); 
    console.log(this.state.items)
    }
    
  handleAddRole = (name, type, description) => {
    this.setState( prevState => {
      return {
        filteredList: [
          ...prevState.items,
          {
            name,
            type,
            description,
            id: this.prevRoleId += 1,
            editable: "yes", 
            active: "yes",
            modified_on: new Date().toLocaleDateString(),
            users: [
              {
                first_name: "",
                id: "",
                last_name: "",
                photo_url: "https://loremflickr.com/60/60/person"
              }
            ]
          }
        ]
      }
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

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm});
  } 

  render() {
     
     return (
        <Container>
          <Header addRole={this.handleAddRole} showForm={this.state.showForm} toggleForm={this.toggleForm}  filterQuery={this.filterQuery} searchQuery={this.searchQuery} />
          <Row>
              {this.state.filteredList.map( (item) => {
                  return (
                    <Col xs={12} md={6} lg={4} key={item.id}>
                      <div className="role_card">
                        <Roles 
                              name={item.name}
                              type={item.type}
                              description={item.description}
                              active={item.active}
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
                              <Col xs={7}>
                                <p>Last Update:{new Date(item.modified_on).toLocaleDateString()}</p>
                              </Col>
                              <Col xs={5}>
                                <p>{!item.editable && <img className="lock" alt="lock" src={Lock} />}</p>
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
