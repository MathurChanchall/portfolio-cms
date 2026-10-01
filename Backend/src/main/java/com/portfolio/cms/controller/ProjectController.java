package com.portfolio.cms.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.portfolio.cms.entity.Project;
import com.portfolio.cms.service.ProjectService;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    // GET - Get all projects
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    // POST - Add a project
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    // PUT - Update a project
    @PutMapping("/{id}")
    public Project updateProject(
            @PathVariable Long id,
            @RequestBody Project project
    ) {
        return projectService.updateProject(id, project);
    }

    // DELETE - Delete a project
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable Long id) {

        projectService.deleteProject(id);

        return "Project deleted successfully";
    }
}