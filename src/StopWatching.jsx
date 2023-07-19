import { Component } from "react";

class StopWatching extends Component{
    state = {
        hours: 0,
        minut: 0,
        seconds: 0,
        btnDisabled: false,
        interval: ""
    }
    handleStart = () => {
        this.setState({
            btnDisabled: true
        })
       let timer =  setInterval(() => {
            let {seconds, minut, hours} = this.state
            if(seconds < 60){
                this.setState({
                    seconds: seconds+1
                })
            }else{
                this.setState({
                    seconds: seconds  = 0,
                    minut: minut + 1
                })
                if(minut >= 60){
                    this.setState({
                        seconds: seconds  = 0,
                        minut: minut = 0,
                        hours: hours+1
                    })
                    if(hours >= 24){
                        this.setState({
                            seconds: seconds  = 0,
                            minut: minut = 0,
                            hours: hours = 0
                        })
                    }
                }
            }
        }, 1000)    
        this.setState({
            interval: timer
        })
    }
    handleStop = () => {
        this.setState({
            interval : clearInterval(this.state.interval),
            btnDisabled: false
        })
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
                            <li><h2>{this.state.hours === 0 ? this.state.hours : this.state.hours.toString().padStart(2, "0")} :  <span>Hours</span></h2></li>
                            <li><h2>{this.state.minut  === 0 ? this.state.minut : this.state.minut.toString().padStart(2, "0")} :  <span>Minut</span> </h2></li>
                            <li><h2>{this.state.seconds  === 0 ? this.state.seconds : this.state.seconds.toString().padStart(2, "0")} : <span>Seconds</span> </h2></li>
                        </ul>
                    </div>
                    <ul className="watching__btns">
                        <li><button className="btn border-transparent" onClick={this.handleStart} disabled={this.state.btnDisabled}>Start</button></li>
                        <li><button className="btn border-transparent" onClick={this.handleStop}>Stop</button></li>
                        <li><button className="btn border-transparent">InTerval</button></li>
                        <li><button className="btn border-transparent">Clear</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default StopWatching