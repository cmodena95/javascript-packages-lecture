import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "results"]

  connect() {
    this.fetchMovies("harry potter")
  }

  search(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    const keyword = this.inputTarget.value
    this.fetchMovies(keyword)
  }

  fetchMovies(keyword) {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(data => this.insertMovies(data))
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }
}
