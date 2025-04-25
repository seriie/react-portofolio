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
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white rounded-xl p-2 shadow-lg">
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <span className="bg-gray-800 text-white px-3 py-1 text-sm rounded-full inline-block mb-4">
                {project.category || 'Project'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techstack &&
                  project.techstack.split(', ').map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-400 text-xs font-semibold text-gray-900 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <a
                href={project.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
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
