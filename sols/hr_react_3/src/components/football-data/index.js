import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
const classNames = require('classnames');

// `https://jsonmock.hackerrank.com/api/football_competitions?year=<year>`


export default function FootballMatchesData() {

	const API_URL = 'https://jsonmock.hackerrank.com/api/football_competitions?year='

	// const searchGames = async(year) =>{
        
    // }
	let [selectedYear, setSelectedYear] = useState(null);
	let [selectedData, setData] = useState(null);

	let onclick = async (year) => {
		const response = await fetch(`${API_URL}${year}`)
        const data = await response.json()
        // console.log(data)
		setData(data.data)
		setSelectedYear(year);
		
	}

	// useEffect(()=>{
    //     onclick(null)
    // }, [])

	let years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

	return (
		<div className="layout-row">
			<div className="section-title">Select Year Total</div>
			<ul className="sidebar" data-testid="year-list">
				{years.map((year) => {
					return (
						<li className={
							classNames({
								'sidebar-item': true,
								'active': selectedYear === year
							})
						}
							onClick={()=> onclick(year)}
							key={year}>
							<a>{year}</a>
						</li>
					)
				})}
			</ul>

			<section className="content">
				<section>
				{
                selectedData?.length > 0
                ? (	
                    <div className="total-matches" data-testid="total-matches"> Total matches: {selectedData.length}</div>
					
					

                ) : (
                    <div data-testid="no-result">No Matches Found</div>
                )            
            	}
				{
                selectedData?.length > 0
                ? (<ul className="mr-20 matches styled" data-testid="match-list">
					{selectedData.map((match)=>(
						
                            
							<li key={match.name} className="slide-up-fade-in">Match {match.name} won by {match.winner} </li>
							
						
                        ))}
					</ul>

                ) : (
                    <ul ></ul>
                )            
            	}

					

					
				</section>

				
			</section>
		</div>
	);
}