import React, { Component } from "react";
import {
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption,
} from "reactstrap";

const items = [
   {
      id: 1,
      src: require("../assets/slider/babiesboth.jpg"),
      altText: "Baby Burton and Munchkin",
      caption:
         "They were adopted together when they were 6 weeks. They cuddle and check each other all the time.",
   },
   {
      id: 2,
      src: require("../assets/slider/moose.jpg"),
      altText: "Moose the boss",
      caption:
         "He is the longest resident to the cafe. Although he is stubborn, he makes sure everyone gets fed.",
   },
   {
      id: 3,
      src: require("../assets/slider/cat_on_books.jpg"),
      altText: "Taro the bookwarm",
      caption: "He is super cuddley when someone is reading.",
   },
   {
      id: 4,
      src: require("../assets/slider/white_fur.jpg"),
      altText: "Michelle the welcome cat",
      caption:
         "She is bit shy, but pays attention to the outside and welcomes you for the visit.",
   },
   {
      id: 5,
      src: require("../assets/slider/taylor.jpg"),
      altText: "Taylor the olympian",
      caption:
         "He is quite a athlete treversing a cat tree to another cat tree. He patrols the lounge and looks for any treat.",
   },
   {
      id: 6,
      src: require("../assets/slider/dark_cat.jpg"),
      altText: "Shawn the healer",
      caption:
         "Shawn checks everyone is well. He has a power to heal a pain for his friends.",
   },
   {
      id: 7,
      src: require("../assets/slider/burton.jpg"),
      altText: "Curious Burton",
      caption: "He is always curious and eat things that he is not suppsed to.",
   },
   {
      id: 8,
      src: require("../assets/slider/munch.jpg"),
      altText: "Munchkin the princess",
      caption:
         "She is super shy, but show the friendliness when she feels like to.",
   },
];

class Slider2 extends Component {
   constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };

      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
   }

   onExiting() {
      this.animating = true;
   }

   onExited() {
      this.animating = false;
   }

   next() {
      if (this.animating) return;
      const nextIndex =
         this.state.activeIndex === items.length - 1
            ? 0
            : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
   }

   previous() {
      if (this.animating) return;
      const nextIndex =
         this.state.activeIndex === 0
            ? items.length - 1
            : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
   }

   goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
   }

   render() {
      const { activeIndex } = this.state;

      const slides = items.map((item) => {
         return (
            <CarouselItem
               className="carousel-item"
               tag="div"
               key={item.key}
               onExiting={this.onExiting}
               onExited={this.onExited}
            >
               <img src={item.src} alt={item.altText} />
               <CarouselCaption
                  className="carousel-caption"
                  captionHeader={item.altText}
                  captionText={item.caption}
               />
            </CarouselItem>
         );
      });

      return (
         <div classsName="container">
            <div className="row row-content">
               <div className="col-md-8 mx-auto">
                  <Carousel
                     activeIndex={activeIndex}
                     next={this.next}
                     previous={this.previous}
                     interval={false}
                  >
                     <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={this.goToIndex}
                     />
                     {slides}
                     <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                     />
                     <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                     />
                  </Carousel>
               </div>
            </div>
         </div>
      );
   }
}

export default Slider2;
