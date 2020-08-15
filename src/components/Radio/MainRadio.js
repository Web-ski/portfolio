import React from 'react';
import './Radios.scss';

class MainRadio extends React.Component {
	constructor(props) {
		super(props);
		this.state = { radioOn: "" }
	}

	componentDidMount() {
    let startView = document.querySelector(".start-header");
    let sections = Array.from(document.querySelectorAll(".section"));
    let distance = 0;
    let startViewHeight = startView.offsetHeight;
		let sectionsHeight = [startViewHeight];
		let thisSectionHeight = 0;
    sections.map((item, index) => (sectionsHeight.push(item.offsetHeight)));
    sections.map((item, index) => {
      item.getAttribute('id') === this.props.elem.id && (
				sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && 
				((distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; })) &&
				(thisSectionHeight = sections[index].offsetHeight)
				)
      ) //połączyć długości do bieżącej sekcji 
    }
    )
    window.addEventListener('resize', () => {
      let startViewHeight = startView.offsetHeight;
      let sectionsHeight = [startViewHeight];
      sections.map((item, index) => (sectionsHeight.push(item.offsetHeight)));
			sections.map((item, index) => {
				item.getAttribute('id') === this.props.elem.id && (
					sectionsHeight.splice(index + 1, (sectionsHeight.length - (index + 1))) && 
					((distance = sectionsHeight.reduce(function (total, nmbr) { return total + nmbr; })) &&
					(thisSectionHeight = sections[index].offsetHeight)
					)
				) //połączyć długości do bieżącej sekcji 
			}
      )
      console.log("M" + distance);
      this.handleScroll(distance);
    });

		window.addEventListener('scroll', () => this.handleScroll(distance, thisSectionHeight));
	}

	componentWillUnmount() {
		//window.removeEventListener('resize', () => {});
		window.removeEventListener('scroll', () => this.handleScroll());
	}

	handleScroll(distance, sectionHeight) {
		let active = "radio__elem--active";
		let newDistance = distance - 10;
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