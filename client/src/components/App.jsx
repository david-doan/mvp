class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggList: []
    };
  }

  makeSuggestion(txt) {
    var newList = this.state.suggList;
    newList.push(txt);
    this.setState({suggList: newList});
    // this.render();
  }

  render() {
    console.log('trying to render App');
    return (
      <div>
      Hello World Whats up Dog WOOOT
      <Nav makeSugg ={this.makeSuggestion.bind(this)}/>
      <SuggestionList suggs={this.state.suggList} />
      </div>  
    );
  }
}