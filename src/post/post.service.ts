import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Posts } from 'src/schemas/posts.schema';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts.name) private postsModel: mongoose.Model<Posts>,
  ) {}

  async findAll() {
    const posts = await this.postsModel.find();

    return posts;
  }

  async createPost(post: Posts) {
    const newPost = await this.postsModel.create(post);

    return newPost;
  }

  async findOne(id: string) {
    const getPost = await this.postsModel.findById(id);
    if (!getPost) {
      throw new NotFoundException("Post can't be found!");
    }
    return getPost;
  }

  async updatePost(id: string, posts: Posts) {
    const updatePost = await this.postsModel.findByIdAndUpdate(id, posts, {
      new: true,
      runValidators: true,
    });

    return updatePost;
  }

  async deletePost(id: string) {
    const deletePost = await this.postsModel.findByIdAndDelete(id);

    return deletePost;
  }
}
