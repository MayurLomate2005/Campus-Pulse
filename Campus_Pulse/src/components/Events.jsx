import { useState } from "react";
import { motion } from "framer-motion";

// Dummy event data
const events = [
  {
    id: 1,
    title: "TechTalk: AI in 2025",
    club: "CodeGeeks",
    date: "June 25, 2025",
    location: "Auditorium",
    description: "Join us for an exciting talk on AI trends for 2025. Experts from industry will share insights on future tech, jobs and startups.",
  },
  {
    id: 2,
    title: "Design Sprint",
    club: "Creatives Club",
    date: "June 28, 2025",
    location: "Room 204",
    description: "Collaborate with UI/UX designers to build rapid prototypes. Learn design thinking hands-on!",
  },
  {
    id: 3,
    title: "Startup Meetup",
    club: "Entrepreneurship Cell",
    date: "July 2, 2025",
    location: "Innovation Hall",
    description: "Network with young founders and listen to startup stories that will inspire your journey.",
  },
  {
    id: 4,
    title: "Hackathon 2025",
    club: "CodeGeeks",
    date: "July 10, 2025",
    location: "Lab 1",
    description: "24-hour coding challenge. Win exciting prizes. Food, caffeine and fun provided!",
  },
];

function Events() {
  const [selectedClub, setSelectedClub] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const clubs = ["All", ...new Set(events.map((e) => e.club))];
  const filteredEvents =
    selectedClub === "All"
      ? events
      : events.filter((e) => e.club === selectedClub);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🎉 Upcoming Events
        </motion.h2>

        {/* Club Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {clubs.map((club) => (
            <button
              key={club}
              onClick={() => setSelectedClub(club)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedClub === club
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {club}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid with Scroll Animation */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-blue-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-1">📍 {event.location}</p>
              <p className="text-gray-600 mb-1">📅 {event.date}</p>
              <p className="text-gray-700 mb-4">🎓 {event.club}</p>
              <button
                onClick={() => openModal(event)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {selectedEvent.title}
            </h3>
            <p className="text-gray-600 mb-1">📍 {selectedEvent.location}</p>
            <p className="text-gray-600 mb-1">📅 {selectedEvent.date}</p>
            <p className="text-gray-700 mb-4">🎓 {selectedEvent.club}</p>
            <p className="text-gray-800">{selectedEvent.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Events;
