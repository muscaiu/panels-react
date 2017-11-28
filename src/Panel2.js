import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let style1 = {
    float: "left",
    width: "400px",
    height: "600px"
}

class Panel2 extends Component {
    render() {
        return (
            < ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}
                transitionAppearTimeout={3000}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                <div className="myPanel">
                    <div className="numbertext">2 / 3</div>
                    <div className="container shrink left">
                        <div style={style1}>
                            <div className="panel_400x200 left grey1"></div>
                            <div className="panel_200x400 left dark_blue"></div>
                            <div className="panel_200x200 left grey2"></div>
                            <div className="panel_200x200 left light_blue"></div>
                        </div>
                        <div style={style1}>
                            <div className="panel_200x200 left light"></div>
                            <div className="panel_200x400 right light_blue"></div>
                            <div className="panel_200x400 left grey1"></div>
                            <div className="panel_200x200 right photo"></div>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup >
        )
    }
}

export default Panel2