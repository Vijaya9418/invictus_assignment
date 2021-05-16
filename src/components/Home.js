import React, { Component } from 'react'
import Table from './Table';
export default class Home extends Component {

    state={
        data:'',dictionary:''
    }
    GetTopWords=()=>{
        var passage=this.state.data;
        var words=passage.split(' ');
        var dictionary={};
        for(let i of words){
            if(dictionary[i]!=undefined){
                dictionary[i]+=1;
            }
            else{
                dictionary[i]=1;
            }
        }
        
        dictionary= Object.entries(dictionary).sort((a,b)=>b[1]-a[1]);
        let selectitems=Object.entries(dictionary).splice(0,document.getElementById('number').value);
        this.setState({dictionary:selectitems});
    }
  
    getwords=()=>{
        let number=document.getElementById('number').value;
        console.log(number);
        if(number!=undefined && number!="")
        {
            this.setState({data:'loading....'});
            fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md").then(response=>response.text()).then(data=>{this.setState({data});this.GetTopWords()});
    
        }
        else{
            alert("Invalid Input");
        }
            }
    render() {
        return (
            <div>
                <div class="card text-left bg-dark text-white m-5">
                  <div class="card-body">
                    <h4 class="card-title">Words Analyse</h4>

                        <div class="form-group">
                            <label for="">Enter a Number</label>
                            <input type="number"
                            class="form-control" name="" id="number" aria-describedby="helpId" placeholder=""/>
                             <hr></hr>
                              <button onClick={this.getwords} type="submit" class="btn btn-primary">Submit</button>
                        </div>
                  </div>
                  <div class='align-self-center'>
                  <Table data={this.state.data} dictionary={this.state.dictionary} />
                  </div>
                 </div>
            </div>
        )
    }
}
