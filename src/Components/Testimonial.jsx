import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      title: "KH BATHROOM & KITCHEN RENOVATION",
      quote:
        "KH Bathroom and Kitchen Renovations handled my bathroom renovation with care and professionalism. I loved how they communicated everything clearly, making the project stress-free!",
      author: "Inside Out Joinery & Renovations",
    },
    {
      id: 2,
      title: "Excellent Service",
      quote:
        "The team was fantastic! They completed the work on time and exceeded our expectations. Highly recommended!",
      author: "John Doe, Happy Customer",
    },
    {
      id: 3,
      title: "Outstanding Experience",
      quote:
        "Their attention to detail and quality of work were exceptional. Would definitely hire them again!",
      author: "Jane Smith, Satisfied Client",
    },
  ];

  return (
    <div className="relative bg-cover bg-center bg-no-repeat  flex items-center justify-center text-white h-80" style={{ backgroundImage: "url('./review.jpg')" }}>
      <div className="absolute inset-0 bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Recent Reviews</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div>
                <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
                <blockquote className="italic text-sm mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button
          className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-50 transition"
          aria-label="Previous Slide"
        >
          
        </button>
        <button
          className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-50 transition"
          aria-label="Next Slide"
        >
          
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
