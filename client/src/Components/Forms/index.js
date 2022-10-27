import React from 'react'
import {
    Card, 
    Formm, 
    Select, 
    Date, 
    Time,
    TextArea
} from './Form.styles'
import { ResBtn } from '../Buttons'

const Form = () => {
    return(
        <>
        <Card>
            <h2>BOOK A TABLE</h2>
        <Formm>
            <Select name='persons'>
                <option value='one'>1 person</option>
                <option value='two'>2 persons</option>
                <option value='three'>3 persons</option>
                <option value='four'>4 persons</option>
                <option value='five'>5+ persons</option>
            </Select>
            <Date type='date' />
            <Time type='time' />
            <TextArea type='text' placeholder='Write message ...'></TextArea>
            <div> <ResBtn /> </div>
        </Formm>
        </Card>
        </>
    )
}

export default Form