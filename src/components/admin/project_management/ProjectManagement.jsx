import { useState } from "react";
import axios from "axios";

export default function ProjectManagement() {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        link: "",
        techstack: ""
    });

    const URL = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URL}/projects`, formData);
    
            console.log(response);
            setProjects([...projects, formData]);
            setFormData({ name: "", image: "", description: "", link: "", techstack: "" });
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <input className="p-2 border rounded" type="text" name="name" placeholder="Project Name"  onChange={handleChange} required />
                    <input className="p-2 border rounded" type="text" name="image" placeholder="Image URL" onChange={handleChange} required />
                    <input className="p-2 border rounded" type="text" name="link" placeholder="Project Link"  onChange={handleChange} required />
                    <input className="p-2 border rounded" type="text" name="techstack" placeholder="Tech Stack (comma separated)" onChange={handleChange} required />
                </div>
                <textarea className="p-2 border rounded w-full mt-4" name="description" placeholder="Project Description" onChange={handleChange} required></textarea>
                <button className="mt-4 bg-teal-500 text-white p-2 rounded" type="submit">Add Project</button>
            </form>

            <h3 className="text-xl font-bold mb-2">Project List</h3>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 shadow-md rounded-md bg-white">
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded" />
                        <h4 className="text-lg font-bold mt-2">{project.name}</h4>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <p className="text-sm mt-1"><strong>Tech Stack:</strong> {project.techstack}</p>
                        <a href={project.link} target="_blank" className="text-teal-500 font-bold mt-2 block">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}