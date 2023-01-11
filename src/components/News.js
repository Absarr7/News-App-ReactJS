import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';

export class news extends Component {

  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 12
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
    document.title = `Faithful Rumours | ${this.capitalizeFirstLetter(this.props.category)}`;
  }

async updateNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=245f49689f7e4dd2bc78159bed8e1091&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
}

  async componentDidMount() {
    this.updateNews();
  }

  onprevpage = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  onnextpage = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    return (
      <div>
        <div className="container my-5">
          <h3
            className={`text-${
              this.props.mode === "dark" ? "light" : "dark"
            } text-center my-4`}
          >
            Top headlines - see what's really happening in {this.props.category}
            .
          </h3>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 65) : "..."}
                      description={
                        element.description?element.description.slice(0, 90):"..."
                      }
                      ImageURL={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3 ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      }
                      newsurl={element.url}
                      author={
                        !element.author
                          ? "unknown"
                          : element.author
                      }
                      date={
                        element.publishedAt
                      }

                      source={
                        element.source.name
                      }
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between my-5">
            <button
              className="btn btn-primary"
              disabled={this.state.page <= 1}
              onClick={this.onprevpage}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-primary"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.onnextpage}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default news;
