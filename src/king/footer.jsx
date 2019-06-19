import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'Kitty'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Writter by {this.author}</span>
      </div>
    )
  }
}