import http from "../http-common";

export const getAll = async () => {
    const result = await http.get<Array<any>>("/Question");
    console.log(result);

    return result;
};

