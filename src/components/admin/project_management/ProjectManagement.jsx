import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

export default function ProjectManagement() {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        name: "", image: "", description: "", link: "", techstack: ""
    });
    const [isUpdating, setIsUpdating] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => { fetchProjects(); }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${URL}/projects`);
            setProjects(response.data);
        } catch (e) {
            console.error(e.message);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            if (editingId) {
                await axios.put(`${URL}/projects/${editingId}`, formData);
            } else {
                await axios.post(`${URL}/projects`, formData);
            }
            setFormData({ name: "", image: "", description: "", link: "", techstack: "" });
            setEditingId(null);
            fetchProjects();
            setIsUpdating(false)
        } catch (e) {
            console.log(e.message);
            setIsUpdating(false);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setFormData({
            name: project.name,
            image: project.image,
            description: project.description,
            link: project.link,
            techstack: project.techstack
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${URL}/projects/${id}`);
            fetchProjects();
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Manage Projects</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <div className="flex flex-wrap gap-4 text-slate-800">
                <Input className="flex-1 min-w-[200px]" type="text" name="name" placeholder="Project Name" onChange={handleChange} value={formData.name} required />
                <Input className="flex-1 min-w-[200px]" type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
                <Input className="flex-1 min-w-[200px]" type="text" name="link" placeholder="Project Link" onChange={handleChange} value={formData.link} required />
                <Input className="flex-1 min-w-[200px]" type="text" name="techstack" placeholder="Tech Stack" onChange={handleChange} value={formData.techstack} required />
            </div>
            <Textarea className="mt-4 text-slate-800" name="description" placeholder="Project Description" onChange={handleChange} value={formData.description} required />
            <button 
                className={`mt-4 w-full ${isUpdating ? 'bg-sky-400' : 'bg-sky-500'} p-2 rounded-lg hover:bg-sky-400 transition duration-200 text-white`} 
                type="submit"
                disabled={isUpdating}
            >
                {isUpdating ? 'Updating...' : editingId ? 'Update Project' : 'Add Project'}
            </button>
        </form>

        <h3 className="text-xl font-bold mb-4">Project List</h3>
        <div className="flex flex-wrap gap-6 justify-center">
            {projects.map((project) => (
                <Card key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[48%]">
                    <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                        <h4 className="text-lg font-bold">{project.name}</h4>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <p className="text-sm mt-1"><strong>Tech Stack:</strong> {project.techstack}</p>
                        <div className="flex justify-between mt-4">
                            <a href={project.link.startsWith("https") ? project.link : `https://${project.link}`} target="_blank" className="text-blue-500 font-bold hover:underline">View</a>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(project)} className="hover:bg-yellow-400 py-2 px-3 rounded-md bg-yellow-500 text-white">Edit</button>
                                <button onClick={() => handleDelete(project.id)} className="hover:bg-red-400 bg-red-500 py-2 px-3 rounded-md text-white">Delete</button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
    );
}