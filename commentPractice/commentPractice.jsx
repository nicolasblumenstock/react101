var date = new Date()
var today = date.toLocaleDateString()

var data = [
  {
      author:{
      avatarUrl: "https://png.icons8.com/color/1600/trinity",
      name:"tRiNiTy"
    },
    commentHeading: "@agent smith",
    text: "no u",
    date: "Now",
    userBadge: [ 
      'Dead'
    ]
  },
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/agent_smith-512.png",
      name:"Agent Smith"
    },
    commentHeading: "u gyus sux",
    text: "^",
    date: "Three Days Ago",
    userBadge: [ 
      'The Best',
      'Amazing',
      'Godly',
      'Spiffy Dresser'
    ]
  },  
]
function Badges(props){
  return(
    <div className='UserBadges col-sm-12'>
      {props.userBadge.map((badge,index)=>{
        return <div className='badge'>{badge}</div>
      })}
    </div>
  )
}

function Body(props){
  return(
    <div className="Comment-body col-sm-12">
      <h3>{props.commentHeading}</h3>
      <div className="Comment-date">
         {props.date}
      </div>      
      <div className="Comment-text">{props.text}</div>
    </div>
  )
}

function Avatar(props){
  return(
  <img className="Avatar"
    src={props.avatarUrl}
    alt={props.alt}
  />
  )
}

function UserInfo(props){
  return(
  <div className="UserInfo col-sm-1 col-sm-offset-4">
      <Avatar avatarUrl = {props.author.avatarUrl} alt = {props.author.name} />
      <div className="UserInfo-name">
       {props.author.name}
     </div>
  </div>
  )
}

function Comment(props) {
  return (
    <div className = 'row'>
      <UserInfo author = {props.data.author} />
      <div className='col-sm-3 blob'>
        <Body commentHeading = {props.data.commentHeading} text = {props.data.text} date = {props.data.date} />
        <Badges userBadge = {props.data.userBadge} />
       </div> 
    </div>
  );
}

function Application(props){
  var commentArray = []
  props.data.map((comment,index)=>{
    commentArray.push(<Comment key = {index} data = {comment} />)
  })
  return (
      <div className="Comment container">
        <h1 className='text-center'>Facebook or something</h1>
        {commentArray}
      </div>
  )
}


ReactDOM.render(
  <Application data = {data} />,
  document.getElementById('root')
)