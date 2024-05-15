import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    // const sortbyVote  = (arr, type) =>{
    //     const sorter = (arr, type)=>{
    //         return arr.sort((a,b) =>{
    //             a = a[type]
    //             b= b[type]
    //             return b-a

    //         })
    //             }
    //             sorter(articles, type)
    //             setVoteSort(articles)
    // }

    // const sortbyDate  = (arr, type) =>{
    //     const sorter = (arr, type)=>{
    //         return arr.sort((a,b) =>{
    //             a = new Date(a[type])
    //             b= new Date(b[type])
    //             return b-a

    //         })
    //             }
    //             sorter(articles, type)
    //             setDateSort(articles)
    // }

    // const sortBy  = (arr, type) =>{
    //     const sorter = (arr, type)=>{

    //         if(type === 'date'){
    //             return arr.sort((a,b) =>{
    //                 a = new Date(a[type])
    //                 b= new Date(b[type])
    //                 return b-a
    
    //             })
    //         }else if(type === 'upvotes'){
    //             return arr.sort((a,b) =>{
    //                 a = a[type]
    //                 b= b[type]
    //                 return b-a
    
    //             })
    //         }
            
    //             }
    //             articles = sorter(articles, type)
    //             setSort(articles)
    // }


    // const [voteSort, setVoteSort] = useState(0);
    // const [dateSort, setDateSort] = useState(0);
    // const [sort, setSort] = useState(0);
    // useEffect(()=>{
    //     sortbyVote()
    // }, [])

    useEffect(() => {
        sortByUpvotes();

      }, []);
    
      const sortByUpvotes = () => {
        const newArticles = [...articles];
        newArticles.sort((a, b) => b.upvotes - a.upvotes);
        setSortedArticles(newArticles);
      };
    
      const sortByMostRecent = () => {
        const newArticles = [...articles];
        newArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedArticles(newArticles);
      };

    const [sortedArticles, setSortedArticles] = useState([]);

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={sortByUpvotes} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={sortByMostRecent} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
