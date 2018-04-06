import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import fetchMock          from 'jest-fetch-mock';
import promise            from 'redux-promise-middleware';
import getConcerts        from './concertsActions';


const mockStore = configureMockStore([thunk, promise()]);
window.fetch = fetchMock;

describe('concertsActions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('creates GET_CONCERTS_FULFILLED when fetching concerts is done', () => {
    const response = {
      eventDateName: 'Styrktartonleikar Hugrunar',
      name: 'Gym&Tonic salurinn',
      dateOfShow: '2018-04-05T20:30:00',
      eventHallName: 'Kex Hostel',
      imageSource: 'https://some-url/picture.png',
    };
    fetchMock.mockResponse(JSON.stringify(response));

    const store = mockStore({ concerts: [] });
    const expectedActions = [
      { type: 'GET_CONCERTS_PENDING' },
      {
        type: 'GET_CONCERTS_FULFILLED',
        payload: response,
      },
    ];

    store.dispatch(getConcerts())
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });
});
