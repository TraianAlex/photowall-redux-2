import React from 'react';
import ReactDOM from 'react-dom';


class List extends React.Component {
    render() {

        const tasks = this.props.tasks;
        
        
        
        return <div>
                      <ol> 
                         { tasks.map((task, index) => <li key = {index}> {task} </li>)}
                     </ol>
                 </div>
        

    }

}

class Title extends React.Component {
    render() {
        return <h1> Task List </h1>
    }

}


class Main extends React.Component {

    render() {
        return <div> 
            <Title/>
            <List tasks = {['mow the lawn', 'walk the dog']}/>
            <List tasks = {['hose the driveway', 'finish the laundry']}/>
         </div>

}

}

ReactDOM.render(<Main/>, document.getElementById('root'));


