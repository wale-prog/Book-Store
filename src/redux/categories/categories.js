/* eslint-disable */

const CHECK_STATUS = 'CHECK_STATUS'
const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case CHECK_STATUS:
            return 'Page Under Construction'
        default: return state;
    }
}

export default categoriesReducer;