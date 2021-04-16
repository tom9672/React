
export default function navbarReducer(preState, action) {
    switch (action.current) {
        case 'setting:1':
            return 'page1'
        case 'setting:2':
            return 'page2'
        case 'setting:3':
            return 'page3'
        case 'setting:4':
            return 'page4'
        default:
            return -1
    }
}