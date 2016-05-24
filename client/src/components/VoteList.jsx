var VoteList = (props) => (
  <div>
    Voting Time
    {props.candidates.map( (entry, index) => 
      <SuggestionEntry key={index} entry = {entry} />
    )}
  </div>
);



window.VoteList = VoteList;
