import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrent } from './store'

interface InputProps {
    value: number
    setCurrent: (value: number) => void;
}

export class Input extends Component<InputProps, {}> {

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.setCurrent(parseInt(e.currentTarget.value));
    }

    render() {
        const {value} = this.props;

        return (
            <input value={value} onChange={this.onChange } />
        )
    }
}

const mapStateToProps = (state: any) => ({
    value: state.inputValue
})

const mapDispatchToProps = dispatch => ({
    setCurrent: (value: number) => dispatch(setCurrent(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Input)
