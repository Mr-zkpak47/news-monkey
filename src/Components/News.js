import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

export class New extends Component {
  static defaultProps = {
    country: "un",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  articles = [];
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    /* console.log("Prev Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d160dba32e4157993fbbdfafefec61&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
    this.page = 2;
    console.log(this.page); */
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    /*  console.log("Next Clicked");
    if (!this.state.page + 1 > Math.ceil(this.state.totalResults / 17)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d160dba32e4157993fbbdfafefec61&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      console.log(url);
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({ loading: false });
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    } */
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d160dba32e4157993fbbdfafefec61&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4 my-3">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 58) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 17)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default New;
