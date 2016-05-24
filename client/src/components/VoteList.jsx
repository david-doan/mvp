var VoteList = (props) => (
  <div>
    Voting Time
    {props.candidates.map( (entry, index) => 
      <SuggestionEntry key={index} entry = {entry} vote={props.vote} />
    )}
  </div>
);



window.VoteList = VoteList;
