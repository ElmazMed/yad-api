import { Category } from 'src/schemas/posts.schema';

export class PostDto {
  readonly title: string;
  readonly description: string;
  readonly category: Category;
}
