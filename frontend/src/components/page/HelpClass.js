import React from 'react'

class HelpClass extends React.Component {
    constructor(){
        super();
        this.state={car:"Ferrari",Noodles:"Maggie",Condom:"Durex"}
    }
    // componentDidMount() {
    //     setInterval(() => {
    //       console.log('Hey I am in mount state');
    //     }, 1)
    //   }
      componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
    render(){
        return( 
        <>
        <h1>Best Car:{this.state.car}</h1>;
        <h1>Best Noodles:{this.state.Noodles}</h1>;
        <h1>Best Condom:{this.state.Condom}</h1>;
        </>)
    }
}



export default HelpClass;
