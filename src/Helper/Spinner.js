import React, { Component } from 'react'


export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center '>
        <img className='my-3' src='./images/loading.gif' alt="" />
      </div>
    )
  }
}
