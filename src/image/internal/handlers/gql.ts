import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import type { FileUpload } from 'graphql-upload/processRequest.js';
import { Image } from 'src/__domain__/image';
import { ImageService } from '../core/service/service';

@Resolver()
export class GqlHandler {
  constructor(protected imageService: ImageService) {}

  @Query(() => Boolean)
  async image(): Promise<boolean> {
    return true;
  }

  @Mutation(() => Image)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream }: FileUpload,
  ): Promise<Image> {
    return await this.imageService.Upload(createReadStream);
  }
}
