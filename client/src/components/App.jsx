class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggList: [],
      started: false
    };
  }

  // updates App state with suggestion
  makeSuggestion(txt) {
    var newList = this.state.suggList;
    newList.push(txt);
    this.setState({suggList: newList});
    // this.render();
  }

  //makes post request to server to start instance of chatting
  handleStartButton(e) {
    this.setState({started:true});
    
    this.props.requestHandler({endpoint: '/start'}, (time) =>{
      console.log('WOOT THIS IS THE SERVER TIME', time);
    });

  }

  render() {
    if(this.state.started) {
      return (
        <div>
          Hello World Whats up Dog WOOOT
          <Nav makeSugg ={this.makeSuggestion.bind(this)}/>
          <SuggestionList suggs={this.state.suggList} />
        </div>
      );
    } else {
      return (
        <Start handleStartButton={this.handleStartButton.bind(this)} />
      );
    }


    // return (
    //   <div>
    //     <Start />
    //     Hello World Whats up Dog WOOOT
    //     <Nav makeSugg ={this.makeSuggestion.bind(this)}/>
    //     <SuggestionList suggs={this.state.suggList} />
    //   </div>  
    // );
  }
}