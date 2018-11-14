import { ADD_POST } from '../actions';

const defaultState = {
    posts: [
        {
            title: 'post 1'
        },
        {
            title: 'post 2'
        }
    ]
};

const reducer = (state = defaultState, action) => {
    if(action.type === ADD_POST) {
        return {
            ...state,
            posts: [...state.posts, {title: 'new post'}]
        }
    }
    return state;
};

export default reducer;