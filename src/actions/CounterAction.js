export const add = (Number) => {
    return {
        type: "INCREASE",
        payload: Number,
    };
};

export const sub = (Number) => {
    return {
        type: "DECREASE",
        payload: Number,
    };
};


