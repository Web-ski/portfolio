import React from 'react';
import './SectionsStart.scss';
import Article from './Article';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
//import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Pagination]);

class SectionStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleOn: 0,
      btnOn: 0
    };
  }

  articleActive(number) {
    //console.log("gienek", number);
    this.setState({ btnOn: number })
    this.setState({ articleOn: number })
  }

  render() {
    const elem = this.props.elem;
    //console.log(this.props.themeDisplay)
    return (<section id={elem.id} className={elem.section}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        //width={100}
        //navigation
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
        //onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
      >
        {(elem.children !== undefined) && (
          (elem.children).map((item, index) => {
            if (item.article !== undefined) {
              return <SwiperSlide style={{width: "100%"}} key={'slide' + index}>
                <Article key={item.toString() + index}
                  elem={[item, "articleOn"]}
                   />
              </SwiperSlide>
            };
          })
        )}

      </Swiper>
    </section>)
  }
}

export default SectionStart;

// {(elem.children !== undefined) && (
//   (elem.children).map((item, index) => {
//     if (item.article !== undefined) 
//     { return <Article key={item.toString() + index} 
//     elem={[item, (this.state.articleOn === index ? "articleOn" : "")]} /> };
//   })
// )}
// <nav className="section-navigation">
//   {(elem.children !== undefined) && (
//     (elem.children).map((item, index) => {
//       if (item.article !== undefined) 
//       { return <button onClick={() => this.articleActive(index)}
//       key={item.toString() + index} 
//       className={"navigation__btn " + (this.state.btnOn === index ? "navigation__btn--active" : "")
//     }></button> };
//     })
//   )}
// </nav>