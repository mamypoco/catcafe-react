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
      src: "/assets/slider/babiesboth.jpb",
      altText: "Baby Burton and Munchkin",
      caption:
         "They were adopted together when they were 6 weeks. They cuddle and check each other all the time.",
   },
   {
      src: "/assets/slider/moose.jpg",
      altText: "Moose the boss",
      caption:
         "He is the longest resident to the cafe. Although he is stubborn, he makes sure everyone gets fed.",
   },
   {
      src: "/assets/slider/cat_on_books.jpg",
      altText: "Taro the bookwarm",
      caption: "He is super cuddley when someone is reading.",
   },
];

class Slider extends Component {
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
               onExiting={this.onExiting}
               onExited={this.onExited}
               key={item.src}
            >
               <img src={item.src} alt={item.altText} />
               <CarouselCaption
                  captionText={item.caption}
                  captionHeader={item.caption}
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
                  >
                     <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={this.goToIndex}
                     />
                     {slides}
                     <CarouselControl
                        direction="prev"
                        directionText="previous"
                        onClickHandle={this.previous}
                     />
                     <CarouselControl
                        direction="next"
                        directionText="next"
                        onClickHandler={this.next}
                     />
                  </Carousel>
               </div>
            </div>
         </div>
      );
   }
}

export default Slider;
