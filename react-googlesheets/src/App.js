import React, { Component } from 'react'
import { Search, Button } from 'semantic-ui-react';
import AddForm from './AddForm';
import axios from 'axios';
import './App.css';
import UserInfo from './UserInfo';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      data: [],
      pressed: false
    }
  }

  componentDidMount() {

    // axios.get('https://sheet.best/api/sheets/0b377265-6ca4-4cec-ad98-c4bbcacc31ff')
    //   .then(response => {
    //     console.log(response);
    //     this.setState({ data: response.data, isLoaded: true })
    //   })

  }

  OpenAddForm = () => {
    this.setState({ pressed: true })
  }

  CloseAddForm = () => {
    this.setState({ pressed: false })
    console.log('close')
  }
  //вынести кнопку за пределы формы

  render() {
    const { isLoaded, pressed, data } = this.state;
    return (
      <div className="App">
        {
          pressed ?
            <AddForm closeAddForm={this.CloseAddForm} />
            :
            <>
              <Button color='violet' onClick={this.OpenAddForm}>+ Add</Button>
              <Search placeholder='Поиск' />

              {
                data.map((d) =>
                  <UserInfo
                    carValue={d.carValue}
                    phoneValue={d.phoneValue}
                    apartmentValue={d.apartmentValue}
                    nameValue={d.nameValue} />)
              }
            </>
        }

      </div>
    )
  }
}



