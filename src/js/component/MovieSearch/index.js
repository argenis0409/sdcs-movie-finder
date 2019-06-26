import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStoreToProps(store) {
    return {
      inputValue: store.movieSearch.inputValue,
      searchResults: store.movieSearch.searchResults
    }
  }
  
  export default connect(mapStoreToProps)(MovieSearch);
