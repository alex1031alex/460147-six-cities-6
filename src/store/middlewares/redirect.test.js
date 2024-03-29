import {redirect} from './redirect';
import {redirectToRoute} from '../action';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => {}),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);

  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Middleware 'Redirect' works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(`/`);
    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to FakeHistory`, () => {
    const {invoke} = mockRedux();

    invoke(redirectToRoute(`/login`));
    expect(fakeHistory.location.pathname).toBe(`/login`);

    invoke(redirectToRoute(`/favorites`));
    expect(fakeHistory.location.pathname).toBe(`/favorites`);
  });

  it(`Non redirect because bad action`, () => {
    const url = `/test`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});

    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
