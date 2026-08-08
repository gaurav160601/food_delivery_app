
import React from "react"

class UserClassBased extends React.Component {
    constructor(props){
        super(props);

        this.state={
            avatar_url:"www.github.com",
            url:"",
            count:0
                }
    }
    timer;
    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/gaurav160601");
        const json = await response.json();
        console.log(json)
        this.setState(json)

       this.timer= setInterval(()=>{
        this.setState({
            count: this.state.count + 1
        })
       },1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("count changed to:", this.state.count);
        }
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        const {avatar_url, url, count}=this.state
        return (
               <div className="userInfo">
                <img src={avatar_url} width="100" />
                <h2>Profile: {url}</h2>
                <h2>Count: {count}</h2>
            </div>
        );
    }
}

export default UserClassBased