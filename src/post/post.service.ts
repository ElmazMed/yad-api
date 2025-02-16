import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Posts } from 'src/schemas/posts.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts.name) private postsModel: mongoose.Model<Posts>,
  ) {}

  async findAll() {
    const posts = await this.postsModel.find();

    return posts;
  }

  async findOne() {
    const post = await this.postsModel.findOne();
    return post;
  }
}
