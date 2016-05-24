var VoteList = (props) => (
  <div>
    Voting Time
    {props.suggs.map( (entry, index) => 
      <SuggestionEntry key={index} entry = {entry} />
    )}
  </div>
);



window.VoteList = VoteList;
