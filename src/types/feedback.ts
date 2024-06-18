export type feedbackQualityValueType = 1 | 2 | 3 | 4 | 5 | null
export interface IFeedbackData {
  orderId: number,
  speed: feedbackQualityValueType
  quality: feedbackQualityValueType,
  qualityBox: feedbackQualityValueType,
  impression: feedbackQualityValueType,
  comment: string
}

export interface IFeedbackResult extends IFeedbackData {
  id: number,
}

export enum feedbackStatuses {
  done = 'false',
  requested = 'true',
  unset = 'null'
}
