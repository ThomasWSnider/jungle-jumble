import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    console.log('I Exist!');
    this.drawJumbleSelects()
  }

  drawJumbleSelects() {
    const jumbles = AppState.jumbles
    let jumbleString = ``
    jumbles.forEach(jumble => jumbleString += jumble.JumbleSelectTemplate)
    setHTML('jumbleSelect', jumbleString)
    console.log('I did it');
  }

  callActiveJumble(jumbleId) {
    console.log("I'm working dawg ☕", jumbleId);
    jumblesService.callActiveJumble(jumbleId)
  }

  drawActiveJumble() {
    const activeJumble = AppState.activeJumble
    let activeHTML = activeJumble.JumbleActiveTemplate
    setHTML('jumbleCard', activeHTML)
  }
}