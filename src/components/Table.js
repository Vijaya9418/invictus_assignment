import React, { Component } from 'react'
import Loading from './nav/Loading'
export default class Table extends Component {

    static={
        data:"",
        dictionary:""
    }
    buildtable=(dict)=>{
        let count=1;
        var table=document.getElementById('tbody');
        table.innerHTML="";
        for(let i of dict){
            var column=document.createElement('tr');
            var th1=document.createElement('th');
            th1.innerHTML=i[1][0];
            var th2=document.createElement('th');
            th2.innerHTML=i[1][1];
            var th3=document.createElement('th');
            th3.innerHTML=count;
            column.appendChild(th3)
            column.appendChild(th1);
            column.appendChild(th2);
            count++;
            table.appendChild(column);
        }
        document.getElementById('tableview').setAttribute('class','');
    }
    static getDerivedStateFromProps(props, state) {
      
        return {data: props.data,dictionary:props.dictionary} 
      }
    render() {
        if(this.state.dictionary!='')
        this.buildtable(this.state.dictionary);
        return (
            <div>
                 {this.state.dictionary!=""?
                   null
                  :
                  <Loading/>
                  }
                   <div class='invisible' id='tableview'>
                  <div id='words' class="container bg-dark p-2 m-5 text-white">
                      <table class="table ">
                          <thead>
                              <tr class='text-white'>
                              <th>S.No</th>
                                  <th>Word</th>
                                  <th>Frequency</th>
                              </tr>
                          </thead>
                          <tbody id='tbody' class='text-white'>
                            
                          </tbody>
                      </table>
                  </div>

                  <div class="container bg-dark p-2 m-5 text-white">
                      {this.props.data!==''?<p>{this.props.data}</p>:null}
                  </div>
                  </div>
            </div>
        )
    }
}
