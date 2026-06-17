
function ProjectContainer() {

  return (
    <div className="project-container">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example project card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-400">Brief description of the project goes here.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  )
}

export default ProjectContainer;