import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import LoadingBar from 'react-top-loading-bar'
import Loader from './components/Loader';


export default class LandingPage extends Component {

  articles = []

  constructor(){
    super();
    this.state={
      articles : this.articles,
      loading : false,
      page : 1
    }
  }
  
  async componentDidMount(){
    this.setState({loading : true})
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4567751a0ef4ec5b55d09883a2a2088");
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults : parsedData.totalResults , loading : false})
  }
  
  render() {


    const handleNext = async () =>{
        
        this.setState({loading : true})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ae4be03f75c54112882a9ad366f7784b&page=${this.state.page + 1}&pageSize=8`);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page : this.state.page + 1,
          loading : false
        })
    }

    const handlePrev = async () =>{
      this.setState({loading : true})
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ae4be03f75c54112882a9ad366f7784b&page=${this.state.page - 1}&pageSize=8`);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page : this.state.page - 1,
        loading : false
      })
    }
    
    
    return (

      <div>
        <Navbar/>

        <LoadingBar
        color='#f11946'
        // progress={100}
        // onLoaderFinished={() => setProgress(0)}
      />

        <div className='container' style={{marginTop: '5rem'}}>

            <h1 className='text-center'> NewsRat - Top headlines</h1>

            {/* Loader */}

            {this.state.loading && <Loader/>}

            {/* Loader ends */}

            <div className='row'>

              {!this.state.loading && this.state.articles.map((element)=>{
                  return <Cards title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://images.mktw.net/im-886426/social"}></Cards>
              })}
              
            </div>
            <div className='btns my-3 d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={handlePrev}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/8)} type="button" className="btn btn-primary" onClick={handleNext}> Next &rarr;</button>
            </div>
        </div>

        
        
      </div>
    )
  }
}
