import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let style1 = {
    float: "left",
    width: "400px",
    height: "600px"
}

class Panel1 extends Component {
    componentWillUnmount() {
        console.log('p1 unmounted')
    }
    render() {
        return (
            // < ReactCSSTransitionGroup
            //     transitionName="example"
            //     transitionAppear={true}
            //     transitionEnter={true}
            //     transitionLeave={true}
            //     transitionAppearTimeout={3000}
            //     transitionEnterTimeout={3000}
            //     transitionLeaveTimeout={3000}
            // >
            <div className="myPanel">
                <div className="numbertext">1 / 3</div>
                <div className="container shrink left">
                    <div style={style1}>
                        <div className="panel_200x200 left photo"></div>
                        <div className="panel_200x400 right grey1"></div>
                        <div className="panel_200x400 left light_blue"></div>
                        <div className="panel_200x200 right light"></div>
                    </div>
                    <div style={style1}>
                        <div className="panel_200x200 left light_blue"></div>
                        <div className="panel_200x400 right dark_blue"></div>
                        <div className="panel_200x200 left photo"></div>
                        <div className="panel_400x200 right grey1"></div>
                    </div>
                </div>
            </div>
            // </ReactCSSTransitionGroup >
        )
    }
}

export default Panel1