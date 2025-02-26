import { Category } from 'src/schemas/posts.schema';

export class UpdatePostDto {
  readonly title: string;
  readonly description: string;
  readonly category: Category;
}
