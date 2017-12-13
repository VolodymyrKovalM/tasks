import React, { Component } from 'react';
import Preloader from './Preloader';
import Films from './Films';

import avatar from '../img/avatar.jpg';
import './styles.scss';

class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
			films: null,
			isLoading: true,
			IsFilmsDataReady: false,
		};

		this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
		this.onNextButtonClick = this.onNextButtonClick.bind(this);
		this.fetchFilmsData = this.fetchFilmsData.bind(this);
	}

	async componentWillMount() {
		const pageData = await fetch('https://swapi.co/api/people/').then(res => res.json());

		this.setState({
			data: pageData,
			herosInCurrentPage: pageData.results,
			currentIndex: 0,
			isLoading: false,
		});

		this.setFilmsData();
	}

	async onPrevButtonClick() {
		const { state } = this;

		this.setState({
			IsFilmsDataReady: false,
		});

		if (state.currentIndex === 0 && state.data.previous) {
			this.setState({
				isLoading: true,
			});

			const previousPageData = await fetch(state.data.previous).then(res => res.json())
				.catch(err => { alert(err) });

			this.setState({
				data: previousPageData,
				herosInCurrentPage: previousPageData.results,
				currentIndex: previousPageData.results.length - 1,
				isLoading: false,
			});
		} else {
			this.setState(prevState => {
				const nextIndex = prevState.currentIndex - 1;

				return {
					currentIndex: nextIndex,
				};
			});
		}

		this.setFilmsData();
	}

	async onNextButtonClick() {
		const { state } = this;

		this.setState({
			IsFilmsDataReady: false,
		});

		if (state.currentIndex === state.herosInCurrentPage.length - 1) {
			this.setState({
				isLoading: true,
			});

			const nextPageData = await fetch(state.data.next).then(res => res.json())
				.catch(err => { alert(err) });
			this.setState({
				data: nextPageData,
				herosInCurrentPage: nextPageData.results,
				currentIndex: 0,
				isLoading: false,
			});
		} else {
			this.setState(prevState => {
				const nextIndex = prevState.currentIndex + 1;

				return {
					currentIndex: nextIndex,
				};
			});
		}

		this.setFilmsData();
	}

	async setFilmsData() {
		const filmsData = await this.fetchFilmsData();

		this.setState({
			films: filmsData,
			IsFilmsDataReady: true,
		});
	}

	async fetchFilmsData() {
		const { state } = this;
		const filmsUrls = state.herosInCurrentPage[state.currentIndex].films;
		const promises = filmsUrls.map(url => fetch(url));

		const responses = await Promise.all(promises);
		const resolved = await Promise.all(responses).then(resp => resp.map(res => res.json()));
		const result = await Promise.all(resolved).then(filmData => filmData);

		return result;
	}

	render() {
		const { state } = this;
		if (state.isLoading) {
			return <Preloader className="overlay" />;
		}

		const index = state.currentIndex;
		const hero = state.herosInCurrentPage[index];

		return (
			<div className="info-container">
				<h1 className="info-title">Star Wars Heroes</h1>
				<div className="hero-info">
					<div>
						<img className="hero-avatar" src={avatar} alt="Avatar" />
						<div className="control-buttons">
							<button
								onClick={this.onPrevButtonClick}
								disabled={index === 0 && !state.data.previous}
							>
								Prev
							</button>
							<button
								onClick={this.onNextButtonClick}
								disabled={index === state.herosInCurrentPage.length - 1 && !state.data.next}
							>
								Next
							</button>
						</div>
					</div>
					<div>
						<span className="info-cell">Name: {hero.name}</span>
						<span className="info-cell">Height: {hero.height / 100} m</span>
						<span className="info-cell">Mass: {hero.mass} kg</span>
						<span className="info-cell">Hair Color: {hero.hair_color}</span>
						<span className="info-cell">Skin Color: {hero.skin_color}</span>
						<span className="info-cell">Eye Color: {hero.eye_color}</span>
						<span className="info-cell">Birth Year: {hero.birth_year}</span>
						<span className="info-cell">Gender: {hero.gender}</span>
					</div>
					{state.IsFilmsDataReady ? <Films films={state.films} /> : <Preloader className="overlay small-preloader" />}
				</div>
			</div>
		);
	}
}

export default App;
