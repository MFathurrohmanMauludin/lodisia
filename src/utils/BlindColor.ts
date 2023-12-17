let temp: boolean;

const blindControl = (status: boolean) => status ? temp = true : temp = false;
const statusBlind = () => temp;

export { blindControl, statusBlind };

