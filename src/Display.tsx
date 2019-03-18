import React, { Component } from 'react'
import { connect } from 'react-redux'

interface DisplayProps {
    value: number;
    loading: boolean;
}

export class Display extends Component<DisplayProps, {}> {
    render() {
        return this.props.loading ? <div>Loading...</div> : (
            <div style={{border: "1px solid black"}}>
                {this.props.value}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    value: state.total,
    loading: state.loading
});

export default connect(mapStateToProps, null)(Display)
