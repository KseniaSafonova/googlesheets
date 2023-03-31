import { Component } from "react";
import { Segment } from "semantic-ui-react";

import './UserInfo.scss'

export default class UserInfo extends Component {

    render() {
        const { carValue, phoneValue, apartmentValue, nameValue } = this.props;
        return (
            <Segment className="userSegment">
                <div>{carValue}</div>
                <div>{phoneValue}</div>
                <div>{apartmentValue}</div>
                <div>{nameValue}</div>
            </Segment>
        )
    }
}