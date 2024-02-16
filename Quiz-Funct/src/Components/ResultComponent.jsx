import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
        <div className='resContainer'>
        <h1 className='resHeading'>Result</h1>
        <div className='resultBox'>
            <h2>You need more practice!</h2>
            <h1 className='score'>Your Score is 20%</h1>

            <div className='Result'>
                <div className='marks'>
                    <span>Total number of questions</span>
                    <span>15</span>
                </div>
                <div className='marks'>
                    <span>Number of attempted questions</span>
                    <span>5</span>
                </div>
                <div className='marks'>
                    <span>Number of correct answers</span>
                    <span>2</span> 
                </div>
                <div className='marks'>
                    <span>Number of wrong answers</span>
                    <span>3</span>
                </div>
            </div>
        </div>

        <div className='buttons'>
            <div className="playAgainBtn">Play Again</div>
            <div className="homeBtn">Back to Home</div>
        </div>

    </div>

    )
  }
}
