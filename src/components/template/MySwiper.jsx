import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySwiper({ projects }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="swiper-custom"
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 glassy-card backdrop-blur-md rounded-3xl p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-2xl w-full h-full object-cover shadow-md hover:scale-[1.02] transition duration-300"
              />
            </div>

            <div className="w-full md:w-1/2">
              <span className="bg-purple-600 text-white px-3 py-1 text-xs font-medium rounded-full inline-block mb-4 shadow-sm">
                {project.category || 'Project'}
              </span>

              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">
                {project.name}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-4 text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
  {project.techstack &&
    project.techstack.split(', ').map((tech, idx) => (
        <span
        key={idx}
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg hover:scale-105 transition-all duration-300 animate-glow"
      >
        {tech}
      </span>
      
    ))}
</div>


              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
