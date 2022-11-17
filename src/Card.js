function Card(item) {
  return (
    <div className="card">
      <img src={item.img} alt="" />
    </div>
  );
}

export default Card;

// class example code
// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isFlipped: false };
//   }

//   handleClick = () => {
//     this.setState((state) => ({ isFlipped: !state.isFlipped }));
//   };

//   render() {
//     if (this.state.isFlipped === false) {
//       return (
//         <div
//           onClick={this.handleClick}
//         ></div>
//       );
//     }
//     return (
//       <div
//         onClick={this.handleClick}
//       >
//         {this.props.cardText}
//       </div>
//     );
//   }
// }
