'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const testimonials = [
  {
    name: "Chef Maria Rodriguez",
    location: "New York, NY",
    background: "Executive Chef, Michelin-starred restaurant",
    rating: 5,
    testimonial: "NutriDecode has revolutionized my menu planning. The real-time label scanning and quality assessment features ensure I'm always using the freshest, highest-quality ingredients. It's like having a sous chef dedicated to nutrition and sustainability!"
  },
  {
    name: "Dr. Alex Chen",
    location: "San Francisco, CA",
    background: "Registered Dietitian and Nutritionist",
    rating: 5,
    testimonial: "As a nutritionist, I'm impressed by the depth and accuracy of NutriDecode's analysis. It's an invaluable tool for educating my clients about their food choices and helping them make healthier decisions. The allergen detection feature is particularly crucial for my clients with dietary restrictions."
  },
  {
    name: "Sarah Thompson",
    location: "Chicago, IL",
    background: "Senior Food Safety Inspector",
    rating: 4,
    testimonial: "NutriDecode has become an essential tool in my inspections. The food authenticity feature has helped us identify and prevent several cases of food fraud. It's making a real difference in maintaining the integrity of our food supply chain."
  },
  {
    name: "Michael and Emily Johnson",
    location: "Boston, MA",
    background: "Parents of children with severe allergies",
    rating: 5,
    testimonial: "NutriDecode has been a game-changer for our family. The comprehensive allergen detection gives us peace of mind when shopping and dining out. It's like having a guardian angel watching over our children's meals."
  },
  {
    name: "Dr. Olivia Green",
    location: "Seattle, WA",
    background: "Environmental Consultant",
    rating: 5,
    testimonial: "The environmental impact feature of NutriDecode is groundbreaking. It's helping individuals and businesses make more sustainable food choices, which is crucial in our fight against climate change. This app is at the forefront of eco-conscious eating."
  },
  {
    name: "David Lee",
    location: "Los Angeles, CA",
    background: "Owner of a farm-to-table restaurant chain",
    rating: 4,
    testimonial: "NutriDecode's seasonal guide and environmental impact features have transformed how we source our ingredients. We've reduced our carbon footprint and food costs while offering fresher, more seasonal menus. Our customers love the transparency it provides."
  },
  {
    name: "Jessica Martinez",
    location: "Miami, FL",
    background: "Celebrity Fitness Trainer",
    rating: 5,
    testimonial: "I recommend NutriDecode to all my clients. The detailed nutritional breakdowns and quality assessments make it easy for them to stick to their meal plans. It's like having a nutritionist in your pocket!"
  },
  {
    name: "Ryan Kim",
    location: "Portland, OR",
    background: "Popular Food Blogger and Influencer",
    rating: 5,
    testimonial: "NutriDecode has added a new dimension to my content. The in-depth analysis it provides allows me to give my followers more valuable insights about the foods I review. It's become an indispensable tool for my work."
  },
  {
    name: "Dr. Amanda Foster",
    location: "Houston, TX",
    background: "Pediatrician specializing in childhood obesity",
    rating: 5,
    testimonial: "NutriDecode is a powerful ally in the fight against childhood obesity. It helps parents make informed decisions about their children's nutrition. The user-friendly interface makes it easy for families to adopt healthier eating habits."
  },
  {
    name: "Thomas Wright",
    location: "Denver, CO",
    background: "Sustainability Director for a major grocery chain",
    rating: 4,
    testimonial: "Implementing NutriDecode across our stores has significantly improved our sustainability metrics. Customers appreciate the transparency, and we've seen a shift towards more eco-friendly purchasing habits. It's a win-win for business and the environment."
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={`/placeholder.svg?height=60&width=60&text=${testimonial.name.charAt(0)}`}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-4 flex-grow">{testimonial.background}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
              onClick={() => swiperRef.current.slideTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

