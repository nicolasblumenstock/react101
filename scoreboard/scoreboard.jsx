var teams = [
	{
		name: 'Braves',
		gamesBack: 0,
		city: 'Atlanta'
	},
	{
		name: 'Nationals',
		gamesBack: 0,
		city: 'Washington D.C.'
	},
	{
		name: 'Phillies',
		gamesBack: 0,
		city: 'Philadelphia'
	},
	{
		name: 'Marlins',
		gamesBack: 0,
		city: 'Miami'
	},
	{
		name: 'Mets',
		gamesBack: 0,
		city: 'New York'
	}
	]

function Header(props){
	return(
		<div className='header'>
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="row">
			<div className='col-sm-8 col-sm-offset-2 teams'>
				<div className='team-name col-sm-12'>
					<div className='col-sm-6 team-name'>{props.name}</div>
					<div className='col-sm-6 team-city'>{props.city}</div>
				</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

var Counter = React.createClass({
	getInitialState: function(){
		var stateObject = {
			gamesBack: 0
		}
		return stateObject
	},
	addGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack+1
		})
	},
	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack-1
		})
	},
	render: function(){
		return(
			<div className='counter'>
				<button onClick={this.addGame} className='btn btn-info'>+</button>
				<div className='team-gamesBack'>{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className='btn btn-warning'>-</button>
			</div>
		)
	}
})


function Application(props){
	return(
		<div className="container">
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}


ReactDOM.render(
	<Application title='Braves Scoreboard' teams={teams}/>,
	document.getElementById('root')
)