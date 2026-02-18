import { createLayout } from "./modules/createLayout.js";
import { createDriversSection } from "./modules/driversSectionCreator.js";
import { createAside } from "./modules/asideCreator.js";
import { createRaceTermsSection } from "./modules/raceTermsCreator.js";
import { heroCreator } from "./modules/heroCreator.js";

const notification = document.querySelector("h1");

notification.remove();
createLayout();
createDriversSection();
createAside();
createRaceTermsSection();
heroCreator();