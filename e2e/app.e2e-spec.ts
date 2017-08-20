import { LabLavoisierPage } from './app.po';

describe('lab-lavoisier App', () => {
  let page: LabLavoisierPage;

  beforeEach(() => {
    page = new LabLavoisierPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
