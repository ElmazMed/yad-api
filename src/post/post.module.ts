import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostSchema } from 'src/schemas/posts.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Posts', schema: PostSchema }])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
