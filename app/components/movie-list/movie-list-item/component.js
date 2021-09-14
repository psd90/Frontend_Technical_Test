import { action } from '@ember/object';
import { deleteDoc, updateDoc } from 'firebase/firestore';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import podNames from 'ember-component-css/pod-names';



export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked movies;

  @action async edit(event) {
    try {

      const target = event.target.id;
      const result = window.prompt(`New ${target}`);
      const edit = { [`${target}`]: result };


      if (target === 'rating' && result >= 0 && result <= 5) {
        await updateDoc(this.args.movie.ref, edit);
        window.location.reload(true);
      } else if (
        (target === 'desc' || target === 'title') &&
        result.length > 0
      ) {
        await updateDoc(this.args.movie.ref, edit);
        window.location.reload(true);
      }
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
  
  
  @action async delete() {
    try {
      await deleteDoc(this.args.movie.ref);
      window.location.reload(true);
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }
  
  get movie() {
    return this.args.movie.data();
  }
}
