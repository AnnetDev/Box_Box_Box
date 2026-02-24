import { createLayout } from "./modules/createLayout.js";
import { createDriversSection } from "./modules/driversSectionCreator.js";
import { createAside } from "./modules/asideCreator.js";
import { createRaceTermsSection } from "./modules/raceTermsCreator.js";
import { heroCreator } from "./modules/heroCreator.js";
import { quotesCreator } from "./modules/quotesCreator.js";
import { trackElementsCreator } from "./modules/trackElementsCreator.js";
import { techSectionCreator } from "./modules/techSectionCreator.js";
import { flagsSectionCreator } from "./modules/falgsSectionCreator.js";
import { createFooter } from "./modules/createFooter.js";

const notification = document.getElementById("noJS");

notification.remove();
createLayout();
createDriversSection();
createAside();
createRaceTermsSection();
heroCreator();
quotesCreator();
trackElementsCreator();
techSectionCreator();
flagsSectionCreator();
createFooter();