var Coin = React.createClass({
	sides: [
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
	],
	getInitialState: function() {
		return{
			image: this.sides[0]
		}
	},
	flipCoin: function(){
		var newSide;
		let randomSide = Math.round(Math.random());
		if(randomSide == 0){
			newSide = this.sides[randomSide]
			console.log('tails')
		}else{
			newSide = this.sides[randomSide]
			console.log('heads')
		}
		this.setState({
			image: newSide
		})
	},
	render: function(){
		return(
			<div>
				<button style={{outline: 'none',padding: '30px',backgroundColor: 'darkseagreen', color: 'white', fontSize: '3em',borderRadius: '50% 0 50% 0', position: 'fixed', top: '50vh', left: '50vh'}} onClick={this.flipCoin}>Click to Flip</button>
				<img src={this.state.image} />
			</div>
		)	
	}
})

function Application(){
	return(
		<div>
			<Coin />
		</div>
	)
}


ReactDOM.render(
	<Application />,
	document.getElementById('root')
)