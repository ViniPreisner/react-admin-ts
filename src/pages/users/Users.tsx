import React, { Component } from 'react'

type Props = {}
type State = {
    count: number;
    hide: boolean
}

class Users extends Component<Props, State> {

    state: State = {
        count: 0,
        hide: false
    }

    increment = (amt: number) => {
        this.setState((state) => ({
            count: state.count + amt,
            //hide: state.hide
        }))
    }

    toggleVisibility = () => {
        this.setState((state) => ({
            hide: !state.hide,
            //count: state.count
        }))
    }

    render() {
        return (
            <>
            <div>
                {!this.state.hide &&
                <a href="#" onClick={() => this.increment(1)}>Users count: {this.state.count}</a>
                }
            </div>
            <div>
                
                <a href="#" onClick={() => this.toggleVisibility()}>
                {!this.state.hide ? 'Ocultar' : 'Mostrar' }
                </a>

            </div>
            </>
        )
    }
}

export default Users