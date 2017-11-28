import React, { Component } from 'react'

let style1 = {
    float: "left",
    width: "400px",
    height: "600px"
}

class Panel3 extends Component {
    render() {
        console.log('p3')
        return (

            <div className="myPanel">
                <div className="numbertext">3 / 3</div>
                <div className="container shrink left">
                    <div style={style1}>
                        <div className="panel_400x200 left grey1"></div>
                        <div className="panel_200x400 left dark_blue"></div>
                        <div className="panel_200x200 left grey2"></div>
                        <div className="panel_200x200 left light_blue"></div>
                    </div>
                    <div style={style1}>
                        <div className="panel_200x400 left dark_blue"></div>
                        <div className="panel_200x200 right photo"></div>
                        <div className="panel_200x200 left light_blue"></div>
                        <div className="panel_400x200 right light"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel3