import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let createQuestion: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    createQuestion = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const result = await createQuestion.execute({
      content: 'Question Content',
      authorId: '1',
      title: 'New Question',
    })

    expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question)
    expect(result.isRight()).toBe(true)
  })
})
