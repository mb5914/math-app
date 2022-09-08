import http from "../http-common";

const getAll = async () => {
    const result = await http.get<Array<any>>("/Question");
    console.log(result);

    return result;
};

const QuestionService = {
    getAll,
}

export default QuestionService

