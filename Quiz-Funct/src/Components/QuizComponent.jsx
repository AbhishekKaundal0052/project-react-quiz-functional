import React, { Component } from 'react'
import Data from "../resources/quizQuestion.json"

export default class QuizComponent extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  clickPrev = () => {
    let ques = this.state.count == 0 ? Data.length - 1 : this.state.count - 1
    this.setState({
      count : ques
    })
  }

  clickNext = () => {
    let ques = this.state.count == Data.length - 1 ? 0 : this.state.count + 1
    this.setState({
      count : ques
    })
  }

  clickQuit = () => {
    window.confirm("Are you sure that you want to quit ?")
  }

  render() {
    return (
      <div id='queContainer'>
        <div className='ques'>
        <div><h1>Question</h1></div>
        <div className='no'>
          <span>{this.state.count + 1} </span>
          of <span>{Data.length}</span>
        </div>
        <div className='ques'>{Data[this.state.count].question}</div>
        <div className="options">
          <div className="option">{Data[this.state.count].optionA}</div>
          <div className="option">{Data[this.state.count].optionB}</div>
          <div className="option">{Data[this.state.count].optionC}</div>
          <div className="option">{Data[this.state.count].optionD}</div>
        </div>
        <div className="buttons">
          <div className="previousBtn" onClick={this.clickPrev}>Previous</div>
          <div className="nextBtn" onClick={this.clickNext}>Next</div>
          <div className="quitBtn" onClick={this.clickQuit}>Quit</div>
        </div>
        </div>
      </div>
    )
  }
}