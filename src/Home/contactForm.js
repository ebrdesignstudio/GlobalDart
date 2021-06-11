import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Form from '../web-bricks/Shared/form/components/form';
import sendMessage from '../web-bricks/lib/messenger'


class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            contactNumber: '',
            message: '',
            key: 0
        }
    }

    handleSubmit = async (values) => {
        try {
            await sendMessage({ ...values, to: '9597468489'});
        }
        catch (e) {
        }
        values.onSuccess()
        this.setState({
            key: this.state.key + 1
        })
    }

    render() {
        return (
            <div key={this.state.key} className="contact_form" style={{  maxWidth:'85%',margin:'30px auto'}}>
                <Form
                    title="Send us a message"
                    submitButton={{
                        label: 'Send now'
                    }}
                    onSubmit={this.handleSubmit}
                    formMaker={{
                        list: [{
                            type: 'textField',
                            props: {
                                name: "name",
                                fullWidth: true,
                                label: "Name",
                                required: true,
                            }
                        }, {
                            type: 'textField',
                            props: {
                                name: "phone",
                                fullWidth: true,
                                required: true,
                                label: "Phone Number",
                            }
                        }, {
                            type: 'textField',
                            props: {
                                name: "message",
                                fullWidth: true,
                                required: true,
                                label: "Message",
                                multiline: true,
                                rows: 4
                            }
                        }]
                    }}
                />
                {/* <form className="form flex-column" onSubmit={this.handleSubmit} style={{ flex: 1}}> */}
                {/* <TextField 
                        
                        id = "name"
                        type = "text"
                        value = {this.state.name}
                        style={{ flex: '0 0 15%'}}
                        onChange = { (e) => this.setState({name:e.target.value})}
                    /> */}
                {/* <TextField 
                        name = "contact number"
                        label = "Contact Number"
                        id = "contact number"
                        type = "tel"
                        value = {this.state.contactNumber}
                        onChange = { (e) => this.setState({contactNumber:e.target.value})}
                    />
                    <TextField 
                        name = "message"
                        label = "Message"
                        id = "message"
                        type = "text"
                        value = {this.state.message}
                        onChange = { (e) => this.setState({message:e.target.value})}
                    /> */}
                {/* <FormControl>
                        <InputLabel>Required</InputLabel>
                        <Select
                            id = "required"
                            value = "Required"
                            fullWidth
                        >
                        <MenuItem value = "">
                        </MenuItem>
                        <MenuItem>Required</MenuItem>
                        <MenuItem>Courses</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel control = {<Checkbox name = "terms and conditions"/>}label="I agree to terms and conditions"/>
                    <Button type = "submit" color = "secondary">Send</Button>
                </form> */}
            </div>
        )
    }
}

export default ContactForm;
