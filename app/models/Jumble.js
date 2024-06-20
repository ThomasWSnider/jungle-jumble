import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body

    this.fastestTime = null
    this.startTime = null
    this.wPM = null
  }

  get JumbleSelectTemplate() {
    return `
            <div class="col-12 d-flex justify-content-around align-items-center mb-2">
              <button class="btn btn-warning rounded-pill">start</button>
              <h5 class="mb-1">Easy Jumble</h5>
              <p class="mb-1"><i class="mdi mdi-timer"></i>
                time</p>
              <p class="mb-1">wpm</p>
            </div>
            `
  }
}