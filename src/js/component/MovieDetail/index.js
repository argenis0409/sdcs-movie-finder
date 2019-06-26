import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function mapStoreToProps(store) {
    return {
      movieDetails: store.movieDetail.movieDetails
    };
  }
  
  export default connect(mapStoreToProps)(MovieDetail);