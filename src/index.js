import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./Component/Helloword";


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Helloword}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




