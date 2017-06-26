var data = [
	{
		category: 'sporting goods',
		products: [
			{
				product: 'football',
				price: '$49.99'
			},
			{
				product: 'baseball',
				price: '$9.99'
			},
			{
				product: 'basketball',
				price: '$29.99'
			}						
		]
	},
	{
		category: 'electronics',
		products: [
			{
				product: 'ipod touch',
				price: '$99.99'
			},
			{
				product: 'iphone 5',
				price: '$399.99'
			},
			{
				product: 'nexus 7',
				price: '$199.99'
			}						
		]
	}
]

function ProductRow(props){
	return(
		<tr>
			<td>{props.prods.product}</td>
			<td>{props.prods.price}</td>
		</tr>
	)
}

function ProductCategoryRow(props){
	return(
		<tbody>
		<tr>
			<th>{props.data.category}</th>
		</tr>
		{props.data.products.map((prod,index)=>{
			var array = []
			array.push(<ProductRow prods = {prod} key = {index}/>)
			return array	
		})
		}
		</tbody>
		)
}

function ProductTable(props){
	return(
		<table className='table-condensed table-hover'>
			<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
			</thead>
			{props.data.map((prod,index)=>{
				var productArray = []
				productArray.push(<ProductCategoryRow data = {prod}/>)
				return productArray
			})}
		</table>
	)
}

function SearchBar(){
	return(
		<div className='search'>
			<form>
				<input className='searchbar' type='text' placeholder='Search' />
				<input type='checkbox' className='check'/> Only Show Products
			</form>	
		</div>
	)
}

function FilterableProductTable(props){
	return(
		<div className='productTable container'>
		<div className='row'>
		<div className='col-sm-3 col-sm-offset-4 table-contents'>
			<SearchBar />
			<ProductTable data = {props.data}/>
		</div>
		</div>
		</div>
	)
}

function Application(props){
	return(<FilterableProductTable data = {props.data}/>)
}

ReactDOM.render(
	<Application data = {data}/>,
	document.getElementById('root')
)