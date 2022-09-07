import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked value;

  fooTask = task(async () => {
    await timeout(1000);
    this.value = Math.random();
  });
}
