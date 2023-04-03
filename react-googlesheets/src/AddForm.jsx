import React, { Component } from 'react'
import { Form, Button } from "semantic-ui-react";
import axios from 'axios';
import './AddForm.scss'

const titles = ['Машина', 'Номер', 'Имя', 'Телефон', 'Квартира', 'Сатус оплаты']

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
        // event.preventDefault();
        console.log(this.state);

        // axios.post('https://sheet.best/api/sheets/0b377265-6ca4-4cec-ad98-c4bbcacc31ff', this.state)
        //     .then(response => {
        //         console.log(response);
        //     })
    }

    render() {
        const { carValue, numberValue, nameValue, phoneValue, apartmentValue } = this.state;
        const { HandleChange, closeAddForm } = this.props;
        return (
            <>
                <Form className='form'>
                    {/* +валидация формы */}
                    <Form.Field className='form__field'>
                        <label>Машина</label>
                        <input onChange={HandleChange} value={carValue} name='carValue' />
                    </Form.Field>
                    <Form.Field className='form__field'>
                        <label>Номер</label>
                        <input onChange={HandleChange} value={numberValue} name='numberValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Имя</label>
                        <input onChange={HandleChange} value={nameValue} name='nameValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Телефон</label>
                        <input onChange={HandleChange} value={phoneValue} name='phoneValue' />
                    </Form.Field>
                    <Form.Field>
                        <label>Квартира</label>
                        <input onChange={this.HandleChange} value={apartmentValue} name='apartmentValue' />
                    </Form.Field>
                    {/* <Form.Field>
                        <label>Статус оплаты</label>
                        <input onChange={HandleChange} value={paymentValue} />
                    </Form.Field> */}
                    {/* поле статуса оплаты? */}
                    <Button type='submit' basic color='violet' onClick={() => { this.HandleSubmit(); closeAddForm(); }}>Отправить</Button>
                    {/* добавить значок после отправки формы */}
                    <Button basic onClick={closeAddForm}>Оменить</Button>
                </Form >

            </>
        )
    }
}
