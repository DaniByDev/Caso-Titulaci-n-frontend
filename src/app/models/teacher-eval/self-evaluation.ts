import { AnswerQuestion } from './answer-question';
import {Teacher} from '../app/models.index'

export interface SelfEvaluation {
    id?: number;
    user_id?: number;
    answer_questions?: AnswerQuestion[];
}
