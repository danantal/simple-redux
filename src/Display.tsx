import React, { Component } from 'react'
import { connect } from 'react-redux'

interface DisplayProps {
    value: number;
}

export class Display extends Component<DisplayProps, {}> {
    render() {
        return (
            <div style={{border: "1px solid black"}}>
                {this.props.value}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    value: state.total
});

export default connect(mapStateToProps, null)(Display)
