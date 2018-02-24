//from App.js <div>
     //import logo from './logo.svg';
<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome Home</h1>
</header>
<p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
</p>


// *****************
class Hello extends React.Component{
    render(){
        return <h1>Hello, world!</h1>;
    }
}

export default Hello;

//import Hello from './App';
// from index.js ******************************
function Hello(props) {
    return <h1>hello, {props.name}!</h1>;
}
function Apps() {
    return (
        <div>
           <Hello name="Nastya" />
           <Hello name="Vadim" />
           <Hello name="Artem" />
        </div>
    );
}
//const elem = <Hello name="Nastya" />;
ReactDOM.render(
    <Apps />,
    document.getElementById('root')
);

/*
function tick(){
    const element = (
        <div>
           <h1>Hello!</h1>
           <h2>Time is {new Date().toLocaleTimeString()}</h2>
        </div>
     );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick,1000);*/

/*ReactDOM.render(
    <Increment init='3' />,
    document.getElementById('root')
);*/

/*
ReactDOM.render(
    <ArticleList articles = {articles} />,
    document.getElementById('root')
)*/

/*ReactDOM.render(
    <Appl init='0' />,
    document.getElementById('root')
);*/
//*************************************************************
//import Tables from './Table';
//import Increment from './Increment';
//import ArticleList from './ArticleList';
//import {articles} from './info';
//import Appl from './Buttons';
//import Colors from './Colors'