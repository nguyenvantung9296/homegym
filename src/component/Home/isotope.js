
import React, { Component } from 'react';
import './Isotope.css'
const imgs = [{ tag: "Phòng Tập", src: "https://citigym.com.vn/storage/uploads/rin-8058citigym-1.jpg" },
{  tag: "Thiết bị", src: "https://giadinh.mediacdn.vn/thumb_w/640/2019/5/11/photo-4-15575316354181716572387.jpg" },
{ tag: "Phòng Tập", src: "https://i.a4vn.com/2019/10/26/quynh-anh-shyn-dang-me-met-phuong-phap-tap-gym-moi-toanh-giup-dot-chay-1200-calories-trong-25-phut-65e922.jpg" },
{ tag: "Phòng Tập", src: "https://we25.vn/media/images/(((0/Ma%CC%A3c-Trung-Kie%CC%82n-Vu%CC%83-Tha%CC%81i-Hu%CC%9Bng-1024x684.jpg" },
{  tag: "Gym Couple", src: "https://vcdn-ngoisao.vnecdn.net/2019/05/10/1U6A5614-8000-1557462701.jpg" },
{ tag: "Thiết bị", src: "https://citigym.com.vn/storage/uploads/1-1-2-1.jpg" },
{  tag: "Thiết bị", src: "https://kenh14cdn.com/2018/8/22/hoatran-img4196-15348913641802044496950.jpg" },
{  tag: "Style Gym", src: "https://citigym.com.vn/storage/uploads/7-1.jpg" },
{ tag: "Phòng Tập", src: "https://i.a4vn.com/2019/10/26/quynh-anh-shyn-dang-me-met-phuong-phap-tap-gym-moi-toanh-giup-dot-chay-1200-calories-trong-25-phut-65e922.jpg" },
{ tag: "Phòng Tập", src: "https://citigym.com.vn/storage/uploads/citigym-1657-1.jpg" },
{  tag: "Gym Couple", src: "https://citigym.com.vn/storage/uploads/doi-ngu-hlv.jpg" },
{ tag: "Thiết bị", src: "https://vcdn-ngoisao.vnecdn.net/2019/05/10/1U6A5678-2931-1557462701.jpg" },
{  tag: "Thiết bị", src: "https://kenh14cdn.com/2018/8/22/hoatran-img4196-15348913641802044496950.jpg" }

];

const filters = [
  { name: "Phòng Tập", status: false },
  { name: "Thiết bị", status: false },
  { name: "Gym Couple", status: false },
  { name: "Style Gym", status: false }
];

const Filters = ({ onClickAll, all, onClick, filters }) =>
  <form className="form-filter">
    <ul className="ul ul-menu-isotope">
      <li className="li" onClick={onClickAll}>
        <input
          className="input-filter"
          type="checkbox"
          checked={all}
        />
        <label className="label" htmlFor="all">All</label>
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
  <ul className="ul ul-content wow bounceInUp">
    {imgs.map(
      (img, i) =>
        <li key={i}>
          <figure className="figure-filter">
            <img className="img-filter" src={img.src}/>
            <figcaption>

            </figcaption>
          </figure>
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

