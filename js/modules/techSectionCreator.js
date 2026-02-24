export const techSectionCreator = async () => {
    const techSection = document.getElementById("tech");

    if (!techSection) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("tech__title");
    sectionTitle.textContent = contentData.techSection.title;

    const techList = document.createElement("ul");
    techList.classList.add("tech__list");

    techSection.appendChild(sectionTitle);
    techSection.appendChild(techList);

    contentData.techSection.items.forEach((tech) => {
        const techItem = document.createElement("li");
        const techTitle = document.createElement("h3");
        const techCardLabel = document.createElement("div");
        const devider = document.createElement("div");
        const techDescription = document.createElement("p");

        techItem.classList.add("tech__list-item");
        techTitle.classList.add("tech__card-title");
        techCardLabel.classList.add("tech__card-label");
        devider.classList.add("tech__card-divider");
        techDescription.classList.add("tech__card-description");

        techList.appendChild(techItem);
        techItem.appendChild(techTitle);
        techItem.appendChild(techCardLabel);
        techItem.appendChild(devider);
        techItem.appendChild(techDescription);

        techTitle.textContent = tech.title;
        techCardLabel.textContent = tech.label;
        techDescription.textContent = tech.description;
    });
}