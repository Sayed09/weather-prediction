import React from "react";
const google = window.google = window.google ? window.google : {}


class SearchBar extends React.Component {
    
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {

	const searchbar = (
		<div>
			<input  className="form-control" ref={this.autocompleteInput} id="autocomplete" placeholder="Enter your address" type="text"></input>
		</div>
	);

	const notsearchbar = ( 
		<div>
		</div>
	);

    return (
		<div>
			{this.props.logged_in? notsearchbar : searchbar}          
		</div>
    );
  }

}

export default SearchBar;