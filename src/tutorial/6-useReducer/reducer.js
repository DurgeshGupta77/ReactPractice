export const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload];
    if (action.type === 'ADD_ITEM') {
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Item Added Successfully',
        }
    }

    if (action.type === 'RANDOM') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'No data found in Input field'
        }
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: `Item number: ${action.payload} has been removed`,
        }
    }

    throw new Error('No Matching Action Type Found');
};