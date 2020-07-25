
import React, { Component } from 'react';
import Icon1 from '../img/icon1.svg'
import Icon2 from '../img/icon2.svg'
import Icon3 from '../img/icon3.svg'
import Icon4 from '../img/icon4.svg'
import Icon5 from '../img/icon5.svg'
import './Isotope_LostDate.css'
const imgs = [{ tag: "Thứ 3", time: "06AM-7AM",title: "CARDIO",name: "Minh Hồng" , src: 'https://image.flaticon.com/icons/svg/3043/3043206.svg' },
{  tag: "Thứ 3", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Minh Hồng" , src: 'https://image.flaticon.com/icons/svg/3043/3043210.svg'},
{ tag: "Thứ 3", time: "14PM-16PM",title: "YOGA",name: "Minh Hồng" , src: 'https://image.flaticon.com/icons/svg/3043/3043256.svg' },

{  tag: "Thứ 2", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Tung Nguyen" , src: Icon2 },
{ tag: "Thứ 2", time: "08AM-10AM",title: "YOGA",name: "Tung Nguyen" , src: Icon3 },
{  tag: "Thứ 2", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Tung Nguyen" , src: Icon2 },
{ tag: "Thứ 2", time: "08AM-10AM",title: "YOGA",name: "Tung Nguyen" , src: Icon3 },

{ tag: "Thứ 4", time: "08AM-10AM",title: "CARDIO",name: "Tung Nguyen" , src: Icon1 },
{  tag: "Thứ 4", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Tung Nguyen" , src: Icon2 },
{  tag: "Thứ 4", time: "08AM-10AM",title: "BODY BUILDING",name: "Tung Nguyen" , src: "https://image.flaticon.com/icons/svg/3043/3043192.svg" },


{ tag: "Thứ 5", time: "08AM-10AM",title: "CARDIO",name: "Adam Rose" , src: 'https://image.flaticon.com/icons/svg/3043/3043238.svg' },
{  tag: "Thứ 5", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Adam Rose" , src: 'https://image.flaticon.com/icons/svg/3043/3043190.svg' },
{ tag: "Thứ 5", time: "08AM-10AM",title: "YOGA",name: "Adam Rose" , src: 'https://image.flaticon.com/icons/svg/3043/3043256.svg' },



{  tag: "Thứ 6", time: "08AM-10AM",title: "AEROBICS & SKIPPING",name: "Adam Rose" , src: "https://image.flaticon.com/icons/svg/3043/3043270.svg" },
{  tag: "Thứ 6", time: "08AM-10AM",title: "BODY BUILDING",name: "Adam Rose" , src: "https://image.flaticon.com/icons/svg/3043/3043242.svg" },
{  tag: "Thứ 6", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Tung Nguyen" , src: Icon2 },
{ tag: "Thứ 6", time: "08AM-10AM",title: "YOGA",name: "Tung Nguyen" , src: Icon3 },



{  tag: "Thứ 7", time: "08AM-10AM",title: "WEIGHT LOOSE",name: "Tung Nguyen" , src: Icon2 },
{ tag: "Thứ 7", time: "08AM-10AM",title: "YOGA",name: "Tung Nguyen" , src: Icon3 },
{ tag: "Thứ 7", time: "08AM-10AM",title: "BOXING",name: "Adam Rose" , src: "https://image.flaticon.com/icons/svg/3043/3043216.svg" },
{  tag: "Thứ 7", time: "08AM-10AM",title: "AEROBICS & SKIPPING",name: "Adam Rose" , src: "https://image.flaticon.com/icons/svg/3043/3043270.svg" },
{  tag: "Thứ 7", time: "08AM-10AM",title: "BODY BUILDING",name: "Adam Rose" , src: "https://image.flaticon.com/icons/svg/3043/3043242.svg" },

];

const filters = [
  { name: "Thứ 2", status: false },
  { name: "Thứ 3", status: false },
  { name: "Thứ 4", status: false },
  { name: "Thứ 5", status: false },
  { name: "Thứ 6", status: false },
  { name: "Thứ 7", status: false }
];

const Filters = ({ onClickAll, all, onClick, filters }) =>
  <form className="form-filter">
    <ul className="ul ul-title">
      <li className="li" onClick={onClickAll}>
        <input
          className="input-filter"
          type="checkbox"
          checked={all}
        />
        <label className="label" htmlFor="all">Tất Cả</label>
      </li>
      {filters.map(
        (filter, i) =>
          <li className="li" key={i} data-index={i} onClick={onClick} >
            <input
              className="input-filter"
              id={filter.name}
              type="checkbox"
              checked={filter.status}
            />
            <label className="label" htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({ imgs }) =>
    <ul className="ul ul-content-date">
        {imgs.map(
            (img, i) =>
                <li className="li-isototpe-date" key={i}>
                    <div className="img-menu">
                        <img className="img-icon-date" src={img.src} alt="" />
                    </div>
                    <span className="time"> {img.time} </span>
                    <h4>{img.title} </h4>
                    <p> {img.name} </p>
                </li>)}
    </ul>
export default class isotope extends Component {
  state = {
    imgs,
    filters,
    all: true
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });

    this.updateFilters();
    this.updateImgs();
  }

  setAll = () => {
    const { filters } = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }

  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if ((img.tag == filter.name) && (filter.status == true)) {
          newImgs[a] = img;
          a++;
        }
      })
    });

    this.setState({
      imgs: newImgs
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all) ? (
          <Cards imgs={imgs} />
        ) : (
            <Cards imgs={this.state.imgs} />
          )}
      </div>
    );
  }
}

