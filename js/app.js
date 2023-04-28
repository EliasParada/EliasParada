// import { es } from '../lang/es.json';

// let displayNav = document.getElementById('display-nav');
// let displayBtn = document.getElementById('display-btn');

// displayBtn.addEventListener('click', () => {
//     if (displayNav.style.height == '0px') {
//         displayNav.style.height = 'auto';
//     } else {
//         displayNav.style.height = '0px';
//     }
// });

function copyToClipboard() {
    console.log(e.target);
  const textToCopy = this.previousElementSibling.textContent;
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  console.log(textToCopy);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

const copyElements = document.querySelectorAll('.copy');
copyElements.forEach(element => {
  element.addEventListener('click', copyToClipboard);
});

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    console.log(printContents);
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

// const downloadCV = document.getElementById('download');
// downloadCV.addEventListener('click', printDiv('cv'));

  
// const progressBar = document.querySelector("#progress-bar");
// let targetProgress = 75;

// for (let i = 0; i < targetProgress; i++) {
//   let actualProgress = progressBar.style.width;
//   if (actualProgress !== '75%') {
//     progressBar.style.width = `${i}%`;
//   }
  
// }

const dropdownButton = document.querySelector('#options-menu');
const dropdownMenu = document.querySelector('[role="menu"]');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('#options-menu') && !event.target.closest('[role="menu"]')) {
    dropdownMenu.classList.add('hidden');
  }
});

// Example project data
const projects = [
  {
    title: 'Super Mercado',
    description: 'Un comercio web que permite a un super mercado organizar su inventario al hacer uso de un modelo de Inteligencia Artificial para categorizar sus productos.',
    image: 'https://via.placeholder.com/150',
    galleryImages: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100'
    ],
    tags: ['#Python', '#HTML', '#CSS', '#AI']
  },
  {
    title: 'Feels Good',
    description: 'La idea del proyecto es ofrecer una inteligencia artificial que sea capaz de analizar las emociones al chatlar con otras personas, para así recomendar actividades en base al estado de animo de las personas.',
    image: 'https://via.placeholder.com/150',
    galleryImages: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100'
    ],
    tags: ['#PHP', '#Laravel', '#HTML', '#CSS', '#Node.js', '#AI']
  },
  {
    title: 'Normalizador de imagenes',
    description: 'Una página web que permite rellenar un formulario para general un banco de pruebas que permitan entrenar un modelo de reconocimiento de imagenes mediante la normalización de datos.',
    image: 'https://via.placeholder.com/150',
    galleryImages: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100'
    ],
    tags: ['#Python', '#HTML', '#CSS', '#AI']
  }
];

// Get DOM elements
const tagList = document.querySelector('#tagList');
const projectList = document.querySelector('#projectList');
const projectModal = document.querySelector('#projectModal');
const modalTitle = document.querySelector('#modal-title');
const modalGallery = document.querySelector('#modalGallery');
const modalDescription = document.querySelector('#modalDescription');
const closeModalButton = document.querySelector('#closeModalButton');

// Function to create a tag element
const createTagElement = (tag) => {
  const tagElement = document.createElement('li');
  tagElement.classList.add('bg-stone-200', 'rounded-full', 'px-3', 'py-1', 'text-xs', 'font-semibold', 'text-gray-700', 'mr-2', 'mb-2', 'cursor-pointer', 'shadow-xl', 'shadow-gray-600', 'hover:scale-105', 'tag');
  tagElement.textContent = tag;
  tagElement.addEventListener('click', (e) => {
    const allTagElements = document.querySelectorAll('.tag');
    allTagElements.forEach((el) => {
      if (el !== e.target) {
        el.classList.remove('bg-blue-400', 'text-white');
        el.classList.add('bg-stone-200', 'text-gray-700');
      }
    });
    e.target.classList.remove('bg-stone-200', 'text-gray-700');
    e.target.classList.add('bg-blue-400', 'text-white');
    filterProjects(tag);
  });
  return tagElement;
};

const createAllElement = () => {
  const allElement = document.createElement('li');
  allElement.classList.add('bg-stone-200', 'rounded-full', 'px-3', 'py-1', 'text-xs', 'font-semibold', 'text-gray-700', 'mr-2', 'mb-2', 'cursor-pointer', 'shadow-xl', 'shadow-gray-600', 'hover:scale-105');
  allElement.textContent = 'All';
  allElement.addEventListener('click', (e) => {
    const tags = document.querySelectorAll('.tag-list li');
    tags.forEach((tag) => {
      tag.classList.remove('bg-blue-400', 'text-white');
      tag.classList.add('bg-stone-200', 'text-gray-700');
    });
    filterProjects(null); // el parámetro null indica que se deben mostrar todos los proyectos
  });
  return allElement;
};


// Function to create a project card element
const createProjectCardElement = (project) => {
  const projectCardElement = document.createElement('div');
  projectCardElement.classList.add('w-full', 'rounded', 'overflow-hidden', 'shadow-lg', 'bg-gray-300');

  const projectImageElement = document.createElement('img');
  projectImageElement.classList.add('w-full');
  projectImageElement.setAttribute('src', project.image);
  projectImageElement.setAttribute('alt', project.title);
  projectImageElement.addEventListener('click', () => {
    openProjectModal(project);
  });

  const projectBodyElement = document.createElement('div');
  projectBodyElement.classList.add('px-6', 'py-4');

  const projectTitleElement = document.createElement('div');
  projectTitleElement.classList.add('font-bold', 'text-xl', 'mb-2');
  projectTitleElement.textContent = project.title;

  const projectTagListElement = document.createElement('ul');
  projectTagListElement.classList.add('flex', 'flex-wrap', 'flex-row', 'justify-start', 'items-center');

  for (const tag of project.tags) {
    const tagElement = createTagElement(tag);
    projectTagListElement.appendChild(tagElement);
  }

  projectBodyElement.appendChild(projectTitleElement);
  projectBodyElement.appendChild(projectTagListElement);

  projectCardElement.appendChild(projectImageElement);
  projectCardElement.appendChild(projectBodyElement);

  return projectCardElement;
};

// Function to open the project modal
const openProjectModal = (project) => {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalGallery.innerHTML = '';
  for (const image of project.galleryImages) {
    const imageElement = document.createElement('img');
    imageElement.classList.add('w-1/3', 'h-24', 'object-cover');
    imageElement.setAttribute('src', image);
    imageElement.setAttribute('alt', project.title);
    modalGallery.appendChild(imageElement);
  }
  projectModal.classList.remove('hidden');
};

// Function to close the project modal
const closeProjectModal = () => {
  projectModal.classList.add('hidden');
};

// Function to filter projects by tag
const filterProjects = (tag) => {
  const filteredProjects = projects.filter(project => project.tags.includes(tag));
  renderProjects(filteredProjects);
};

// Function to render the tag list
const renderTagList = () => {
  const tags = [...new Set(projects.flatMap(project => project.tags))];
  for (const tag of tags) {
    const tagElement = createTagElement(tag);
    tagList.appendChild(tagElement);
  }
};

// Function to render the project list
const renderProjects = (projectsToRender) => {
  projectList.innerHTML = '';
  for (const project of projectsToRender) {
    const projectCardElement = createProjectCardElement(project);
    projectList.appendChild(projectCardElement);
  }
};

// Add event listener to close modal button
closeModalButton.addEventListener('click', closeProjectModal);

const tagListElement = document.querySelector('.tag-list');
createAllElement();

// Render initial tag list and project list
renderTagList();
renderProjects(projects);
