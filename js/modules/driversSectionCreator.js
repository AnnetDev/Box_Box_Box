// import contentData from "../contentData.json" assert { type: "json" };

export const createDriversSection = async () => {
    const teamsSection = document.getElementById("teams");

    if (!teamsSection) {
        return;
    }

    const sectionTitle = document.createElement("h2");
    const teamsList = document.createElement("ul");

    
    teamsList.classList.add("teams__list");
    teamsList.setAttribute("id", "teams__list");
    sectionTitle.classList.add("teams__title");
    sectionTitle.setAttribute("id", "teams__title");

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if(!contentData.teamsSection || !contentData.teamsSection.teams) {
        return;
    }

    sectionTitle.textContent = contentData.teamsSection.title;
    teamsSection.appendChild(sectionTitle);
    teamsSection.appendChild(teamsList);

    contentData.teamsSection.teams.forEach((team) => {
        const teamItem = document.createElement("li");
        const teamName = document.createElement("h3");
        const teamsDrivers = document.createElement("div");
        const driver1 = document.createElement("p");
        const driver2 = document.createElement("p");

        const uniqClass = team.uniqueClassName;

        teamItem.classList.add("teams__list-item");
        teamItem.classList.add(uniqClass);
        teamItem.setAttribute("id", "teams__list-item");
        teamName.classList.add("teams__team-name");
        teamName.setAttribute("id", "teams__team-name");
        teamsDrivers.classList.add("teams__drivers");
        teamsDrivers.setAttribute("id", "teams__drivers");
        driver1.classList.add("teams__driver1");
        driver1.setAttribute("id", "teams__driver1");
        driver2.classList.add("teams__driver2");
        driver2.setAttribute("id", "teams__driver2");

        teamsList.appendChild(teamItem);
        teamItem.appendChild(teamName);
        teamItem.appendChild(teamsDrivers);
        teamsDrivers.appendChild(driver1);
        teamsDrivers.appendChild(driver2);

        teamName.textContent = team.name;
        driver1.textContent = team.drivers[0];
        driver2.textContent = team.drivers[1];


    })

}