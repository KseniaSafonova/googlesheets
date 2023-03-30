import React, { Component } from 'react'
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import AddFormInput from "./AddFormInput";
// import axios from 'https://cdn.skypack.dev/axios';

import axios from 'axios';

const titles = ['Машина', 'Номер', 'Имя', 'Телефон', 'Квартира', 'Сатус оплаты']

// function AddForm() {
//     const [carValue, setCarValue] = useState('');
//     const [numberValue, setNumberValue] = useState('');
//     const [nameValue, setNameValue] = useState('');
//     const [phoneValue, setPhoneValue] = useState('');
//     const [apartmentValue, setApartmentValue] = useState('');
//     const [paymentValue, setPaymentValue] = useState('');

// const HandleChangeCar = (event) => {
//     setCarValue(event.target.value)
// }

// const HandleChangeNumber = (event) => {
//     setNumberValue(event.target.value)
// }

// const HandleChangeName = (event) => {
//     setNameValue(event.target.value)
// }

// const HandleChangePhone = (event) => {
//     setPhoneValue(event.target.value)
// }

// const HandleChangeApartment = (event) => {
//     setApartmentValue(event.target.value)
// }



export default class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carValue: '',
            numberValue: '',
            nameValue: '',
            phoneValue: '',
            apartmentValue: ''
        }
    }

    HandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    HandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/0b377265-6ca4-4cec-ad98-c4bbcacc31ff', this.state)
            .then(response => {
                console.log(response);
            })
    }


    // return (
    render() {
        const { carValue, numberValue, nameValue, phoneValue, apartmentValue } = this.state;
        return (
            <>
                {/* <h2>Добавить позицию</h2>
            {
                titles.map((title) =>
                    <div>
                        <div>{title}</div>
                        <AddFormInput />
                    </div>
                )
            } */}

                <Form onSubmit={this.HandleSubmit}>
                    <Form.Field>
                        <label>Машина</label>
                        <input onChange={this.HandleChange} value={carValue} name='carValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Номер</label>
                        <input onChange={this.HandleChange} value={numberValue} name='numberValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Имя</label>
                        <input onChange={this.HandleChange} value={nameValue} name='nameValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Телефон</label>
                        <input onChange={this.HandleChange} value={phoneValue} name='phoneValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Квартира</label>
                        <input onChange={this.HandleChange} value={apartmentValue} name='apartmentValue' />
                    </Form.Field>
                    {/* <Form.Field>
                    <label>Статус оплаты</label>
                    <input onChange={HandleChange} value={paymentValue}/>
                </Form.Field> */}
                    <Button basic>Отменить</Button>
                    <Button type='submit' basic color='violet'>Отправить</Button>
                </Form>
            </>
        )
    }
}
