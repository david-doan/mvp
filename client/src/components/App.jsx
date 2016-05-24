class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggList: [],
      started: false,
      suggTimer: 10,
      serverTime: Infinity
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
    var options = {
      endpoint: '/start',
      method: 'GET'
    };
    this.props.requestHandler(options, (data) =>{
      console.log('WOOT THIS IS THE SERVER TIME', data.data);
      this.setState({serverTime:data.data});
    });

    setTimeout( ()=> {
      console.log("It has been '10 setTimeout secs' but really it has been:", (Date.now() - this.state.serverTime)/1000 );
      var options = {
        endpoint: '/start',
        method: 'POST'
      };
      
      this.props.requestHandler(options, () => {console.log("HOLY SHIT SUCCESSFUL POST REQUEST");});

    },10000);
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