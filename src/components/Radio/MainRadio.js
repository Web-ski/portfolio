import React from 'react';
import './Radios.scss';

class MainRadio extends React.Component {
	constructor(props) {
		super(props);
		this.state = { radioOn: "" }
	}

	componentDidMount() {
		let startView = document.querySelector(".start-header").offsetHeight;
		let sections = document.querySelectorAll(".section");
		let prevSectionHeight = 0;
		let thisSectionHeight = 0;
		Array.from(sections).map((item, index) => {
			if (item.getAttribute('id') === this.props.elem.id) {
				(index > 0 && (prevSectionHeight = sections[index - 1].offsetHeight * index));
				thisSectionHeight = sections[index].offsetHeight;
			}
		}
		)
		//console.log(sectionView.id)
		window.addEventListener('scroll', () => this.handleScroll(startView + prevSectionHeight, thisSectionHeight));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.handleScroll());
	}

	handleScroll(distance, sectionHeight) {
		let active = "radio__elem--active";
		let newDistance = distance - 50;
		if ((window.scrollY > newDistance) && (window.scrollY < (newDistance + sectionHeight))) {
			(this.state.radioOn !== active && this.setState({ radioOn: active }))
		} else {
			(this.state.radioOn === active && this.setState({ radioOn: "" }))
		}
	}


	render() {
		const elem = this.props.elem;
		//console.log(elem)
		return <a className={"radio__elem " + this.state.radioOn} href={`#${elem.id}`}></a>
	}
}

export default MainRadio;