const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};
