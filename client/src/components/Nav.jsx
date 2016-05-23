var Nav = (props) => (
  <nav className="navbar">
    <div>
      I am in Nav!
      <SuggestBox makeSugg={props.makeSugg} /> this is the SuggestBox
    </div>
  </nav>
);

window.Nav = Nav;
