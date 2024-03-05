import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../types/optional"
import dayjs from "dayjs"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string, 
  content: string, 
  slug: Slug,
  createdAt: Date,
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get title() {
    return this.props.title
  }  
  
  get content() {
    return this.props.content
  }

  get authorId() {
    return this.props.authorId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }  
  
  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNewQuestion(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
  }
  
  static create(
    props: Optional<QuestionProps, 'createdAt'>, 
    id?: UniqueEntityID
  ) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id)

    return question
  }
}