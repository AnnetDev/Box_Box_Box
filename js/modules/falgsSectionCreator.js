export const flagsSectionCreator = async () => {
    const flagsSection = document.getElementById("flags");

    if (!flagsSection) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    const sectionTitle = document.createElement("h2");
    const flagsList = document.createElement("ul");

    sectionTitle.classList.add("flags__title");
    flagsList.classList.add("flags__list");
    sectionTitle.textContent = contentData.flagsSection.title;

    flagsSection.appendChild(sectionTitle);
    flagsSection.appendChild(flagsList);

    contentData.flagsSection.flags.forEach((flag) => {
        const flagItem = document.createElement("li");
        const flagColor = document.createElement("div");
        const flagTitle = document.createElement("h3");
        const flagDescription = document.createElement("p");

        flagItem.classList.add("flags__list-item");
        flagColor.classList.add("flags__list-item-flag");
        flagColor.classList.add(`${flag.modifierClass}`);
        flagTitle.classList.add("flags__list-item-flag-title");
        flagDescription.classList.add("flags__list-item-flag-description");

        flagTitle.textContent = flag.color;
        flagDescription.textContent = flag.description;

        flagsList.appendChild(flagItem);

        flagItem.appendChild(flagColor);
        flagItem.appendChild(flagTitle);
        flagItem.appendChild(flagDescription);
    });
};