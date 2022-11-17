import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState([
    //4 unique items, with 2 duplicates since each item needs to match with another
    { id: 1, img: "/assets/leia.jpg", status: "" },
    { id: 1, img: "/assets/leia.jpg", status: "" },
    { id: 2, img: "/assets/mj.jpg", status: "" },
    { id: 2, img: "/assets/mj.jpg", status: "" },
    { id: 3, img: "/assets/rick.jpg", status: "" },
    { id: 4, img: "/assets/rick.jpg", status: "" },
    { id: 4, img: "/assets/vegeta.jpg", status: "" },
    { id: 4, img: "/assets/vegeta.jpg", status: "" },
  ]);
  return (
    <div className="container">
      {items.map((item) => (
        //individual cards will be mapped through Card.js
        <Card />
      ))}
    </div>
  );
}

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
//           style={{
//             height: "100px",
//             width: "75px",
//             backgroundColor: "black",
//             borderStyle: "solid",
//             borderColor: "white",
//           }}
//           onClick={this.handleClick}
//         ></div>
//       );
//     }
//     return (
//       <div
//         style={{
//           height: "100px",
//           width: "75px",
//           backgroundColor: "white",
//           borderStyle: "solid",
//           borderColor: "black",
//         }}
//         onClick={this.handleClick}
//       >
//         {this.props.cardText}
//       </div>
//     );
//   }
// }

export default Cards;
