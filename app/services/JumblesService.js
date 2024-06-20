import { AppState } from "../AppState.js";

class JumbleService {
  constructor() {
    console.log('I live');
  }


  callActiveJumble(banana) {
    const mango = AppState.jumbles.find(jumble => jumble.id == banana)
    AppState.activeJumble = mango
    console.log(AppState.activeJumble);
  }
}

export const jumblesService = new JumbleService