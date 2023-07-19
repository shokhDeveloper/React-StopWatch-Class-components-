import { Component } from "react";

class StopWatching extends Component{
    state = {
        hours: 0,
        minut: 0,
        seconds: 0
    }
    handleStart = () => {
        setInterval(() => {
            let {seconds} = this.state
            if(seconds < 60){
                this.setState({
                    seconds: seconds+1
                })
            }else{
                this.setState({
                    seconds: seconds  = 0
                })
            }
        }, 1000)    
    }
    render(){
        return(
            <div className="stop__watching">
                <div className="container">
                    <div className="watching">
                        <h2 className="watching__title">
                            Stop<span>Watching</span>
                        </h2>
                        <ul className="watching__ul">
                            <li><h2>{this.state.hours} :  <span>Hours</span></h2></li>
                            <li><h2>{this.state.minut} :  <span>Minut</span> </h2></li>
                            <li><h2>{this.state.seconds} : <span>Seconds</span> </h2></li>
                        </ul>
                    </div>
                    <ul className="watching__btns">
                        <li><button className="btn border-transparent" onClick={this.handleStart}>Start</button></li>
                        <li><button className="btn border-transparent">Stop</button></li>
                        <li><button className="btn border-transparent">InTerval</button></li>
                        <li><button className="btn border-transparent">Clear</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default StopWatching