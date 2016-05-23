class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggList: ['apples','bananas','dragons']
    };
  }

  makeSuggestion(event) {
    var text = event.target.value;
    this.state.suggList.push(text);
  }

  render() {
    return (
      <div>
      Hello World Whats up Dog WOOOT
      <Nav makeSugg ={this.makeSuggest.bind(this)}/>
      <SuggestionList suggs={this.state.suggList} />
      </div>  
    );
  }
}