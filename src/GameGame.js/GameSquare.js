import React from 'react';
// class Square extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
    function Square(props) {
      return (
        <button className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
  // ========================================
  export default Square
