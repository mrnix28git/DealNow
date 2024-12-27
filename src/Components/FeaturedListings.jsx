import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      title: "Noon discount code 2025",
      address: "Lot el amane N 66",
      phone: "+212 657931503",
      description:
        "Noon is the renowned marketplace to purchase next-level fashion, lifestyle, and household essentials in UAE.",
    },
    {
      id: 2,
      image: "./banner.jpg",
      title: "HELLO HAIR MEN SALON",
      address: "16 AL YAQOUTAH ST, AYLA GRAND HOTEL, AL AIN, ABU DHABI",
      phone: "+971559002728",
      description:
        "Hello Hair Men Salon is a Top Quality Barber shop and Luxury Men Salon in Al Ain.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      title: "Reflections Russian Spa - Best Spa in Dubai",
      address: "Dubai Sports City",
      phone: "+971555587045",
      description:
        "Reflections Spa – Your Destination for the Best Massage in Dubai Located in Dubai Sports City.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100",
      title: "Elite Pool Inspections for Pool Safety Inspections",
      address: "88 Mary St Briabane Queensland",
      phone: "0438617917",
      description:
        "Elite Pool Inspections is a trusted provider of professional pool safety.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/100",
      title: "City Furniture Dubai",
      address: "Dubai Mall",
      phone: "+971567891234",
      description:
        "City Furniture Dubai provides modern and contemporary furniture for your living spaces.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/100",
      title: "Fresh Grocers UAE",
      address: "Al Barsha 1, Dubai",
      phone: "+97144567890",
      description:
        "Fresh Grocers UAE brings the best quality groceries right to your doorstep.",
    },
  ];

  return (
    <div className=" py-8 relative bg-[#E7E7E7]">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Listings</h2>
      <div className="px-28 py-5">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {listings.map((listing) => (
            <SwiperSlide key={listing.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border h-80 ">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{listing.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="block">📍 {listing.address}</span>
                    <span className="block">📞 {listing.phone}</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">{listing.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows
        <button
          className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
          aria-label="Next Slide"
        >
          ❯
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedListings;
