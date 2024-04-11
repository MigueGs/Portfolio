const projects = [
    { 
        title: "Connect 4 AI Implementation",
        description: "Implementation of Connect 4 game with AI opponent using Python.",
        githubLink: "https://github.com/MigueGs/Connect-4-Ai-implementation-"
    },
    { 
        title: "Flight Manager OOP",
        description: "Flight management system implemented with object-oriented programming principles.",
        githubLink: "https://github.com/MigueGs/FlightManagerOOP-"
    },
    { 
        title: "Expense Tracker", 
        description: "The Expense Tracker is a Python application that allows users to manage and track their expenses.",
        githubLink: "https://github.com/MigueGs/expenses-Tracker.py"
    }
];

// Función para crear y mostrar las tarjetas de proyecto
function displayProjects() {
    const projectGrid = document.getElementById("project-grid");
    projectGrid.innerHTML = ""; // Limpiar el contenido actual

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        
        const titleElement = document.createElement("h3");
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;

        const githubLinkElement = document.createElement("a");
        githubLinkElement.textContent = "Take a look on GitHub!";
        githubLinkElement.href = project.githubLink;
        githubLinkElement.target = "_blank"; // Abrir en una nueva pestaña

        const githubIcon = document.createElement("i");
        githubIcon.classList.add("fab", "fa-github"); // Agregar clases para el ícono de GitHub
        githubLinkElement.appendChild(githubIcon); // Agregar el ícono al enlace

        projectCard.appendChild(titleElement);
        projectCard.appendChild(descriptionElement);
        projectCard.appendChild(githubLinkElement);

        projectGrid.appendChild(projectCard);
    });
}

// Llamar a la función para mostrar los proyectos al cargar la página
window.onload = displayProjects;
