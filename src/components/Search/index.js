import React, { Component } from 'react';
import "./styles.css";
import api from '../../services/api';

export default class Search extends Component {

	state = {
		products: [],
		name: '',
	}

	changeQuery = (e) => {
		this.setState({
			name: e.target.value,
		});
	}

	loadProducts = async (e) => {
		e.preventDefault();

		const text = this.state.name;
		if ( text.length >= 3 ) {
			const response = await api.get(`/autocomplete/${text}`);
			const { items } = response.data;
			this.setState({
				products: items,
			})
		} else {
			this.setState({
				products: [],
			})
		}
	}

	render() {
		const { products, name } = this.state;

		return (
			<form id="autocompletar" action="/busca" method="get">

					{/* INPUT */}

				<div className="inputg">
					<input type="text" value={name} onChange={this.changeQuery} placeholder="Busque por produtos" />
					<button type="submit" onClick={this.loadProducts} className="btnbuscar">Buscar</button>

					{/* LISTA */}

					<ul className="listacamisas">
						
						{products.map(p => (
							
							<li key={p.map.id}>

								{/* URL API */}

								<a href={`https://mystique-v2-americanas.juno.b2w.io/${p.map.uri}`}>
									<span className="imagemprod">
										<img data-value="itemimage" src={`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook${p.map['images.url'][0]}`} />
									</span>
									<span className="info">
										
                                        <span className="nomeprod">
											{p.map.name}
										</span>

										<span className="custo">
											{(p.map.salePrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
										</span>

									</span>
								</a>
							</li>
						))}
					</ul>				
				</div>
			</form>
		);
	}

}