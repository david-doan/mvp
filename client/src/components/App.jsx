class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room:1,
      suggList: [],
      started: false,
      suggTimer: 10,
      suggLimit: 10,
      serverTime: Infinity,
      socket: undefined
    };

    socket.on('hi', (data) => {console.log(data);});

    socket.on('begin', (data) =>{
      console.log(data);
      this.setState({started: true});

      setTimeout( ()=> {
        console.log("It has been '10 setTimeout secs' but really it has been:", (Date.now() - this.state.serverTime)/1000 );
        
        var suggList = this.state.suggList;
        socket.emit('endSugg', suggList);

      }, this.state.suggTimer * 1000);

    });
  }

  handleRoom(e) {
    var room = e.target.value;
    socket.emit('roomChange', room);
    this.setState({room:e.target.value});
  }

  joinRoom(e) {
    e.preventDefault();
    var room = this.state.room;
    socket.emit('roomChange', room);
  }

  // updates App state with suggestion
  makeSuggestion(txt) {
    var newList = this.state.suggList;
    if(newList.length === this.state.suggLimit){
      newList.shift();
    }
    newList.push(txt);
    this.setState({suggList: newList});
  }

  //makes post request to server to start instance of chatting
  handleStartButton(e) {
    socket.emit('start', true);

    //render nextPage
    this.setState({started:true});
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
        <Start handleStartButton={this.handleStartButton.bind(this)} handleRoom={this.handleRoom.bind(this)} joinRoom={this.joinRoom.bind(this)} />
      );
    }
  }
}