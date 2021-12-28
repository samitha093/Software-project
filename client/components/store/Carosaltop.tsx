import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
interface CarosaltopProps {
}

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Carosaltop: React.FC<CarosaltopProps> = ({}) => {
  const [Ticketimg, setTicketimg] =  React.useState("");
  const [swiperRef, setSwiperRef] = React.useState(null);
  const [cards, setcards] = React.useState(3);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
        
  React.useEffect(()=>{
    setTicketimg(`url("https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg")`);
    if (process.browser) {
       if(window.innerWidth < 500){
        setcards(1);
       }
    }
    
  },[])
        return (
            <div className='top-events'>
                <Swiper onSwiper={setSwiperRef}  loop={true} loopFillGroupWithBlank={true} slidesPerView={cards} centeredSlides={true} spaceBetween={30} autoplay={{"delay": 5000, "disableOnInteraction": false}} pagination={{
                "type": "fraction",
                "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <div style={{backgroundImage: Ticketimg}} className='swiper-card-design'>
                            <div className="buyer-c-ticketunvalid-top-info">
                                <div className="buyer-c-ticketunvalid-top-info-left">
                                    <div className="buyer-c-ticketunvalid-top-info-left-name">
                                        Event name
                                    </div>
                                    <div className="buyer-c-ticketunvalid-top-info-left-date">
                                        2021-08-23
                                    </div>
                                </div>
                                <div className="buyer-c-ticketunvalid-top-info-right">
                                    <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">3200</div>
                                    <div className="buyer-c-ticketunvalid-top-info-right-tickets">LKR</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{backgroundImage: Ticketimg}} className='swiper-card-design'>
                            <div className="buyer-c-ticketunvalid-top-info">
                                <div className="buyer-c-ticketunvalid-top-info-left">
                                    <div className="buyer-c-ticketunvalid-top-info-left-name">
                                        Event name
                                    </div>
                                    <div className="buyer-c-ticketunvalid-top-info-left-date">
                                        2021-08-23
                                    </div>
                                </div>
                                <div className="buyer-c-ticketunvalid-top-info-right">
                                    <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">3200</div>
                                    <div className="buyer-c-ticketunvalid-top-info-right-tickets">LKR</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{backgroundImage: Ticketimg}} className='swiper-card-design'>
                            <div className="buyer-c-ticketunvalid-top-info">
                                <div className="buyer-c-ticketunvalid-top-info-left">
                                    <div className="buyer-c-ticketunvalid-top-info-left-name">
                                        Event name
                                    </div>
                                    <div className="buyer-c-ticketunvalid-top-info-left-date">
                                        2021-08-23
                                    </div>
                                </div>
                                <div className="buyer-c-ticketunvalid-top-info-right">
                                    <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">3200</div>
                                    <div className="buyer-c-ticketunvalid-top-info-right-tickets">LKR</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{backgroundImage: Ticketimg}} className='swiper-card-design'>
                            <div className="buyer-c-ticketunvalid-top-info">
                                <div className="buyer-c-ticketunvalid-top-info-left">
                                    <div className="buyer-c-ticketunvalid-top-info-left-name">
                                        Event name
                                    </div>
                                    <div className="buyer-c-ticketunvalid-top-info-left-date">
                                        2021-08-23
                                    </div>
                                </div>
                                <div className="buyer-c-ticketunvalid-top-info-right">
                                    <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">3200</div>
                                    <div className="buyer-c-ticketunvalid-top-info-right-tickets">LKR</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div style={{backgroundImage: Ticketimg}} className='swiper-card-design'>
                            <div className="buyer-c-ticketunvalid-top-info">
                                <div className="buyer-c-ticketunvalid-top-info-left">
                                    <div className="buyer-c-ticketunvalid-top-info-left-name">
                                        Event name
                                    </div>
                                    <div className="buyer-c-ticketunvalid-top-info-left-date">
                                        2021-08-23
                                    </div>
                                </div>
                                <div className="buyer-c-ticketunvalid-top-info-right">
                                    <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">3200</div>
                                    <div className="buyer-c-ticketunvalid-top-info-right-tickets">LKR</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        );
}

export default Carosaltop;