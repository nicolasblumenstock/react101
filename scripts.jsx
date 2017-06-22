// ++++ ReactDom is available because we included react-dom.js ++++
// ++++ the .render function needs React and takes 2 arguments ++++
// ++++ the component to render and where to render it ++++
// ++++ when ReactDom.render runs it will OWN that element ++++

// ++++ our first component ++++
function Application(){
	return(
		<div id='parent'>
			<div class='sibling'>
				<Message name='Lionel'/>
			</div>
			<div class='sibling'>
				<h2>is it me you're looking for</h2>
			</div>
			<div class='sibling'>
				<h3>i can see it in your eyes</h3>
			</div>
			<div class='sibling'>
				<h4>i can see it in your smile</h4>
			</div>
		</div>
		)
}

function Message(props){
	return(
		<div>
			<h1>hello {props.name}</h1>
		</div>
		)
}


ReactDOM.render(
	<Application />,
	document.getElementById('container')
	)