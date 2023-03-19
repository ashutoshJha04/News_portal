import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class Newscomp extends Component {
  static defaultProps = {
    category : 'general'
  }
  static propTypes = {
      category: PropTypes.string
  }
  articles = [
    {
      source: {
        id: null,
        name: "Finbold.com",
      },
      author: "Justinas Baltrusaitis",
      title:
        "$1,000 worth BTC bought after Matt Damon’s crypto ad is now worth only $375",
      description:
        "Investors who pumped money into Bitcoin in the wake of actor Matt Damon’s “Fortune favors the brave!” ads with Crypto.com... Continue reading \nThe post $1,000 worth BTC bought after Matt Damon’s crypto ad is now worth only $375 appeared first on Finbold.",
      url: "https://finbold.com/1000-worth-btc-bought-after-matt-damons-crypto-ad-is-now-worth-only-375/",
      urlToImage:
        "https://finbold.com/app/uploads/2022/06/1000-worth-BTC-bought-after-Matt-Damons-crypto-ad-is-now-worth-only-375.jpeg",
      publishedAt: "2022-06-14T13:34:50Z",
      content:
        "Investors who pumped money into Bitcoin in the wake of actor Matt Damon’s “Fortune favors the brave!” ads with Crypto.com have made significant losses.\r\nThe commercial debuted on October 28, 2021, at… [+2395 chars]",
    },
    {
      source: {
        id: null,
        name: "PRNewswire",
      },
      author: null,
      title:
        "Thinking about trading options or stock in Oracle, Tesla, Tractor Supply, Enphase Energy, or Baidu?",
      description:
        "NEW YORK, June 14, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for ORCL, TSLA, TSCO, ENPH, and BIDU. Click a link below then choose between in-depth options trade idea report or a stock score report. Options Report – Ideal trade i…",
      url: "https://www.prnewswire.com/news-releases/thinking-about-trading-options-or-stock-in-oracle-tesla-tractor-supply-enphase-energy-or-baidu-301567644.html",
      urlToImage:
        "https://mma.prnewswire.com/media/1333368/InvestorsObserver_Logo.jpg?p=facebook",
      publishedAt: "2022-06-14T13:31:00Z",
      content:
        "NEW YORK, June 14, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for ORCL, TSLA, TSCO, ENPH, and BIDU.\r\nClick a link below then choose between in-depth options trade idea r… [+800 chars]",
    }
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      Loading: false,
      page: 1
    };
  }
 

  async componentDidMount() {
    let trl =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fbd10fbb6e9457da6182ac68e9f2e3d&page=1&pageSize=${this.props.pageSize}`;
      { this.setState({Loading:true})}
    let data = await fetch(trl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      Loading:false
    });
  }
  prev = async()=>{
    let trl =
    `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fbd10fbb6e9457da6182ac68e9f2e3d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    { this.setState({Loading:true})}
  let data = await fetch(trl);
  let parsedData = await data.json();
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      Loading:false

    })

  }
  next =async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let trl =  `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fbd10fbb6e9457da6182ac68e9f2e3d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
   
     { this.setState({Loading:true})}
  let data = await fetch(trl);
  let parsedData = await data.json();
    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
      Loading:false

    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:'70px'}}>Gullu-News Top Headlines</h2>
        {this.state.Loading&&<Spinner/>}

        <div className="row">
          {!this.state.Loading && this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <Newsitem
                  className="center"
                  title={e.title}
                  description={e.description}
                  URL={e.urlToImage}
                  i={e.url}
                  author={e.author}
                  time={e.publishedAt}
                  badge={e.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.prev}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.next}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default Newscomp;
