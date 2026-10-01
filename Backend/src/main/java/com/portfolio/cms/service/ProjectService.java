package com.portfolio.cms.service;

import com.portfolio.cms.entity.Project;
import com.portfolio.cms.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // READ - Get all projects
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // CREATE - Add a project
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    // UPDATE - Update an existing project
    public Project updateProject(Long id, Project projectDetails) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTitle(projectDetails.getTitle());
        project.setDescription(projectDetails.getDescription());
        project.setImageUrl(projectDetails.getImageUrl());
        project.setGithubUrl(projectDetails.getGithubUrl());
        project.setLiveUrl(projectDetails.getLiveUrl());
        project.setTechnologies(projectDetails.getTechnologies());

        return projectRepository.save(project);
    }

    // DELETE - Delete a project
    public void deleteProject(Long id) {

        if (!projectRepository.existsById(id)) {
            throw new RuntimeException("Project not found");
        }

        projectRepository.deleteById(id);
    }
}