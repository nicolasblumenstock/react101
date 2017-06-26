var data = [
	{
		category: 'Sporting Goods',	
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	// {
	// 	category: 'Junk',	
	// 	price: '$49.99',
	// 	name: 'Football',
	// 	inStock: true
	// },	
	{
		category: 'Sporting Goods',	
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',	
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',	
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',	
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function ProductRow(props){
	var productClass = ''
	if(props.prods.inStock == true){
		productClass = 'available'
	}else{
		productClass = 'unavailable'
	}
	return(
		<tr className={productClass}>
			<td>{props.prods.name}</td>
			<td>{props.prods.price}</td>
		</tr>
	)
}

function ProductCategoryRow(props){
	return(
		<tr>
			<th>{props.data.category}</th>
		</tr>
	)
}

function ProductTable(props){
	var productArray = []
	var lastCategory = ''
	var key = 0	
	props.data.map((prod,index)=>{
		if (prod.category !== lastCategory){
			productArray.push(<ProductCategoryRow key = {key} data = {prod}/>)
			lastCategory = prod.category
			key++
		}
		productArray.push(<ProductRow key={key} prods={prod}/>)
		key++
	})
	return(
		<table className='table-condensed table-hover'>
			<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
			</thead>
			<tbody>
				{productArray}
			</tbody>
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


ReactDOM.render(
	<FilterableProductTable data = {data}/>,
	document.getElementById('root')
)