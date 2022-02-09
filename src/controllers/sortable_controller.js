import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

export default class extends Controller {
  connect() {
    Sortable.create(this.element, {
      ghostClass: "ghost",
      animation: 500
      // onEnd: (event) => {
      //   alert(`${event.oldIndex} moved to ${event.newIndex}`)
      // }
    })
  }
}