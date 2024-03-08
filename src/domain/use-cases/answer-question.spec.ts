import { Answer } from '../entities/answer'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer): Promise<void>  => {
    return
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'Nova resposta',
    instructorId: '1',
    questionId: '1'
  })

  expect(answer.content).toEqual('Nova resposta')
})