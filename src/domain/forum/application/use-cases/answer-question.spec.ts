import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let answerQuestion: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    answerQuestion = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to answer a question', async () => {
    const { answer } = await answerQuestion.execute({
      instructorId: '1',
      questionId: '2',
      content: 'Answer Content',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
