import React, {Component} from "react";
// import ReactDOM from "react-dom";

class Header extends Component{



       state = {
           title : "this is title",
           keywords: ""
       }

    inputChange(e)
    {
        // console.log(e.target.value);

       this.setState({
            title : "this is title",
            keywords : e.target.value
        })

        // console.log(this.setState.keywords);
    }




    render()
    {

        // const styles ={
        //     header : {
        //         background: '#03a9f4'
        //     },

        //     logo: {
        //         color : '#fff',
        //         fontFamily : 'serif',
        //         textAlign : 'center'
        //     }


        // }   

        return (
            <header>
            
                 Logo 
                 { <input onChange  = {this.inputChange.bind(this)}/> }
                 {/* { <input name = "input2" onChange  = {this.inputChange}/> } */}
                 {/* <input onChange  = {this.inputChange}/> */}
                <div> {this.state.title} </div>
                <div> {this.state.keywords}  </div>

           </header>
        )
    }
}

export default Header;