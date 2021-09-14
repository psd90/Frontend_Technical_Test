import { action } from '@ember/object';
import { deleteDoc } from 'firebase/firestore';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import podNames from 'ember-component-css/pod-names';



export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked movies;

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
