export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-darkblue text-beige p-6 rounded-lg w-[90%] max-w-xl shadow-lg">
        <button className="absolute top-2 right-4 text-lg" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <img src={project.image} className="w-full h-40 object-cover rounded" />
        <p className="mt-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-blue-900 rounded text-sm">
              <img src={tech.icon} className="w-4 h-4" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
