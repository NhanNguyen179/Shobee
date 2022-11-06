interface IReviewResponse {
  reviews: IReview[];
  totalRating: number;
  limit: number;
  page: number;
  numOfPage: number;
}
interface IReview {
  id: string;
  updatedAt: string;
  content: string;
  rating: number;
  customer: IUser;
}
interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export type { IReview, IReviewResponse };
