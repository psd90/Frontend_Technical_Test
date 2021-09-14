import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-movie-form', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct text for the title label', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#movie-title').hasText('Title');
  });


  test('has the correct text for the description label', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#movie-description').hasText('Description');
  });

  test('has the correct text for the title input placeholder', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#title-input').hasAttribute('placeholder', 'Title..');
  });

  test('has the correct text for the description input placeholder', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#description-input').hasAttribute('placeholder', 'Description..');
  });


});