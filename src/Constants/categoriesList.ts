interface CategoriesItens {
	_id: number
	img: string
	text: string
	type: string
}

export const categoriesList: CategoriesItens[] = [
	{
		_id: 0,
		text: 'Roupas Femininas',
		img: 'https://i0.wp.com/lojapkd.com.br/wp-content/uploads/2021/12/roupa-feminina-moda-pkd-varejo-confortavel-conjunto-estilosa-jeans-site-201.jpg?fit=771%2C1080&ssl=1',
		type: 'women\'s clothing',
	},
	{
		_id: 1,
		text: 'Roupas Masculinas',
		img: 'https://i.pinimg.com/564x/48/92/4d/48924da959fadbb0608dd292a6e9a533.jpg',
		type: 'men\'s clothing',
	},
	{
		_id: 2,
		text: 'Joias',
		img: 'https://img.elo7.com.br/product/original/35ED33D/kit-4-pulseiras-feminina-folheada-a-ouro-semi-joias-kit-4-pulseiras-feminina-folheada-a-ouro-semi-jo.jpg',
		type: 'jewelery',
	},
	{
		_id: 3,
		text: 'Eletrônicos',
		img: 'https://www.lojasolar.com.br/custom/content/themes/lojassolar/imagens/SEO/eletronicos-1.jpg',
		type: 'electronics',
	},
]
