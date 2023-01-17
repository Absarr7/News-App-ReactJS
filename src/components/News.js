import React, {useEffect, useState} from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=> {
    props.setProgress(5)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=245f49689f7e4dd2bc78159bed8e1091&pageSize=${props.pageSize}&category=${props.category}&page=${page}&q=`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews();
    document.title = `Faithful Rumours | ${capitalizeFirstLetter(props.category)}`;
  }, [])


  const fetchMoreData = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=245f49689f7e4dd2bc78159bed8e1091&pageSize=${props.pageSize}&category=${props.category}&page=${page + 1}&q=`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };


    return (
      <>
          <h3
            className={`text-${props.mode === "dark" ? "light" : "dark"} text-center`} style={{'marginTop': '100px', "fontSize": '2.1rem', 'fontWeight': '600'}}
          >
            top Headlines in {props.category}
            .
          </h3>
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}>

          <div className="container">
          <div className="row">
            {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 65) : "..."}
                      description={
                        element.description ? element.description.slice(0, 90) : "..."
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
                          : element.author.slice(0, 20)
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
          </div>
          </InfiniteScroll>
      </>
    );
  }
  News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 12
  }
  
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default News;
