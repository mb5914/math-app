import http from "../http-common";

const getAll = async () => {
    const result = await http.get<Array<any>>("/Question");
    console.log(result);

    return result;
};

const setStatus = (userId: number, questionId: number, state: number) => {
    const data = {userId: userId, questionId: questionId, state: state}
    return http.post<any>(`/UserQuestion/setState`, data);
  };

const QuestionService = {
    getAll,
    setStatus
}

export default QuestionService

