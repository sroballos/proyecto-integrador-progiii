//import {options} from '../options'
import MovieDetailInfo from '../components/MovieDetailInfo/MovieDetailInfo';


const MovieDetail = (props) => {
    return (
        <>
            <MovieDetailInfo id={props.match.params.id}/> 

        </>
    );
  }
  
  export default MovieDetail;