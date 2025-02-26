import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Posts } from 'src/schemas/posts.schema';
import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private posts: PostService) {}

  @Get()
  async findAll(): Promise<Posts[]> {
    return await this.posts.findAll();
  }

  @Post('post')
  async createPost(@Body() post: PostDto): Promise<Posts> {
    return await this.posts.createPost(post);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Posts> {
    return await this.posts.findOne(id);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() posts: UpdatePostDto,
  ): Promise<Posts> {
    return await this.posts.updatePost(id, posts);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<Posts> {
    return this.posts.deletePost(id);
  }
}
