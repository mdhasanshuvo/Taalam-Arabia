import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Ali Ibrahim',
      country: 'Egypt',
      feedback: 'Taalam Arabia has made learning Arabic easier than I ever imagined. The platform is so intuitive!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Sara Al-Mansoori',
      country: 'UAE',
      feedback: 'I love the daily vocabulary feature! It helps me learn Arabic in a manageable way.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Mohammed Khan',
      country: 'Pakistan',
      feedback: 'The lessons are really interactive, and the design is so clean and user-friendly.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Aisha Noor',
      country: 'Saudi Arabia',
      feedback: 'I can easily track my progress and feel motivated to continue learning. Great platform!',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Users Say</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
              <div className="bg-white h-[350px] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <div className="flex justify-center mb-6">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <p className="text-lg text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
            <p className='text-right p-2 font-semibold'>Slide for more</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
