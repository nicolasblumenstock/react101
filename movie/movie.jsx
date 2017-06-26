function Poster(props){
	return(
		<div className='poster col-xs-6 col-md-4 col-lg-3'>
			<img src={props.image} />
		</div>
	)
}

var Application = React.createClass({
	getInitialState: function(){
		return {
		moviesToShow: []
		}
	},
	componentDidMount: function(){
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, function(movieData){
			console.log(movieData);
			var nowPlayingArray =  [];
			for(let i = 0; i < movieData.results.length; i++){
				nowPlayingArray.push(movieData.results[i]);
			}
			this.setState({
				moviesToShow: nowPlayingArray
			});

		}.bind(this));
	},
	render: function(){
		var imagePath = 'http://image.tmdb.org/t/p/w300'
		return(
		<div className='container'>
			<div className='row'>
				<div className='col-xs-12 text-center'>
					<h1 className='taco'>nobody expects the spanish inquisition</h1>
				</div>
				<div className='col-xs-12'>
					{this.state.moviesToShow.map((movie,index)=>{
						var moviePoster = imagePath + movie.poster_path
						return <Poster key={index} image={moviePoster}/>
					})}
				</div>
			</div>
		</div>
		)
	}
})


ReactDOM.render(
	<Application />,
	document.getElementById('root')
)